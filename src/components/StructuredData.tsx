import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const baseUrl = 'https://www.ukbts.co.uk';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TelecommunicationsOrganization",
  "name": "UKBTS Telecommunications",
  "url": baseUrl,
  "logo": `${baseUrl}/UKBTS.png`,
  "image": `${baseUrl}/UKBTS.png`,
  "description": "Leading VoIP, broadband, and PBX provider for Somerset & Dorset businesses. SIP trunks, business broadband, 3CX, Yeastar, leased lines, and managed services.",
  "email": "contact@ukbts.co.uk",
  "telephone": "+44-333-358-3976",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Somerset",
    "addressCountry": "GB"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Taunton"
    },
    {
      "@type": "City",
      "name": "Yeovil"
    },
    {
      "@type": "City",
      "name": "Bridgwater"
    },
    {
      "@type": "City",
      "name": "Bournemouth"
    },
    {
      "@type": "City",
      "name": "Poole"
    },
    {
      "@type": "City",
      "name": "Weymouth"
    }
  ],
  "sameAs": [],
  "priceRange": "$$"
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "UKBTS Telecommunications",
  "url": baseUrl,
  "telephone": "+44-333-358-3976",
  "email": "contact@ukbts.co.uk",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Somerset",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "51.0",
      "longitude": "-2.5"
    },
    "geoRadius": "50000"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ]
};

const serviceSchemas: Record<string, any> = {
  '/sip-trunks': {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SIP Trunk Services",
    "provider": {
      "@type": "Organization",
      "name": "UKBTS Telecommunications"
    },
    "areaServed": {
      "@type": "State",
      "name": "Somerset and Dorset"
    },
    "description": "Professional SIP trunk solutions for businesses. Cost-effective VoIP telephony with reliable call quality and scalability."
  },
  '/broadband': {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Business Broadband Internet",
    "provider": {
      "@type": "Organization",
      "name": "UKBTS Telecommunications"
    },
    "areaServed": {
      "@type": "State",
      "name": "Somerset and Dorset"
    },
    "description": "High-speed business broadband. FTTC and FTTP connections with dedicated support and competitive pricing."
  },
  '/3cx': {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "3CX PBX Phone Systems",
    "provider": {
      "@type": "Organization",
      "name": "UKBTS Telecommunications"
    },
    "areaServed": {
      "@type": "State",
      "name": "Somerset and Dorset"
    },
    "description": "Official 3CX certified partner providing advanced PBX phone systems. Professional installation and support."
  },
  '/yeastar': {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Yeastar PBX Systems",
    "provider": {
      "@type": "Organization",
      "name": "UKBTS Telecommunications"
    },
    "areaServed": {
      "@type": "State",
      "name": "Somerset and Dorset"
    },
    "description": "Authorized Yeastar PBX partner. Scalable IP phone systems with advanced features for growing businesses."
  },
  '/leased-lines': {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Leased Line Connectivity",
    "provider": {
      "@type": "Organization",
      "name": "UKBTS Telecommunications"
    },
    "areaServed": {
      "@type": "State",
      "name": "Somerset and Dorset"
    },
    "description": "Dedicated leased line connectivity. Guaranteed bandwidth with 24/7 monitoring and support."
  },
  '/management': {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Managed Telecommunications Services",
    "provider": {
      "@type": "Organization",
      "name": "UKBTS Telecommunications"
    },
    "areaServed": {
      "@type": "State",
      "name": "Somerset and Dorset"
    },
    "description": "Comprehensive managed telecoms services. 24/7 support, proactive monitoring, and expert consultation."
  },
  '/wifi-installation': {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "WiFi Installation and Wireless Network Solutions",
    "provider": {
      "@type": "Organization",
      "name": "UKBTS Telecommunications"
    },
    "areaServed": {
      "@type": "State",
      "name": "Somerset and Dorset"
    },
    "description": "Professional WiFi installation and wireless network solutions. Enterprise-grade WiFi 6, site surveys, and expert support."
  }
};

const breadcrumbSchemas: Record<string, any> = {
  '/sip-trunks': {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "SIP Trunks",
        "item": `${baseUrl}/sip-trunks`
      }
    ]
  },
  '/broadband': {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Business Broadband",
        "item": `${baseUrl}/broadband`
      }
    ]
  },
  '/3cx': {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "3CX PBX Systems",
        "item": `${baseUrl}/3cx`
      }
    ]
  },
  '/yeastar': {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Yeastar PBX",
        "item": `${baseUrl}/yeastar`
      }
    ]
  },
  '/leased-lines': {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Leased Lines",
        "item": `${baseUrl}/leased-lines`
      }
    ]
  },
  '/management': {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Managed Services",
        "item": `${baseUrl}/management`
      }
    ]
  },
  '/contact': {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": `${baseUrl}/contact`
      }
    ]
  },
  '/wifi-installation': {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "WiFi Installation",
        "item": `${baseUrl}/wifi-installation`
      }
    ]
  }
};

export default function StructuredData() {
  const location = useLocation();

  useEffect(() => {
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    const addSchema = (schema: any) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addSchema(organizationSchema);
    addSchema(localBusinessSchema);

    const path = location.pathname;
    if (serviceSchemas[path]) {
      addSchema(serviceSchemas[path]);
    }
    if (breadcrumbSchemas[path]) {
      addSchema(breadcrumbSchemas[path]);
    }
  }, [location]);

  return null;
}
