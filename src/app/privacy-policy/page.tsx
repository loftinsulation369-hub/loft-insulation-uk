import type { Metadata } from "next";

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
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
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
