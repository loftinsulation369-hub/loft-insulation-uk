import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Users, Zap, Leaf, Award, Quote, Phone, Star, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: "Why Choose Us – Loft Insulation Services UK",
  description: "Discover why homeowners choose Loft Insulation Services UK. Experienced professionals, energy efficiency experts, customer-focused service, eco-friendly solutions, and guaranteed workmanship.",
  keywords: ["why choose us", "loft insulation services", "certified installers", "energy efficiency", "eco-friendly insulation", "guaranteed workmanship", "professional insulation UK"],
  authors: [{ name: "LIS UK" }],
  creator: "LIS UK",
  publisher: "Loft Insulation Services UK",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.loft-insulation-services-uk.com'),
  alternates: {
    canonical: '/why-choose-us',
    languages: {
      'en-US': '/why-choose-us',
      'en-GB': '/why-choose-us',
      'en': '/why-choose-us',
    },
  },
  openGraph: {
    title: "Why Choose Us – Loft Insulation Services UK",
    description: "Learn why homeowners trust Loft Insulation Services UK for professional, energy-efficient loft insulation solutions with guaranteed workmanship.",
    url: 'https://www.loft-insulation-services-uk.com/why-choose-us',
    siteName: 'Loft Insulation Services UK',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/why-choose-us-image.webp',
        width: 1200,
        height: 630,
        alt: 'Why Choose Loft Insulation Services UK',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/why-choose-us-image.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose Us – Loft Insulation Services UK',
    description: 'Discover why homeowners choose Loft Insulation Services UK for professional, energy-efficient loft insulation solutions.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/why-choose-us-image.webp'],
    creator: '@l4rgindia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'og:image:alt': 'Why Choose Loft Insulation Services UK',
    'twitter:image:alt': 'Why Choose Loft Insulation Services UK',
  },
};

export default function WhyChooseUsPage() {
  const features = [
    {
      icon: Users,
      title: 'Experienced Professionals',
      description: 'Our certified insulation specialists have years of hands-on experience, ensuring every project meets the highest industry standards.',
      gradient: 'from-blue-500 to-blue-600',
      hoverColor: 'group-hover:text-blue-600'
    },
    {
      icon: Zap,
      title: 'Energy Efficiency Experts',
      description: 'We use premium materials and proven installation techniques that help reduce heat loss, lower energy bills, and increase property value.',
      gradient: 'from-yellow-500 to-orange-500',
      hoverColor: 'group-hover:text-yellow-600'
    },
    {
      icon: CheckCircle,
      title: 'Customer-Focused Service',
      description: 'From initial consultation to project completion, we provide honest advice, transparent quotes, and friendly customer support.',
      gradient: 'from-green-500 to-emerald-500',
      hoverColor: 'group-hover:text-green-600'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Solutions',
      description: 'We\'re committed to helping the UK achieve its carbon reduction goals by promoting sustainable, environmentally responsible insulation options.',
      gradient: 'from-emerald-500 to-teal-500',
      hoverColor: 'group-hover:text-emerald-600'
    },
    {
      icon: Award,
      title: 'Guaranteed Workmanship',
      description: 'Every installation is backed by our quality guarantee, giving you total peace of mind.',
      gradient: 'from-purple-500 to-indigo-500',
      hoverColor: 'group-hover:text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-blue via-blue-500 to-secondary-blue py-20 lg:py-28 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30 shadow-2xl transform hover:scale-110 transition-transform duration-300">
                  <Star className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Why Choose Us
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed mb-4 drop-shadow-md">
              At Loft Insulation Services UK, we pride ourselves on delivering high-quality insulation
              solutions that improve comfort, energy efficiency, and sustainability in homes across the UK.
            </p>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed drop-shadow-md">
              Whether you&apos;re upgrading an existing property or insulating a new build, we&apos;re the trusted
              experts you can rely on.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-20 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Here&apos;s why homeowners choose us:
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-secondary-blue mx-auto rounded-full"></div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-10 w-10" />
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 ${feature.hoverColor}`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Closing Statement */}
          <div className="bg-gradient-to-br from-primary-blue via-blue-600 to-secondary-blue rounded-3xl p-10 md:p-14 text-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Let us help you save money, stay warm, and go green — all at once.
              </h3>
              <p className="text-xl md:text-2xl mb-10 opacity-95">
                Ready to improve your home&apos;s energy efficiency? Get in touch with our team today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary-blue text-lg font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
                >
                  <Quote className="h-6 w-6 mr-3" />
                  Get Free Quote
                </Link>
                <Link
                  href="tel:+44123456789"
                  className="inline-flex items-center justify-center px-10 py-5 bg-transparent text-white text-lg font-bold rounded-xl border-2 border-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                >
                  <Phone className="h-6 w-6 mr-3" />
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-3xl shadow-2xl p-10 md:p-12 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                  500+
                </div>
                <div className="text-gray-700 font-semibold text-lg">Projects Completed</div>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                  98%
                </div>
                <div className="text-gray-700 font-semibold text-lg">Customer Satisfaction</div>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                  25%
                </div>
                <div className="text-gray-700 font-semibold text-lg">Average Energy Savings</div>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                  10+
                </div>
                <div className="text-gray-700 font-semibold text-lg">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

