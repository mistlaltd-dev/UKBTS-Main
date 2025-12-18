import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const formData: ContactFormData = await req.json();

    const { name, email, phone, company, service, message } = formData;

    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Supabase credentials not configured");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        phone,
        company: company || "",
        service: service || "",
        message,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const tenantId = Deno.env.get("MS_TENANT_ID");
    const clientId = Deno.env.get("MS_CLIENT_ID");
    const clientSecret = Deno.env.get("MS_CLIENT_SECRET");
    const senderEmail = Deno.env.get("MS_SENDER_EMAIL") || "noreply@ukbts.co.uk";

    if (!tenantId || !clientId || !clientSecret) {
      console.log("Microsoft Graph credentials not configured, submission saved to database only");
      return new Response(
        JSON.stringify({ success: true, message: "Submission saved successfully" }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    console.log("Attempting to get Microsoft Graph access token...");
    console.log("Tenant ID exists:", !!tenantId);
    console.log("Client ID exists:", !!clientId);
    console.log("Client Secret exists:", !!clientSecret);

    try {
      const tokenResponse = await fetch(
        `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            client_id: clientId,
            client_secret: clientSecret,
            scope: "https://graph.microsoft.com/.default",
            grant_type: "client_credentials",
          }),
        }
      );

      console.log("Token response status:", tokenResponse.status);

      if (!tokenResponse.ok) {
        const errorText = await tokenResponse.text();
        console.error("Failed to get access token:", errorText);
        return new Response(
          JSON.stringify({ success: true, message: "Submission saved (email failed)" }),
          {
            status: 200,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          }
        );
      }

      const { access_token } = await tokenResponse.json();
      console.log("Access token obtained successfully");

      const emailContent = `
New Contact Form Submission
============================

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || "Not provided"}
Service Interest: ${service || "Not specified"}

Message:
${message}

---
Submitted: ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}
      `.trim();

      const emailPayload = {
        message: {
          subject: `New Contact Form - ${name} - ${service || "General Enquiry"}`,
          body: {
            contentType: "Text",
            content: emailContent,
          },
          from: {
            emailAddress: {
              address: senderEmail,
            },
          },
          toRecipients: [
            {
              emailAddress: {
                address: "contact@ukbts.co.uk",
              },
            },
          ],
          replyTo: [
            {
              emailAddress: {
                address: email,
                name: name,
              },
            },
          ],
        },
        saveToSentItems: false,
      };

      console.log("Attempting to send email from:", senderEmail);

      const emailResponse = await fetch(
        `https://graph.microsoft.com/v1.0/users/${senderEmail}/sendMail`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailPayload),
        }
      );

      console.log("Email response status:", emailResponse.status);

      if (!emailResponse.ok) {
        const errorText = await emailResponse.text();
        console.error("Failed to send email:", emailResponse.status, errorText);
        return new Response(
          JSON.stringify({ success: true, message: "Submission saved (email failed)" }),
          {
            status: 200,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          }
        );
      }

      console.log("Email sent successfully!");

      return new Response(
        JSON.stringify({ success: true, message: "Submission saved and email sent" }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      return new Response(
        JSON.stringify({ success: true, message: "Submission saved (email failed)" }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
