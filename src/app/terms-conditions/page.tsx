import type { Metadata } from "next";

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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Content coming soon...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}






