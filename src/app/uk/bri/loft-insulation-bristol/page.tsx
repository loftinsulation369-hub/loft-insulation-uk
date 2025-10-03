import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Bristol – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Bristol and reduce your energy bills. Local expert installers, government grants, and fast approval available.",
  keywords: ["free loft insulation Bristol", "loft insulation grants Bristol", "Bristol loft insulation scheme", "government free loft insulation Bristol", "loft insulation installers Bristol", "energy saving loft insulation Bristol", "eco loft insulation Bristol", "free home insulation Bristol"],
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
    canonical: '/uk/bri/loft-insulation-bristol',
    languages: {
      'en-US': '/uk/bri/loft-insulation-bristol',
      'en-GB': '/uk/bri/loft-insulation-bristol',
      'en': '/uk/bri/loft-insulation-bristol',
    },
  },
  openGraph: {
    title: "Bristol's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Bristol. Save money, reduce heat loss, and enjoy a cozier home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/bri/loft-insulation-bristol',
    siteName: 'Free Loft Insulation in Bristol',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-bristol.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Bristol',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-bristol.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Bristol – Government Grants Available',
    description: 'Bristol homeowners can qualify for free loft insulation through government schemes. Check your eligibility today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-bristol.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Bristol',
    'twitter:image:alt': 'Free Loft Insulation in Bristol',
  },
};

export default function LoftInsulationBristolPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Bristol
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
