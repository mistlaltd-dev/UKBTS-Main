import { Phone, CheckCircle, ArrowRight, TrendingDown, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SipTrunks() {
  const benefits = [
    'Significant cost savings vs traditional phone lines',
    'Unlimited scalability - add channels instantly',
    'Geographic & non-geographic number options',
    'Disaster recovery & business continuity',
    'Advanced call routing & management',
    'Integration with existing PBX systems',
    'Crystal clear HD voice quality',
    'Flexible monthly contracts',
  ];

  const features = [
    {
      icon: TrendingDown,
      title: 'Cost Effective',
      description: 'Save up to 60% compared to traditional ISDN lines with transparent per-channel pricing.',
    },
    {
      icon: Zap,
      title: 'Instant Deployment',
      description: 'Get up and running in hours, not weeks. No engineer visits required for most installations.',
    },
    {
      icon: Shield,
      title: 'Reliable & Secure',
      description: '99.9% uptime SLA with enterprise-grade security and encryption protocols.',
    },
  ];

  const useCases = [
    {
      title: 'Growing Businesses',
      description: 'Scale your phone system as you grow without infrastructure changes or large capital expenditure.',
      location: 'Taunton Manufacturing Company',
    },
    {
      title: 'Multi-Site Operations',
      description: 'Connect all your locations with a unified phone system, enabling free inter-site calls.',
      location: 'Dorset Retail Chain',
    },
    {
      title: 'Remote Teams',
      description: 'Support home workers and remote teams with full PBX functionality anywhere.',
      location: 'Yeovil Professional Services',
    },
  ];

  const faqs = [
    {
      question: 'What is a SIP trunk?',
      answer: 'A SIP trunk is a virtual phone line delivered over your internet connection. It replaces traditional ISDN lines and allows you to make and receive calls over IP, offering greater flexibility and cost savings.',
    },
    {
      question: 'How many channels do I need?',
      answer: 'Generally, you need one channel per simultaneous call. We can analyze your call patterns and recommend the optimal number to balance cost and capacity.',
    },
    {
      question: 'Can I keep my existing numbers?',
      answer: 'Yes! We can port your existing geographic and non-geographic numbers to our SIP trunk service with minimal disruption.',
    },
    {
      question: 'What internet speed do I need?',
      answer: 'Each call typically uses 100Kbps of bandwidth. We recommend a dedicated business broadband connection with QoS support for best quality.',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                <span className="text-cyan-400 text-sm font-medium">VoIP Solutions</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                SIP Trunks for Somerset & Dorset Businesses
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Flexible, cost-effective, and reliable SIP trunk solutions that scale with your business.
                Perfect for businesses in Taunton, Yeovil, Bournemouth, and across the region.
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
              Why Choose UKBTS SIP Trunks?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our SIP trunk solutions are designed specifically for UK businesses, with local support and expertise.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Features List</h3>
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
              Perfect for Every Business Type
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses across Somerset and Dorset are benefiting from our SIP trunk solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="text-sm text-cyan-600 font-medium">{useCase.location}</div>
              </div>
            ))}
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
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
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
            Ready to Switch to SIP Trunks?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free consultation and custom quote for your business. Our team will analyze your needs
            and design the perfect SIP trunk solution.
          </p>
          <Link
            to="/contact"
            className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 inline-block"
          >
            Request Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
