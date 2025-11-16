import type { Metadata } from "next";
import { Cookie, HelpCircle, Settings, BarChart3, Zap, Shield, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: "Cookies Policy – Loft Insulation Services UK",
  description: "Read the Cookies Policy of Loft Insulation Services UK. Understand how we use cookies to improve website experience and track analytics.",
  keywords: ["Loft Insulation Services UK cookies", "cookies policy", "website cookies", "tracking cookies", "cookie usage", "user experience", "loft insulation cookies"],
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
    canonical: '/cookies-policy',
    languages: {
      'en-US': '/cookies-policy',
      'en-GB': '/cookies-policy',
      'en': '/cookies-policy',
    },
  },
  openGraph: {
    title: "Cookies Policy – Loft Insulation Services UK",
    description: "Understand how Loft Insulation Services UK uses cookies to enhance website experience, track analytics, and improve services.",
    url: 'https://www.loft-insulation-services-uk.com/cookies-policy',
    siteName: 'Loft Insulation Services UK',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/cookies-policy.webp',
        width: 1200,
        height: 630,
        alt: 'Cookies Policy Loft Insulation Services UK',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/cookies-policy.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookies Policy – Loft Insulation Services UK',
    description: 'Read the Cookies Policy of Loft Insulation Services UK. Understand how we use cookies to improve website experience and track analytics.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/cookies-policy.webp'],
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
    'og:image:alt': 'Cookies Policy Loft Insulation Services UK',
    'twitter:image:alt': 'Cookies Policy Loft Insulation Services UK',
  },
};

export default function CookiesPolicyPage() {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Required for website functionality',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: BarChart3,
      title: 'Performance Cookies',
      description: 'Help us understand visitor behaviour',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Settings,
      title: 'Functionality Cookies',
      description: 'Remember user preferences and settings',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Zap,
      title: 'Analytics Cookies',
      description: 'Used to improve site performance and services',
      gradient: 'from-orange-500 to-yellow-500',
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
                  <Cookie className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Cookies Policy
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-2">
              Effective Date: November 2025
            </p>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Our website uses cookies to improve performance and provide a better browsing experience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-20 -mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* What Are Cookies? */}
            <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <HelpCircle className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Are Cookies?</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cookies are small text files stored on your device that help websites remember your
                preferences and activity.
              </p>
            </div>

            {/* Types of Cookies We Use */}
            <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Settings className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Types of Cookies We Use</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cookieTypes.map((cookieType, index) => {
                  const IconComponent = cookieType.icon;
                  return (
                    <div
                      key={index}
                      className="group/item bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cookieType.gradient} text-white flex items-center justify-center mr-4 flex-shrink-0 shadow-md group-hover/item:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {cookieType.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {cookieType.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Settings className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Managing Cookies</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                You can accept or reject cookies by adjusting your browser settings. Please note that disabling
                cookies may affect site performance.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-primary-blue via-blue-600 to-secondary-blue rounded-3xl p-10 md:p-14 text-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-5 shadow-lg">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
                </div>
                <p className="text-lg md:text-xl mb-4 leading-relaxed opacity-95">
                  If you have questions about this Cookies Policy, please contact us at:
                </p>
                <a
                  href="mailto:info@loft-insulation-services-uk.com"
                  className="inline-flex items-center text-xl md:text-2xl font-semibold hover:underline transition-all duration-200 hover:scale-105 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl hover:bg-white/20"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  info@loft-insulation-services-uk.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}









