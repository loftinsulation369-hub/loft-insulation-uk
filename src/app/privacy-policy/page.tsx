import type { Metadata } from "next";
import { Shield, Database, FileText, Cookie, UserCheck, Mail, CheckCircle2, FormInput, Phone, Globe, Lock, Eye, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Privacy Policy – Loft Insulation Services UK",
  description: "Read the Privacy Policy of Loft Insulation Services UK. Learn how we collect, use, and protect your personal information.",
  keywords: ["Loft Insulation Services UK privacy", "privacy policy", "personal data protection", "user data", "GDPR compliance", "data privacy", "loft insulation privacy policy"],
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
    canonical: '/privacy-policy',
    languages: {
      'en-US': '/privacy-policy',
      'en-GB': '/privacy-policy',
      'en': '/privacy-policy',
    },
  },
  openGraph: {
    title: "Privacy Policy – Loft Insulation Services UK",
    description: "Learn how Loft Insulation Services UK collects, uses, and protects your personal information. Read our full Privacy Policy.",
    url: 'https://www.loft-insulation-services-uk.com/privacy-policy',
    siteName: 'Loft Insulation Services UK',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/privacy-policy.webp',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy Loft Insulation Services UK',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/privacy-policy.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy – Loft Insulation Services UK',
    description: 'Read the Privacy Policy of Loft Insulation Services UK. Learn how we collect, use, and protect your personal information.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/privacy-policy.webp'],
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
    'og:image:alt': 'Privacy Policy Loft Insulation Services UK',
    'twitter:image:alt': 'Privacy Policy Loft Insulation Services UK',
  },
};

export default function PrivacyPolicyPage() {
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
                  <Shield className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Privacy Policy
            </h1>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <p className="text-lg sm:text-xl text-white font-medium">
                Effective Date: November 2025
              </p>
            </div>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              At Loft Insulation Services UK, we are committed to protecting your privacy and ensuring that
              your personal information is handled securely and responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-20 -mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Information We Collect */}
            <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
                We may collect personal data when you:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 text-primary-blue flex items-center justify-center mr-4 mt-0.5 group-hover/item:bg-primary-blue group-hover/item:text-white transition-colors duration-200">
                    <FormInput className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-gray-700 pt-1">Fill out a contact form or request a quote</span>
                </li>
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 text-primary-blue flex items-center justify-center mr-4 mt-0.5 group-hover/item:bg-primary-blue group-hover/item:text-white transition-colors duration-200">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-gray-700 pt-1">Communicate with us via email or phone</span>
                </li>
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 text-primary-blue flex items-center justify-center mr-4 mt-0.5 group-hover/item:bg-primary-blue group-hover/item:text-white transition-colors duration-200">
                    <Globe className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-gray-700 pt-1">Use our website and consent to cookies</span>
                </li>
              </ul>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                <p className="text-lg text-gray-800 leading-relaxed">
                  This information may include your <span className="font-semibold text-primary-blue">name</span>, <span className="font-semibold text-primary-blue">email address</span>, <span className="font-semibold text-primary-blue">phone number</span>, and <span className="font-semibold text-primary-blue">property details</span>.
                </p>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
                We use your data to:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-100 text-secondary-blue flex items-center justify-center mr-4 mt-0.5 group-hover/item:bg-secondary-blue group-hover/item:text-white transition-colors duration-200">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-gray-700 pt-1">Respond to your enquiries</span>
                </li>
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-100 text-secondary-blue flex items-center justify-center mr-4 mt-0.5 group-hover/item:bg-secondary-blue group-hover/item:text-white transition-colors duration-200">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-gray-700 pt-1">Provide quotes and insulation services</span>
                </li>
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-100 text-secondary-blue flex items-center justify-center mr-4 mt-0.5 group-hover/item:bg-secondary-blue group-hover/item:text-white transition-colors duration-200">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-gray-700 pt-1">Improve our website and customer experience</span>
                </li>
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-100 text-secondary-blue flex items-center justify-center mr-4 mt-0.5 group-hover/item:bg-secondary-blue group-hover/item:text-white transition-colors duration-200">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-gray-700 pt-1">Comply with legal obligations</span>
                </li>
              </ul>
              <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border-l-4 border-green-500 p-6 rounded-r-xl shadow-md">
                <div className="flex items-start">
                  <Lock className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-gray-800 font-semibold leading-relaxed">
                    We will never sell, rent, or share your personal data with third parties for marketing purposes.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Cookie className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Cookies</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our website uses cookies to enhance user experience and track performance metrics. You can
                manage cookie settings through your browser.
              </p>
            </div>

            {/* Your Rights */}
            <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <UserCheck className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Your Rights</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
                You have the right to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mr-4 mt-0.5 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors duration-200">
                    <Eye className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-gray-700 pt-1">Access, correct, or delete your personal data</span>
                </li>
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mr-4 mt-0.5 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors duration-200">
                    <AlertCircle className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-gray-700 pt-1">Withdraw consent for data processing</span>
                </li>
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mr-4 mt-0.5 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors duration-200">
                    <Shield className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-gray-700 pt-1">Lodge a complaint with the ICO (Information Commissioner&apos;s Office)</span>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-primary-blue via-blue-600 to-secondary-blue rounded-3xl p-10 md:p-14 text-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-5 shadow-lg">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
                </div>
                <p className="text-xl md:text-2xl mb-6 leading-relaxed opacity-95">
                  For privacy-related queries, please contact:
                </p>
                <a
                  href="mailto:info@loft-insulation-services-uk.com"
                  className="inline-flex items-center text-2xl md:text-3xl font-bold hover:underline transition-all duration-200 hover:scale-105 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl hover:bg-white/20"
                >
                  <Mail className="h-6 w-6 mr-3" />
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









