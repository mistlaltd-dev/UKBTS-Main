import { Wifi, CheckCircle, ArrowRight, Radio, Shield, Headphones as HeadphonesIcon, Network, Gauge, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function WiFiInstallation() {
  const packages = [
    {
      name: 'Small Office WiFi',
      coverage: 'Up to 150m²',
      features: [
        '1-2 access points',
        'Single SSID setup',
        'Basic security configuration',
        'Coverage mapping',
        'Installation & testing',
      ],
      ideal: 'Small offices & retail',
    },
    {
      name: 'Business WiFi',
      coverage: 'Up to 500m²',
      features: [
        '3-5 access points',
        'Multiple SSID support',
        'Guest network isolation',
        'Advanced security',
        'Site survey & installation',
      ],
      ideal: 'Medium businesses',
      popular: true,
    },
    {
      name: 'Enterprise WiFi',
      coverage: 'Unlimited',
      features: [
        'Unlimited access points',
        'Centralised management',
        'RADIUS authentication',
        'Advanced analytics',
        'Full site survey & design',
      ],
      ideal: 'Large enterprises',
    },
  ];

  const benefits = [
    {
      icon: Radio,
      title: 'Professional Installation',
      description: 'Expert engineers design and install your wireless network for optimal coverage and performance.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'WPA3 encryption, guest isolation, and advanced security features to protect your business.',
    },
    {
      icon: Gauge,
      title: 'High Performance',
      description: 'WiFi 6 technology delivering speeds up to 9.6Gbps with minimal interference.',
    },
  ];

  const features = [
    'Site survey & heat mapping',
    'WiFi 6 (802.11ax) support',
    'Seamless roaming',
    'Guest portal options',
    'VLAN segmentation',
    'Bandwidth management',
    'Remote monitoring',
    'Lifetime support',
  ];

  const solutions = [
    {
      icon: Network,
      title: 'Office WiFi Networks',
      description: 'Reliable wireless connectivity for desktops, laptops, and mobile devices throughout your workspace.',
    },
    {
      icon: Lock,
      title: 'Secure Guest WiFi',
      description: 'Separate guest networks with captive portal, keeping your business network secure.',
    },
    {
      icon: Radio,
      title: 'Warehouse Coverage',
      description: 'Industrial-grade access points designed for large spaces and challenging environments.',
    },
  ];

  return (
    <div>
      <SEO
        title="Business WiFi Installation Somerset & Dorset | WiFi 6 Experts | UKBTS"
        description="Professional business WiFi installation across Somerset and Dorset. WiFi 6 access points, full site surveys, enterprise security and guest networks. Request a free survey."
        keywords="WiFi installation Somerset, wireless network Dorset, WiFi 6, business WiFi, site survey, access points, enterprise WiFi"
        canonicalUrl="/wifi-installation"
      />
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <span className="text-blue-400 text-sm font-medium">Wireless Solutions</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Professional WiFi Installation for Somerset & Dorset Businesses
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Enterprise-grade wireless networks designed, installed, and supported by local experts.
                Serving Taunton, Yeovil, Bournemouth, Bridgwater, Weymouth, and throughout the region.
              </p>
              <Link
                to="/contact"
                className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-all font-semibold text-lg shadow-lg hover:shadow-blue-500/50 inline-flex items-center gap-2"
              >
                Request Site Survey <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Professional WiFi?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Complete Coverage</div>
                    <div className="text-gray-300 text-sm">No dead zones - reliable WiFi everywhere you need it</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Expert Design</div>
                    <div className="text-gray-300 text-sm">Site surveys and heat mapping for optimal performance</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Enterprise Security</div>
                    <div className="text-gray-300 text-sm">Advanced encryption and network segmentation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              WiFi Solutions for Every Business Size
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From small offices to large enterprise campuses, we design and install wireless networks that deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl scale-105'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block mb-4 px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <div className={`text-4xl font-bold mb-6 ${pkg.popular ? 'text-white' : 'text-blue-600'}`}>
                  {pkg.coverage}
                </div>
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2">
                      <CheckCircle
                        className={`flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-white' : 'text-blue-600'}`}
                        size={18}
                      />
                      <span className={`text-sm ${pkg.popular ? 'text-white' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <div className={`text-sm font-medium mb-6 ${pkg.popular ? 'text-white/90' : 'text-gray-600'}`}>
                  Ideal for: {pkg.ideal}
                </div>
                <Link
                  to="/contact"
                  className={`block text-center w-full py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Specialized WiFi Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom wireless networks designed for your specific business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's Included</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Local WiFi Experts Across Somerset & Dorset
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our team of certified wireless engineers provides professional WiFi installation and support
                throughout the region. We understand local building structures and challenges.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Service Areas Include:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <div>• Taunton</div>
                  <div>• Bournemouth</div>
                  <div>• Yeovil</div>
                  <div>• Poole</div>
                  <div>• Bridgwater</div>
                  <div>• Weymouth</div>
                  <div>• Frome</div>
                  <div>• Dorchester</div>
                  <div>• Glastonbury</div>
                  <div>• Sherborne</div>
                  <div>• Chard</div>
                  <div>• Blandford</div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
              >
                Request Site Survey
              </Link>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Installation Process</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <h4 className="font-bold">Site Survey</h4>
                  </div>
                  <p className="text-gray-300 text-sm ml-11">
                    Comprehensive assessment of your premises, including coverage mapping and interference analysis.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <h4 className="font-bold">Network Design</h4>
                  </div>
                  <p className="text-gray-300 text-sm ml-11">
                    Custom wireless solution designed for your specific requirements and building layout.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <h4 className="font-bold">Professional Installation</h4>
                  </div>
                  <p className="text-gray-300 text-sm ml-11">
                    Expert installation with minimal disruption, including cable management and AP mounting.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <h4 className="font-bold">Testing & Handover</h4>
                  </div>
                  <p className="text-gray-300 text-sm ml-11">
                    Thorough testing and staff training to ensure optimal performance and user satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do I need a site survey before WiFi installation?</h3>
              <p className="text-gray-600">Yes — we always carry out a site survey before designing your wireless network. This lets us assess the building layout, identify potential interference sources, and produce a coverage heat map so you know exactly where access points will be placed before any work begins.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is WiFi 6 and do I need it?</h3>
              <p className="text-gray-600">WiFi 6 (802.11ax) is the latest wireless standard, delivering speeds up to 9.6Gbps with significantly better performance in environments with many connected devices. We recommend WiFi 6 for most business installations as it future-proofs your network and handles high device density — such as open plan offices, warehouses and hospitality venues — far more effectively than older standards.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can you install WiFi in a warehouse or large open space?</h3>
              <p className="text-gray-600">Yes. We regularly install wireless networks in warehouses, manufacturing facilities and large open spaces across Somerset and Dorset. We use industrial-grade access points designed for challenging environments, and our site survey accounts for ceiling height, racking, machinery and other factors that affect signal propagation.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How do you keep the guest WiFi separate from our business network?</h3>
              <p className="text-gray-600">We use VLAN segmentation and separate SSIDs to ensure guest traffic is completely isolated from your internal business network. Guest networks can also be configured with captive portals, bandwidth limits and access time restrictions.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What ongoing support do you provide after installation?</h3>
              <p className="text-gray-600">All installations include a full handover and staff briefing. We offer remote monitoring and support packages to keep your wireless network running optimally — contact us to discuss ongoing support options for your business.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Wifi className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Wireless Network?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts design and install a professional WiFi solution tailored to your business.
            Request a free site survey and quote today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-all font-semibold text-lg shadow-lg hover:shadow-blue-500/50"
          >
            Request Free Site Survey
          </Link>
        </div>
      </section>
    </div>
  );
}
