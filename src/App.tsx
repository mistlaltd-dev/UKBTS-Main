import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import StructuredData from './components/StructuredData';
import Home from './pages/Home';
import SipTrunks from './pages/SipTrunks';
import Broadband from './pages/Broadband';
import ThreeCX from './pages/ThreeCX';
import Yeastar from './pages/Yeastar';
import LeasedLines from './pages/LeasedLines';
import Management from './pages/Management';
import WiFiInstallation from './pages/WiFiInstallation';
import Contact from './pages/Contact';
import Login from './pages/Login';
import PhoneSystems from './pages/PhoneSystems';

const pageTitles: Record<string, string> = {
  '/': 'UKBTS Telecommunications - VoIP, Broadband & PBX Provider | Somerset & Dorset',
  '/sip-trunks': 'SIP Trunks Somerset & Dorset | VoIP Solutions | UKBTS',
  '/broadband': 'Business Broadband Somerset & Dorset | FTTC & FTTP | UKBTS',
  '/3cx': '3CX PBX Systems Somerset & Dorset | Certified Partner | UKBTS',
  '/yeastar': 'Yeastar PBX Somerset & Dorset | Authorized Partner | UKBTS',
  '/leased-lines': 'Leased Lines Somerset & Dorset | Dedicated Connectivity | UKBTS',
  '/management': 'Managed Telecoms Services Somerset & Dorset | 24/7 Support | UKBTS',
  '/wifi-installation': 'WiFi Installation Somerset & Dorset | Business Wireless Networks | UKBTS',
  '/phone-systems': 'Business Phone Systems Somerset & Dorset | VoIP PBX Solutions | UKBTS',
  '/contact': 'Contact UKBTS | Somerset & Dorset Telecommunications',
  '/login': 'Login | UKBTS Control Panel',
};

const pageDescriptions: Record<string, string> = {
  '/': 'Leading VoIP, broadband, and PBX provider for Somerset & Dorset businesses. SIP trunks, business broadband, 3CX, Yeastar, leased lines, and managed services.',
  '/sip-trunks': 'Professional SIP trunk solutions for businesses in Somerset & Dorset. Cost-effective VoIP telephony with reliable call quality and scalability.',
  '/broadband': 'High-speed business broadband for Somerset & Dorset. FTTC and FTTP connections with dedicated support and competitive pricing.',
  '/3cx': 'Official 3CX certified partner providing advanced PBX phone systems for businesses in Somerset & Dorset. Professional installation and support.',
  '/yeastar': 'Authorized Yeastar PBX partner in Somerset & Dorset. Scalable IP phone systems with advanced features for growing businesses.',
  '/leased-lines': 'Dedicated leased line connectivity for businesses in Somerset & Dorset. Guaranteed bandwidth with 24/7 monitoring and support.',
  '/management': 'Comprehensive managed telecoms services in Somerset & Dorset. 24/7 support, proactive monitoring, and expert consultation.',
  '/wifi-installation': 'Professional WiFi installation and wireless network solutions for Somerset & Dorset businesses. Enterprise-grade WiFi 6, site surveys, and expert support.',
  '/phone-systems': 'Business phone systems for Somerset & Dorset including 3CX and Yeastar. Cloud and on-premise VoIP PBX solutions with professional installation in Taunton, Yeovil, Bournemouth, and Weymouth.',
  '/contact': 'Get in touch with UKBTS Telecommunications. Expert telecoms solutions for businesses across Somerset & Dorset.',
  '/login': 'Access your UKBTS control panel to manage your telecommunications services.',
};

const pageKeywords: Record<string, string> = {
  '/': 'VoIP provider Somerset, business broadband Dorset, PBX systems, SIP trunks, telecommunications Somerset, 3CX partner, Yeastar dealer, leased lines',
  '/sip-trunks': 'SIP trunks Somerset, VoIP trunks Dorset, business VoIP, SIP providers UK, cost-effective telephony, cloud telephony',
  '/broadband': 'business broadband Somerset, FTTC Dorset, FTTP Somerset, fibre broadband, dedicated internet, business internet',
  '/3cx': '3CX Somerset, 3CX Dorset, PBX systems, IP phone system, 3CX certified partner, business phone system',
  '/yeastar': 'Yeastar Somerset, Yeastar PBX, IP PBX systems, Yeastar dealer, business phone system Dorset',
  '/leased-lines': 'leased lines Somerset, dedicated connectivity Dorset, ethernet circuits, point to point, guaranteed bandwidth',
  '/management': 'managed telecoms, IT support Somerset, 24/7 support, telecoms management, proactive monitoring Dorset',
  '/wifi-installation': 'WiFi installation Somerset, wireless network Dorset, WiFi 6, business WiFi, site survey, access points, enterprise WiFi',
  '/phone-systems': 'business phone systems Somerset, VoIP phone system Dorset, IP PBX, cloud phone system, 3CX Taunton, Yeastar Yeovil, phone system Bournemouth, PBX Weymouth',
  '/contact': 'contact UKBTS, Somerset telecoms, Dorset communications, get quote, telecoms consultation',
  '/login': 'control panel login, customer portal, VoiceHost login, manage services',
};

function MetaUpdater() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const baseUrl = 'https://www.ukbts.co.uk';
    const fullUrl = `${baseUrl}${path}`;

    document.title = pageTitles[path] || pageTitles['/'];

    const updateOrCreateMeta = (selector: string, content: string) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        if (selector.includes('property')) {
          element.setAttribute('property', selector.match(/\[property="([^"]+)"\]/)![1]);
        } else {
          element.setAttribute('name', selector.match(/\[name="([^"]+)"\]/)![1]);
        }
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    const updateOrCreateLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (element) {
        element.href = href;
      } else {
        element = document.createElement('link');
        element.rel = rel;
        element.href = href;
        document.head.appendChild(element);
      }
    };

    updateOrCreateMeta('meta[name="description"]', pageDescriptions[path] || pageDescriptions['/']);
    updateOrCreateMeta('meta[name="keywords"]', pageKeywords[path] || pageKeywords['/']);
    updateOrCreateMeta('meta[name="robots"]', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    updateOrCreateLink('canonical', fullUrl);

    updateOrCreateMeta('meta[property="og:title"]', pageTitles[path] || pageTitles['/']);
    updateOrCreateMeta('meta[property="og:description"]', pageDescriptions[path] || pageDescriptions['/']);
    updateOrCreateMeta('meta[property="og:url"]', fullUrl);
    updateOrCreateMeta('meta[property="og:image"]', `${baseUrl}/Copy%20of%20UKBTS%20LOGO%20NEW%20(1).png`);
    updateOrCreateMeta('meta[property="og:type"]', 'website');
    updateOrCreateMeta('meta[property="og:site_name"]', 'UKBTS Telecommunications');

    updateOrCreateMeta('meta[name="twitter:card"]', 'summary_large_image');
    updateOrCreateMeta('meta[name="twitter:title"]', pageTitles[path] || pageTitles['/']);
    updateOrCreateMeta('meta[name="twitter:description"]', pageDescriptions[path] || pageDescriptions['/']);
    updateOrCreateMeta('meta[name="twitter:image"]', `${baseUrl}/Copy%20of%20UKBTS%20LOGO%20NEW%20(1).png`);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return null;
}

function AppRoutes() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      <MetaUpdater />
      <StructuredData />
      {isLoginPage ? (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sip-trunks" element={<SipTrunks />} />
            <Route path="/broadband" element={<Broadband />} />
            <Route path="/3cx" element={<ThreeCX />} />
            <Route path="/yeastar" element={<Yeastar />} />
            <Route path="/leased-lines" element={<LeasedLines />} />
            <Route path="/management" element={<Management />} />
            <Route path="/wifi-installation" element={<WiFiInstallation />} />
            <Route path="/phone-systems" element={<PhoneSystems />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
