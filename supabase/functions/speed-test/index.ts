import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
  "Pragma": "no-cache",
};

const MAX_DOWNLOAD_BYTES = 100 * 1024 * 1024;
const MAX_UPLOAD_BYTES = 50 * 1024 * 1024;
const CHUNK_SIZE = 256 * 1024;

const baseChunk = new Uint8Array(CHUNK_SIZE);
crypto.getRandomValues(baseChunk);

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const action = url.searchParams.get("action") || "ping";

    if (action === "ping") {
      return new Response(
        JSON.stringify({ t: Date.now() }),
        {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    if (action === "download") {
      const requested = parseInt(url.searchParams.get("bytes") || "1048576", 10);
      const bytes = Math.max(1024, Math.min(isNaN(requested) ? 1048576 : requested, MAX_DOWNLOAD_BYTES));

      const stream = new ReadableStream({
        start(controller) {
          let sent = 0;
          while (sent < bytes) {
            const remaining = bytes - sent;
            const size = Math.min(CHUNK_SIZE, remaining);
            const piece = size === CHUNK_SIZE ? baseChunk : baseChunk.subarray(0, size);
            controller.enqueue(piece);
            sent += size;
          }
          controller.close();
        },
      });

      return new Response(stream, {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/octet-stream",
          "Content-Length": String(bytes),
          "Content-Encoding": "identity",
        },
      });
    }

    if (action === "upload") {
      if (req.method !== "POST") {
        return new Response(
          JSON.stringify({ error: "Upload requires POST" }),
          {
            status: 405,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      const reader = req.body?.getReader();
      let received = 0;

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          if (value) {
            received += value.byteLength;
            if (received > MAX_UPLOAD_BYTES) {
              return new Response(
                JSON.stringify({ error: "Upload too large" }),
                {
                  status: 413,
                  headers: { ...corsHeaders, "Content-Type": "application/json" },
                }
              );
            }
          }
        }
      }

      return new Response(
        JSON.stringify({ received, t: Date.now() }),
        {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({ error: "Unknown action" }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Speed test error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Internal error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
