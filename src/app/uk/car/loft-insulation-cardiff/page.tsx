import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Cardiff – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Cardiff and reduce energy bills. Local installers, government grants, and quick approval available.",
  keywords: ["free loft insulation Cardiff", "loft insulation grants Cardiff", "Cardiff loft insulation scheme", "government free loft insulation Cardiff", "loft insulation installers Cardiff", "energy saving loft insulation Cardiff", "eco loft insulation Cardiff", "free home insulation Cardiff"],
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
    canonical: '/uk/car/loft-insulation-cardiff',
    languages: {
      'en-US': '/uk/car/loft-insulation-cardiff',
      'en-GB': '/uk/car/loft-insulation-cardiff',
      'en': '/uk/car/loft-insulation-cardiff',
    },
  },
  openGraph: {
    title: "Cardiff's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Cardiff. Reduce heat loss, save money, and enjoy a warmer home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/car/loft-insulation-cardiff',
    siteName: 'Free Loft Insulation in Cardiff',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-cardiff.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Cardiff',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-cardiff.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Cardiff – Government Grants Available',
    description: 'Cardiff homeowners may now qualify for free loft insulation. Check eligibility and apply today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-cardiff.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Cardiff',
    'twitter:image:alt': 'Free Loft Insulation in Cardiff',
  },
};

export default function LoftInsulationCardiffPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Cardiff
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
