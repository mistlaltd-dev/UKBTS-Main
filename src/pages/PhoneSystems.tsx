import { Phone, CheckCircle, ArrowRight, Users, Cloud, Smartphone, Headset, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PhoneSystems() {
  const benefits = [
    'Unified communications across all devices',
    'Significant cost savings vs traditional systems',
    'Mobile apps for iOS and Android',
    'Advanced call management features',
    'Voicemail to email integration',
    'Auto-attendant and call queues',
    'Conference calling and video meetings',
    'Easy to scale as your business grows',
  ];

  const features = [
    {
      icon: Cloud,
      title: 'Cloud or On-Premise',
      description: 'Choose between cloud-hosted or on-premise deployment based on your business needs and preferences.',
    },
    {
      icon: Smartphone,
      title: 'Work From Anywhere',
      description: 'Full desk phone functionality on mobile devices. Perfect for remote teams and flexible working.',
    },
    {
      icon: Shield,
      title: 'Reliable & Secure',
      description: 'Enterprise-grade security with automatic failover and business continuity features.',
    },
  ];

  const systems = [
    {
      title: '3CX Phone System',
      description: 'Industry-leading unified communications platform with advanced features and easy management.',
      features: [
        'Web-based management console',
        'Built-in video conferencing',
        'CRM integrations',
        'Free mobile apps',
      ],
      link: '/3cx',
    },
    {
      title: 'Yeastar Phone System',
      description: 'Powerful IP PBX solutions designed for businesses of all sizes with industry-specific features.',
      features: [
        'Hotel & hospitality features',
        'Call center capabilities',
        'Multi-site support',
        'Advanced reporting',
      ],
      link: '/yeastar',
    },
  ];

  const useCases = [
    {
      title: 'Small Businesses',
      description: 'Professional phone system features without the enterprise price tag. Perfect for startups and growing companies.',
      location: 'Taunton Tech Startup',
    },
    {
      title: 'Multi-Location Businesses',
      description: 'Connect all your offices with a unified system. Free calls between sites and centralized management.',
      location: 'Dorset Retail Group',
    },
    {
      title: 'Professional Services',
      description: 'Impress clients with professional call handling, voicemail-to-email, and mobile integration.',
      location: 'Yeovil Accounting Firm',
    },
  ];

  const faqs = [
    {
      question: 'What is a business phone system?',
      answer: 'A business phone system (also called PBX or IP-PBX) is a private telephone network that provides advanced features like call routing, voicemail, auto-attendants, and more. Modern systems use VoIP technology to deliver calls over your internet connection.',
    },
    {
      question: 'Cloud-hosted or on-premise - which is better?',
      answer: 'Cloud-hosted systems require minimal upfront investment and include automatic updates and maintenance. On-premise systems offer more control and can be more cost-effective long-term for larger businesses. We can help you choose the best option.',
    },
    {
      question: 'Can employees use their mobile phones?',
      answer: 'Yes! Modern phone systems include mobile apps that provide full desk phone functionality on smartphones. Employees can make and receive calls using their business number from anywhere.',
    },
    {
      question: 'How long does installation take?',
      answer: 'Cloud-hosted systems can be operational within a few days. On-premise installations typically take 1-2 weeks depending on complexity and the number of users.',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                <span className="text-cyan-400 text-sm font-medium">Communication Solutions</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Business Phone Systems for Somerset & Dorset
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Modern, feature-rich phone systems that enhance productivity and professionalism.
                Serving businesses in Taunton, Yeovil, Bournemouth, Weymouth, and across the region.
              </p>
              <Link
                to="/contact"
                className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 inline-flex items-center gap-2"
              >
                Get a Quote <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="space-y-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-200">{benefit}</span>
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
              Why Upgrade Your Phone System?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern business phone systems provide advanced features, cost savings, and flexibility that traditional systems simply cannot match.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Phone System Solutions
            </h2>
            <p className="text-xl text-gray-600">
              We partner with leading manufacturers to deliver the best phone systems for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {systems.map((system, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{system.title}</h3>
                <p className="text-gray-600 mb-6">{system.description}</p>
                <ul className="space-y-3 mb-6">
                  {system.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={system.link}
                  className="text-cyan-600 hover:text-cyan-700 font-semibold inline-flex items-center gap-2"
                >
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Business
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses across Somerset and Dorset benefit from modern phone systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="text-sm text-cyan-600 font-medium">{useCase.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Upgrade Your Phone System?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free consultation and discover how a modern phone system can transform your business communications.
          </p>
          <Link
            to="/contact"
            className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 inline-block"
          >
            Request Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
