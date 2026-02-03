import { Phone, Mail, Menu, X, ChevronDown, PhoneCall, Wifi, Building2, Server, Cable, Headset, LogIn, Cloud } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const services = [
    {
      name: 'Business Phone Systems',
      path: '/phone-systems',
      description: 'Modern VoIP PBX solutions for businesses',
      icon: Phone
    },
    {
      name: 'SIP Trunks',
      path: '/sip-trunks',
      description: 'Flexible VoIP solutions that scale with your business',
      icon: PhoneCall
    },
    {
      name: 'Business Broadband',
      path: '/broadband',
      description: 'High-speed internet with dedicated support',
      icon: Wifi
    },
    {
      name: '3CX PBX',
      path: '/3cx',
      description: 'Advanced unified communications platform',
      icon: Building2
    },
    {
      name: 'Yeastar PBX',
      path: '/yeastar',
      description: 'Powerful, industry-specific phone systems',
      icon: Server
    },
    {
      name: 'Leased Lines',
      path: '/leased-lines',
      description: 'Dedicated enterprise connectivity with SLAs',
      icon: Cable
    },
    {
      name: 'WiFi Installation',
      path: '/wifi-installation',
      description: 'Enterprise-grade wireless networks and WiFi 6',
      icon: Wifi
    },
    {
      name: 'Management Services',
      path: '/management',
      description: '24/7 monitoring and proactive support',
      icon: Headset
    },
  ];

  const handleMobileClick = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setLoginOpen(false);
  };

  const loginOptions = [
    {
      name: 'Cloud Portal',
      url: 'https://hsp.ukbts.co.uk',
      description: 'Access your cloud management portal',
      icon: Cloud,
      external: true
    },
    {
      name: 'VoIP Portal',
      path: '/login',
      description: 'Manage your VoIP services',
      icon: PhoneCall,
      external: false
    },
  ];

  const isServicePage = services.some(service => service.path === currentPath);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="bg-gray-900 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:03333583976" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Phone size={16} />
                <span>0333 358 3976</span>
              </a>
              <a href="mailto:contact@ukbts.co.uk" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Mail size={16} />
                <span>contact@ukbts.co.uk</span>
              </a>
            </div>
            <div className="hidden sm:block text-xs">
              Serving businesses across Somerset, Dorset & UK
            </div>
          </div>
        </div>

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex-shrink-0">
              <img src="/Copy of UKBTS LOGO NEW (1).png" alt="UKBTS Telecommunications" className="h-12" />
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              <Link
                to="/"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPath === '/'
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-200 hover:text-cyan-400 hover:bg-gray-700'
                }`}
              >
                Home
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    isServicePage
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-200 hover:text-cyan-400 hover:bg-gray-700'
                  }`}
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-screen max-w-4xl">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {services.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.path}
                              to={service.path}
                              className={`text-left p-4 rounded-lg transition-all hover:bg-cyan-50 group ${
                                currentPath === service.path ? 'bg-cyan-50' : ''
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <div className={`p-2 rounded-lg transition-colors ${
                                  currentPath === service.path
                                    ? 'bg-cyan-100 text-cyan-600'
                                    : 'bg-gray-100 text-gray-600 group-hover:bg-cyan-100 group-hover:text-cyan-600'
                                }`}>
                                  <Icon size={20} />
                                </div>
                                <div className="flex-1">
                                  <div className={`font-semibold mb-1 group-hover:text-cyan-600 ${
                                    currentPath === service.path ? 'text-cyan-600' : 'text-gray-900'
                                  }`}>
                                    {service.name}
                                  </div>
                                  <div className="text-sm text-gray-600">{service.description}</div>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPath === '/contact'
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-200 hover:text-cyan-400 hover:bg-gray-700'
                }`}
              >
                Contact
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setLoginOpen(true)}
                onMouseLeave={() => setLoginOpen(false)}
              >
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    currentPath === '/login'
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-200 hover:text-cyan-400 hover:bg-gray-700'
                  }`}
                >
                  Clients
                  <ChevronDown size={16} className={`transition-transform ${loginOpen ? 'rotate-180' : ''}`} />
                </button>

                {loginOpen && (
                  <div className="absolute top-full right-0 pt-2 w-80">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4">
                      <div className="space-y-2">
                        {loginOptions.map((option) => {
                          const Icon = option.icon;
                          if (option.external) {
                            return (
                              <a
                                key={option.name}
                                href={option.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-left p-4 rounded-lg transition-all hover:bg-cyan-50 group block"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="p-2 rounded-lg bg-gray-100 text-gray-600 group-hover:bg-cyan-100 group-hover:text-cyan-600 transition-colors">
                                    <Icon size={20} />
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-semibold mb-1 text-gray-900 group-hover:text-cyan-600">
                                      {option.name}
                                    </div>
                                    <div className="text-sm text-gray-600">{option.description}</div>
                                  </div>
                                </div>
                              </a>
                            );
                          }
                          return (
                            <Link
                              key={option.name}
                              to={option.path!}
                              className={`text-left p-4 rounded-lg transition-all hover:bg-cyan-50 group block ${
                                currentPath === option.path ? 'bg-cyan-50' : ''
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <div className={`p-2 rounded-lg transition-colors ${
                                  currentPath === option.path
                                    ? 'bg-cyan-100 text-cyan-600'
                                    : 'bg-gray-100 text-gray-600 group-hover:bg-cyan-100 group-hover:text-cyan-600'
                                }`}>
                                  <Icon size={20} />
                                </div>
                                <div className="flex-1">
                                  <div className={`font-semibold mb-1 group-hover:text-cyan-600 ${
                                    currentPath === option.path ? 'text-cyan-600' : 'text-gray-900'
                                  }`}>
                                    {option.name}
                                  </div>
                                  <div className="text-sm text-gray-600">{option.description}</div>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Link
              to="/contact"
              className="hidden lg:block bg-cyan-500 text-white px-6 py-2.5 rounded-md hover:bg-cyan-600 transition-colors font-medium"
            >
              Get a Quote
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-200 hover:bg-gray-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 space-y-1">
              <Link
                to="/"
                onClick={handleMobileClick}
                className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPath === '/'
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-200 hover:text-cyan-400 hover:bg-gray-700'
                }`}
              >
                Home
              </Link>

              <div className="space-y-1">
                <div className="px-4 py-2 text-sm font-semibold text-gray-200">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={handleMobileClick}
                    className={`block w-full text-left px-6 py-2 rounded-md text-sm transition-colors ${
                      currentPath === service.path
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-700'
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/contact"
                onClick={handleMobileClick}
                className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPath === '/contact'
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-200 hover:text-cyan-400 hover:bg-gray-700'
                }`}
              >
                Contact
              </Link>

              <div className="space-y-1">
                <div className="px-4 py-2 text-sm font-semibold text-gray-200">Clients</div>
                {loginOptions.map((option) => {
                  if (option.external) {
                    return (
                      <a
                        key={option.name}
                        href={option.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleMobileClick}
                        className="block w-full text-left px-6 py-2 rounded-md text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition-colors"
                      >
                        {option.name}
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={option.name}
                      to={option.path!}
                      onClick={handleMobileClick}
                      className={`block w-full text-left px-6 py-2 rounded-md text-sm transition-colors ${
                        currentPath === option.path
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-700'
                      }`}
                    >
                      {option.name}
                    </Link>
                  );
                })}
              </div>

              <Link
                to="/contact"
                onClick={handleMobileClick}
                className="block w-full bg-cyan-500 text-white px-4 py-2.5 rounded-md hover:bg-cyan-600 transition-colors font-medium mt-2 text-center"
              >
                Get a Quote
              </Link>
            </div>
          )}
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img src="/copy_of_ukbts_icon_new.png" alt="UKBTS" className="h-12 mb-4" />
              <p className="text-gray-400 text-sm mb-4">
                Leading telecommunications provider for Somerset & Dorset businesses
              </p>
              <div className="space-y-2 text-sm">
                <a href="tel:03333583976" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Phone size={16} />
                  <span>0333 358 3976</span>
                </a>
                <a href="mailto:contact@ukbts.co.uk" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Mail size={16} />
                  <span>contact@ukbts.co.uk</span>
                </a>
              </div>
              <div className="mt-4 text-sm text-gray-400">
                <div>First Floor, Swan Buildings</div>
                <div>20 Swan Street</div>
                <div>Manchester M4 5JW</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {services.map((service) => (
                  <li key={service.path}>
                    <Link to={service.path} className="hover:text-cyan-400 transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Taunton</li>
                <li>Yeovil</li>
                <li>Bridgwater</li>
                <li>Bournemouth</li>
                <li>Poole</li>
                <li>Weymouth</li>
                <li>Dorchester</li>
                <li>All Somerset & Dorset</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} UKBTS Telecommunications. All rights reserved.</p>
            <p className="mt-2">
              Managed by <a href="https://axyonholdings.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Axyon Holdings</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
