import type { Metadata } from "next";
import { FileText, Globe, Wrench, AlertTriangle, Copyright, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: "Terms & Conditions – Loft Insulation Services UK",
  description: "Read the Terms & Conditions of Loft Insulation Services UK. Understand our rules, responsibilities, and legal policies when using our website and services.",
  keywords: ["Loft Insulation Services UK terms", "website terms", "service terms", "terms & conditions", "legal policies", "user agreement", "loft insulation terms"],
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
    canonical: '/terms-conditions',
    languages: {
      'en-US': '/terms-conditions',
      'en-GB': '/terms-conditions',
      'en': '/terms-conditions',
    },
  },
  openGraph: {
    title: "Terms & Conditions – Loft Insulation Services UK",
    description: "Read the Terms & Conditions of Loft Insulation Services UK. Learn about our rules and legal policies when using our website and services.",
    url: 'https://www.loft-insulation-services-uk.com/terms-conditions',
    siteName: 'Loft Insulation Services UK',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/terms-conditions.webp',
        width: 1200,
        height: 630,
        alt: 'Terms & Conditions Loft Insulation Services UK',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/terms-conditions.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions – Loft Insulation Services UK',
    description: 'Read the Terms & Conditions of Loft Insulation Services UK. Understand our rules, responsibilities, and legal policies when using our website and services.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/terms-conditions.webp'],
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
    'og:image:alt': 'Terms & Conditions Loft Insulation Services UK',
    'twitter:image:alt': 'Terms & Conditions Loft Insulation Services UK',
  },
};

export default function TermsConditionsPage() {
  const terms = [
    {
      number: '1',
      icon: Globe,
      title: 'General Use',
      description: 'This website provides information about our insulation services. By accessing it, you agree not to misuse the site or its content.',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      number: '2',
      icon: Wrench,
      title: 'Services',
      description: 'All quotes and services provided are subject to assessment and availability. We reserve the right to refuse or modify service if necessary.',
      gradient: 'from-cyan-500 to-cyan-600',
    },
    {
      number: '3',
      icon: AlertTriangle,
      title: 'Liability',
      description: 'While we aim to provide accurate information, we do not accept liability for any errors or omissions. All content is provided "as is" without warranties.',
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      number: '4',
      icon: Copyright,
      title: 'Intellectual Property',
      description: 'All content, including logos, images, and text, is the property of Loft Insulation Services UK and may not be copied or reproduced without written permission.',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      number: '5',
      icon: RefreshCw,
      title: 'Changes to Terms',
      description: 'We reserve the right to update these Terms and Conditions at any time. Continued use of our site indicates acceptance of any changes.',
      gradient: 'from-green-500 to-green-600',
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
                  <FileText className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Terms and Conditions
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-2">
              Effective Date: November 2025
            </p>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              By using this website — <span className="font-semibold">https://www.loft-insulation-services-uk.com/</span> — you agree to comply
              with the following Terms and Conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-20 -mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {terms.map((term, index) => {
              const IconComponent = term.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-start">
                    {/* Number Badge */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${term.gradient} text-white flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl font-bold">{term.number}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${term.gradient} text-white flex items-center justify-center mr-4 shadow-md`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {term.title}
                        </h2>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {term.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}









