import { useEffect, useRef } from "react";

const HALO_CONFIG = {
  apiUrl: "https://hsp.ukbts.co.uk/api",
  ticketTypeId: 29,
  ticketTypeKey: "981fedbe-e746-4827-89ac-e9a95510d853",
  cssUrl: "https://hsp.ukbts.co.uk/embed/newticket.css",
  scriptUrl: "https://hsp.ukbts.co.uk/embed/newticket.js",
};

export default function HaloTicketForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (window as any).haloFormConfig = {
      haloApiUrl: HALO_CONFIG.apiUrl,
      ticketTypeId: HALO_CONFIG.ticketTypeId,
      ticketTypeKey: HALO_CONFIG.ticketTypeKey,
    };

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = HALO_CONFIG.cssUrl;
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = HALO_CONFIG.scriptUrl;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
      delete (window as any).haloFormConfig;
    };
  }, []);

  return (
    <div
      id="halo-form"
      ref={containerRef}
    />
  );
}
