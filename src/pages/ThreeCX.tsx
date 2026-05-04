import { Server, CheckCircle, ArrowRight, Cloud, Building2, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function ThreeCX() {
  const deploymentOptions = [
    {
      icon: Cloud,
      name: 'Cloud Hosted',
      description: 'Fully managed in the cloud',
      features: [
        'No hardware to maintain',
        'Automatic updates',
        'Scale instantly',
        'Disaster recovery included',
        'Access from anywhere',
      ],
      ideal: 'Remote teams & growing businesses',
    },
    {
      icon: Building2,
      name: 'On-Premise',
      description: 'Installed at your location',
      features: [
        'Complete control',
        'Maximum security',
        'No monthly hosting fees',
        'Existing hardware use',
        'Custom integrations',
      ],
      ideal: 'Businesses with IT infrastructure',
    },
    {
      icon: Server,
      name: 'Hybrid',
      description: 'Best of both worlds',
      features: [
        'Flexible deployment',
        'Staged migration',
        'Business continuity',
        'Cost optimization',
        'Future-proof',
      ],
      ideal: 'Large enterprises',
    },
  ];

  const features = [
    'Unified communications (voice, video, chat)',
    'Mobile & desktop apps',
    'Call recording & analytics',
    'Auto attendant & IVR',
    'Call queues & ring groups',
    'Voicemail to email',
    'Web conferencing',
    'CRM integrations',
    'Presence & chat',
    'Hot desking',
    'Call center features',
    'Microsoft 365 integration',
  ];

  const benefits = [
    {
      title: 'Save Up to 80%',
      description: 'Compared to traditional PBX systems, 3CX dramatically reduces telephony costs.',
    },
    {
      title: 'Work Anywhere',
      description: 'Full PBX functionality on desktop, mobile, and web for true mobility.',
    },
    {
      title: 'Easy Management',
      description: 'Intuitive web-based interface means you can manage everything yourself.',
    },
    {
      title: 'Proven Reliability',
      description: 'Trusted by over 600,000 companies worldwide with 99.99% uptime.',
    },
  ];

  const integrations = [
    'Microsoft 365',
    'Salesforce',
    'HubSpot',
    'Zoho CRM',
    'Freshdesk',
    'ConnectWise',
    'Outlook',
    'Google Workspace',
  ];

  return (
    <div>
      <SEO
        title="3CX PBX Somerset & Dorset | Certified 3CX Partner | Installation & Support | UKBTS"
        description="Certified 3CX partner supplying, installing and supporting 3CX phone systems across Somerset and Dorset. Cloud, on-premise and hybrid deployment. Book a free demo."
        keywords="3CX Somerset, 3CX Dorset, PBX systems, IP phone system, 3CX certified partner, business phone system"
        canonicalUrl="/3cx"
      />
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                <span className="text-cyan-400 text-sm font-medium">Certified 3CX Partner</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                3CX PBX Systems for Somerset & Dorset
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business communications with 3CX - the award-winning phone system trusted
                by businesses across Taunton, Yeovil, Bournemouth, and throughout the region.
              </p>
              <Link
  to="https://www.3cx.com/phone-system/download-phone-system/?resellerId=243873"
                className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 inline-flex items-center gap-2"
              >
                Try Free <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why 3CX?</h3>
              <div className="space-y-4">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold mb-1">{benefit.title}</div>
                      <div className="text-gray-300 text-sm">{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Flexible Deployment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the deployment model that best fits your business requirements and IT strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deploymentOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-200"
                >
                  <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.name}</h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <div className="space-y-3 mb-6">
                    {option.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2">
                        <CheckCircle className="text-cyan-600 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-medium text-gray-600 border-t border-gray-200 pt-4">
                    Ideal for: {option.ideal}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Feature Set
            </h2>
            <p className="text-xl text-gray-600">
              Everything your business needs for modern unified communications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="text-cyan-600 flex-shrink-0" size={20} />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Call Center Features</h3>
              <p className="text-gray-600 mb-6">
                Transform your support team with advanced call center capabilities:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Real-time queue monitoring & wallboards</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Agent performance analytics</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Callback & voicemail options</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Skills-based routing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Queue announcements & music</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <Smartphone className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold mb-6">Mobile & Remote Working</h3>
              <p className="text-gray-300 mb-6">
                Enable your team to work from anywhere with full PBX functionality:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-200">iOS & Android apps</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-200">Windows & Mac desktop apps</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-200">Web-based client</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-200">Hot desking support</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-200">Seamless extension switching</span>
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
              Seamless CRM Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect 3CX with your existing business tools for enhanced productivity
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center font-semibold text-gray-700 hover:from-cyan-50 hover:to-cyan-100 hover:text-cyan-700 transition-all"
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Expert Installation & Support
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                As certified 3CX partners serving Somerset and Dorset, we provide complete installation,
                configuration, and ongoing support services.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Professional Installation</div>
                    <div className="text-gray-600 text-sm">
                      Expert configuration tailored to your business processes
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">User Training</div>
                    <div className="text-gray-600 text-sm">
                      Comprehensive training for administrators and end users
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Ongoing Support</div>
                    <div className="text-gray-600 text-sm">
                      24/7 technical support from our local team
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Regular Updates</div>
                    <div className="text-gray-600 text-sm">
                      Keep your system current with the latest features
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Case Study</h3>
              <div className="mb-4">
                <div className="text-cyan-600 font-semibold">Somerset Professional Services</div>
                <div className="text-sm text-gray-600">Taunton - 50 users</div>
              </div>
              <blockquote className="text-gray-700 italic mb-6">
                "Switching to 3CX with UKBTS has transformed how our team communicates. The mobile apps
                mean we can work flexibly, and the call center features have improved our client service
                dramatically. The installation was seamless and the ongoing support has been excellent."
              </blockquote>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">Results:</div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <div className="text-2xl font-bold text-cyan-600">40%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-600">95%</div>
                    <div className="text-sm text-gray-600">User Satisfaction</div>
                  </div>
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
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is 3CX and how does it work?</h3>
              <p className="text-gray-600">3CX is a software-based phone system (PBX) that runs on Windows, Linux or in the cloud. It delivers calls over your internet connection using VoIP, replacing traditional phone lines and hardware PBX systems. It includes a full unified communications suite covering voice, video, live chat and mobile apps — all managed from a single web-based console.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Is 3CX suitable for small businesses?</h3>
              <p className="text-gray-600">Yes. 3CX offers a free tier for up to 10 users, making it accessible for startups and small businesses. As you grow, you can upgrade to paid tiers without changing your system. UKBTS can help you start small and scale your 3CX deployment as your team expands.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can 3CX work with our existing phones?</h3>
              <p className="text-gray-600">3CX is compatible with a wide range of SIP-based IP phones from manufacturers including Yealink, Fanvil, Snom and Polycom. If you have existing compatible hardware, we can integrate it. We'll assess your current equipment during consultation and advise on compatibility.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is the difference between cloud-hosted and on-premise 3CX?</h3>
              <p className="text-gray-600">Cloud-hosted 3CX is managed on a server we or 3CX maintain — there is no on-site hardware to look after and updates are handled automatically. On-premise means the 3CX server is installed at your location, giving you full control and no ongoing hosting dependency. Hybrid options also exist for businesses with specific requirements.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long does 3CX installation take?</h3>
              <p className="text-gray-600">A cloud-hosted 3CX system can typically be provisioned and configured within 1–3 days. On-premise installations may take slightly longer depending on server preparation and the number of users to configure. We handle all installation, configuration and user setup as part of our service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Server className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience 3CX?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free demo and see how 3CX can transform your business communications. Our team will
            show you the features most relevant to your business needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all font-semibold text-lg shadow-lg hover:shadow-cyan-500/50"
          >
            Book Your Free Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
