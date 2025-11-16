import type { Metadata } from "next";
import Link from 'next/link';
import { Target, Eye, Home, Award, Users, Quote, Phone, Building2, CheckCircle2, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "About Us – Loft Insulation Services UK",
  description: "Learn about Loft Insulation Services UK, your trusted partner for professional loft insulation solutions across the UK.",
  keywords: ["Loft Insulation Services UK", "about Loft Insulation Services", "professional loft insulation", "UK insulation services", "certified loft installers", "energy-efficient insulation"],
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
    canonical: '/about-us',
    languages: {
      'en-US': '/about-us',
      'en-GB': '/about-us',
      'en': '/about-us',
    },
  },
  openGraph: {
    title: "About Us – Loft Insulation Services UK",
    description: "Discover who we are at Loft Insulation Services UK and how we provide top-quality loft insulation solutions to homeowners and businesses across the UK.",
    url: 'https://www.loft-insulation-services-uk.com/about-us',
    siteName: 'Loft Insulation Services UK',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/about-us-image.webp',
        width: 1200,
        height: 630,
        alt: 'About Loft Insulation Services UK',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/about-us-image.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us – Loft Insulation Services UK',
    description: 'Learn about Loft Insulation Services UK, your trusted partner for professional loft insulation solutions across the UK.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/about-us-image.webp'],
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
    'og:image:alt': 'About Loft Insulation Services UK',
    'twitter:image:alt': 'About Loft Insulation Services UK',
  },
};

export default function AboutUsPage() {
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
                  <Building2 className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              About Us
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Welcome to Loft Insulation Services UK — your local experts in home insulation, energy
              efficiency, and sustainable comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-20 -mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Introduction */}
            <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who We Are</h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We specialize in loft and roof insulation for residential properties across the United Kingdom.
                  Our goal is simple: to make UK homes <span className="font-semibold text-primary-blue">warmer</span>, more <span className="font-semibold text-primary-blue">energy-efficient</span>, and <span className="font-semibold text-primary-blue">environmentally friendly</span> — while helping homeowners save money on their energy bills.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With years of experience in the insulation industry, our team has earned a reputation for
                  <span className="font-semibold text-secondary-blue"> excellence</span>, <span className="font-semibold text-secondary-blue">reliability</span>, and <span className="font-semibold text-secondary-blue">customer care</span>. We only use approved, high-performance
                  materials and follow strict installation standards to ensure lasting results.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Whether you&apos;re a <span className="font-semibold text-primary-blue">homeowner</span>, <span className="font-semibold text-primary-blue">landlord</span>, or <span className="font-semibold text-primary-blue">property developer</span>, Loft Insulation Services UK
                    provides tailored insulation solutions designed to meet your needs and budget.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="group bg-gradient-to-br from-primary-blue via-blue-600 to-blue-700 rounded-3xl p-8 md:p-10 text-white shadow-2xl transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed opacity-95">
                    To help households across the UK reduce energy waste and carbon emissions through
                    affordable, high-quality insulation services.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="group bg-gradient-to-br from-secondary-blue via-cyan-600 to-cyan-700 rounded-3xl p-8 md:p-10 text-white shadow-2xl transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Eye className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed opacity-95">
                    To be the UK&apos;s most trusted name in home insulation by promoting energy efficiency and
                    environmental responsibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Home className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors duration-200">Residential Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  Specialized in loft and roof insulation for UK homes
                </p>
              </div>
              <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-secondary-blue transition-colors duration-200">Quality Standards</h3>
                <p className="text-gray-600 leading-relaxed">
                  Approved materials and strict installation standards
                </p>
              </div>
              <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">Expert Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Years of experience with proven track record
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary-blue via-blue-600 to-secondary-blue rounded-3xl p-10 md:p-14 text-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Improve Your Home&apos;s Energy Efficiency?
                </h3>
                <p className="text-xl md:text-2xl mb-10 opacity-95">
                  Get in touch with our team today for a free consultation and quote.
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
        </div>
      </section>
    </div>
  );
}
