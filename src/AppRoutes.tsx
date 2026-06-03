import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import SpeedTest from './pages/SpeedTest';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return null;
}

export default function AppRoutes() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      <ScrollToTop />
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
            <Route path="/speed-test" element={<SpeedTest />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}
