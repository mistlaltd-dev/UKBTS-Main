import { Wifi, CheckCircle, ArrowRight, Zap, Shield, Headphones as HeadphonesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Broadband() {
  const packages = [
    {
      name: 'FTTC Business',
      speed: 'Up to 80Mbps',
      features: [
        'Superfast fibre to cabinet',
        'Static IP address included',
        'Priority support',
        'No usage limits',
        '99.9% uptime guarantee',
      ],
      ideal: 'Small businesses & offices',
      link: '/contact',
    },
    {
      name: 'FTTP Business',
      speed: 'Up to 1Gbps',
      features: [
        'Full fibre to premises',
        'Symmetric speeds available',
        'Multiple static IPs',
        '24/7 priority support',
        '99.95% uptime guarantee',
      ],
      ideal: 'Growing businesses',
      popular: true,
      link: '/contact',
    },
    {
      name: 'Dedicated Leased Line',
      speed: 'Up to 10Gbps',
      features: [
        'Fully dedicated connection',
        'Guaranteed symmetric speeds',
        'Unlimited static IPs',
        '24/7 premium support',
        '99.99% uptime SLA',
      ],
      ideal: 'Enterprise & mission-critical',
      link: '/leased-lines',
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast Speeds',
      description: 'From 80Mbps FTTC to 10Gbps leased lines, we have the right speed for your business needs.',
    },
    {
      icon: Shield,
      title: 'Business-Grade Reliability',
      description: 'Industry-leading SLAs with proactive monitoring and rapid fault resolution.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Expert Local Support',
      description: 'Dedicated account managers who understand Somerset and Dorset business requirements.',
    },
  ];

  const features = [
    'Static IP addresses as standard',
    'No traffic shaping or throttling',
    'Priority fault repair',
    'Free router with business features',
    'Flexible contract terms',
    'Easy upgrade paths',
    'VPN support',
    'Advanced QoS for VoIP',
  ];

  return (
    <div>
      <SEO
        title="Business Broadband Somerset & Dorset | FTTC, FTTP & Leased Lines | UKBTS"
        description="Business broadband for Somerset and Dorset. FTTC up to 80Mbps, FTTP up to 1Gbps, and dedicated leased lines. Static IP included, 99.9% uptime SLA. Check availability."
        keywords="business broadband Somerset, FTTC Dorset, FTTP Somerset, fibre broadband, dedicated internet, business internet"
        canonicalUrl="/broadband"
      />
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                <span className="text-cyan-400 text-sm font-medium">Internet Connectivity</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Business Broadband for Somerset & Dorset
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                High-speed, reliable business internet with dedicated support. Serving businesses across
                Taunton, Yeovil, Bournemouth, Weymouth, and throughout the region.
              </p>
              <Link
                to="/contact"
                className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 inline-flex items-center gap-2"
              >
                Check Availability <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Business Broadband?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Priority Support</div>
                    <div className="text-gray-300 text-sm">Faster response times when you need help</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Better SLAs</div>
                    <div className="text-gray-300 text-sm">Guaranteed uptime and fix times</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Static IP Included</div>
                    <div className="text-gray-300 text-sm">Essential for hosting and remote access</div>
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
              Choose the Right Speed for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From standard fibre to dedicated leased lines, we have solutions for every business size and requirement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-xl scale-105'
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
                <div className={`text-4xl font-bold mb-6 ${pkg.popular ? 'text-white' : 'text-cyan-600'}`}>
                  {pkg.speed}
                </div>
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2">
                      <CheckCircle
                        className={`flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-white' : 'text-cyan-600'}`}
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
                  to={pkg.link}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-white text-cyan-600 hover:bg-gray-100'
                      : 'bg-cyan-500 text-white hover:bg-cyan-600'
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
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Business Features Included</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-0.5" size={18} />
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
                Local Expertise, Regional Coverage
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We understand the unique connectivity challenges facing businesses across Somerset and Dorset.
                From rural locations to busy town centers, we have solutions that work.
              </p>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Coverage Areas Include:</h3>
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
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-semibold"
              >
                Check Your Location
              </Link>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Service Level Agreement</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span>Network Uptime</span>
                  <span className="text-cyan-400 font-bold text-xl">99.9%</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span>Fault Response Time</span>
                  <span className="text-cyan-400 font-bold text-xl">4 hours</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span>Fix Time Target</span>
                  <span className="text-cyan-400 font-bold text-xl">24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Support Available</span>
                  <span className="text-cyan-400 font-bold text-xl">24/7</span>
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
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is the difference between FTTC and FTTP broadband?</h3>
              <p className="text-gray-600">FTTC (Fibre to the Cabinet) runs fibre to the street cabinet and then uses existing copper wiring to your premises, delivering speeds up to 80Mbps. FTTP (Fibre to the Premises) runs fibre all the way to your building, delivering speeds up to 1Gbps with more consistent performance. We'll check which options are available at your location.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do I get a static IP address with business broadband?</h3>
              <p className="text-gray-600">Yes. All our business broadband packages include at least one static IP address as standard. This is essential for hosting, VPNs and remote access solutions. Additional static IPs are available on FTTP and leased line products.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What happens if my broadband goes down?</h3>
              <p className="text-gray-600">All our business broadband products come with a priority fault repair SLA. We aim to respond within 4 hours and resolve faults within 24 hours. For mission-critical connectivity, we recommend our dedicated leased line products which carry a 99.99% uptime SLA.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I use business broadband for VoIP calls?</h3>
              <p className="text-gray-600">Yes. Our business broadband products support VoIP with QoS configuration to prioritise call traffic. For higher call volumes we recommend FTTP or a leased line to ensure consistent call quality across all channels.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long does installation take?</h3>
              <p className="text-gray-600">FTTC connections are typically activated within 5–10 working days. FTTP installations may take 2–4 weeks depending on whether full-fibre infrastructure is already present at your premises. We'll confirm timescales after checking availability at your location.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Wifi className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Upgrade Your Business Connectivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Check availability at your location and get a custom quote. We'll help you choose the
            perfect broadband solution for your business needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all font-semibold text-lg shadow-lg hover:shadow-cyan-500/50"
          >
            Check Availability & Get Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
