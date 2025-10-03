import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Barking – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Barking and reduce energy bills. Expert local installers, fast approval, and government-backed grants available.",
  keywords: ["free loft insulation Barking", "loft insulation grants Barking", "Barking loft insulation scheme", "government free loft insulation Barking", "loft insulation installers Barking", "energy saving loft insulation Barking", "eco loft insulation Barking", "free home insulation Barking"],
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
    canonical: '/uk/bar/loft-insulation-barking',
    languages: {
      'en-US': '/uk/bar/loft-insulation-barking',
      'en-GB': '/uk/bar/loft-insulation-barking',
      'en': '/uk/bar/loft-insulation-barking',
    },
  },
  openGraph: {
    title: "Barking's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Barking. Cut heat loss, save money, and enjoy a warmer home this winter.",
    url: 'https://www.loft-insulation-services-uk.com/uk/bar/loft-insulation-barking',
    siteName: 'Free Loft Insulation in Barking',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-barking.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Barking',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-barking.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Barking – Government Grants Available',
    description: 'Barking homeowners can now qualify for free loft insulation through eco-friendly government schemes. Check if you\'re eligible today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-barking.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Barking',
    'twitter:image:alt': 'Free Loft Insulation in Barking',
  },
};

export default function LoftInsulationBarkingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Barking
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
