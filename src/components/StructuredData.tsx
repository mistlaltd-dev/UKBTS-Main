import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const baseUrl = 'https://ukbts.co.uk';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "UKBTS Telecommunications",
  "url": baseUrl,
  "telephone": "+443333583976",
  "email": "contact@ukbts.co.uk",
  "description": "Business VoIP, PBX systems, broadband and telecoms services for Somerset and Dorset.",
  "areaServed": ["Taunton", "Yeovil", "Bridgwater", "Bournemouth", "Poole", "Weymouth", "Dorchester", "Somerset", "Dorset"],
  "serviceType": ["Business Phone Systems", "SIP Trunks", "Business Broadband", "3CX PBX", "Yeastar PBX", "Leased Lines", "WiFi Installation", "Managed Telecoms Services"],
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
    "description": "Authorised Yeastar PBX partner. Scalable IP phone systems with advanced features for growing businesses."
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
  },
  '/speed-test': {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "UKBTS Broadband Speed Test",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "description": "Free anonymous broadband speed test from UKBTS. Measure download speed, upload speed, ping and jitter against UK infrastructure.",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "GBP" },
    "provider": {
      "@type": "Organization",
      "name": "UKBTS Telecommunications"
    }
  }
};


const faqSchemas: Record<string, any> = {
  '/phone-systems': {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a business phone system?",
        "acceptedAnswer": { "@type": "Answer", "text": "A business phone system (also called PBX or IP-PBX) is a private telephone network that provides advanced features like call routing, voicemail, auto-attendants, and more. Modern systems use VoIP technology to deliver calls over your internet connection." }
      },
      {
        "@type": "Question",
        "name": "Cloud-hosted or on-premise - which is better?",
        "acceptedAnswer": { "@type": "Answer", "text": "Cloud-hosted systems require minimal upfront investment and include automatic updates and maintenance. On-premise systems offer more control and can be more cost-effective long-term for larger businesses." }
      },
      {
        "@type": "Question",
        "name": "Can employees use their mobile phones?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Modern phone systems include mobile apps that provide full desk phone functionality on smartphones. Employees can make and receive calls using their business number from anywhere." }
      },
      {
        "@type": "Question",
        "name": "How long does installation take?",
        "acceptedAnswer": { "@type": "Answer", "text": "Cloud-hosted systems can be operational within a few days. On-premise installations typically take 1-2 weeks depending on complexity and the number of users." }
      }
    ]
  },
  '/sip-trunks': {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a SIP trunk?",
        "acceptedAnswer": { "@type": "Answer", "text": "A SIP trunk is a virtual phone line delivered over your internet connection. It replaces traditional ISDN lines and allows you to make and receive calls over IP, offering greater flexibility and cost savings." }
      },
      {
        "@type": "Question",
        "name": "How many SIP channels do I need?",
        "acceptedAnswer": { "@type": "Answer", "text": "Generally, you need one channel per simultaneous call. We can analyse your call patterns and recommend the optimal number to balance cost and capacity." }
      },
      {
        "@type": "Question",
        "name": "Can I keep my existing phone numbers?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. We can port your existing geographic and non-geographic numbers to our SIP trunk service with minimal disruption." }
      },
      {
        "@type": "Question",
        "name": "What internet speed do I need for SIP trunks?",
        "acceptedAnswer": { "@type": "Answer", "text": "Each call typically uses 100Kbps of bandwidth. We recommend a dedicated business broadband connection with QoS support for best quality." }
      }
    ]
  }
};

const leasedLineServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Dedicated Leased Lines",
  "provider": { "@type": "LocalBusiness", "name": "UKBTS Telecommunications" },
  "areaServed": "Somerset and Dorset",
  "offers": [
    {
      "@type": "Offer",
      "name": "100Mbps Leased Line",
      "price": "299",
      "priceCurrency": "GBP",
      "priceSpecification": { "@type": "UnitPriceSpecification", "unitText": "month" }
    },
    {
      "@type": "Offer",
      "name": "1Gbps Leased Line",
      "price": "599",
      "priceCurrency": "GBP",
      "priceSpecification": { "@type": "UnitPriceSpecification", "unitText": "month" }
    }
  ]
};

const threeCXReviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": { "@type": "Service", "name": "3CX PBX Installation by UKBTS" },
  "author": { "@type": "Organization", "name": "Somerset Professional Services, Taunton" },
  "reviewBody": "Switching to 3CX with UKBTS has transformed how our team communicates. The mobile apps mean we can work flexibly, and the call center features have improved our client service dramatically.",
  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
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
  },
  '/speed-test': {
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
        "name": "Broadband Speed Test",
        "item": `${baseUrl}/speed-test`
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

    addSchema(localBusinessSchema);

    const path = location.pathname;
    if (serviceSchemas[path]) {
      addSchema(serviceSchemas[path]);
    }
    if (faqSchemas[path]) {
      addSchema(faqSchemas[path]);
    }
    if (path === '/leased-lines') {
      addSchema(leasedLineServiceSchema);
    }
    if (path === '/3cx') {
      addSchema(threeCXReviewSchema);
    }
    if (breadcrumbSchemas[path]) {
      addSchema(breadcrumbSchemas[path]);
    }
  }, [location]);

  return null;
}
