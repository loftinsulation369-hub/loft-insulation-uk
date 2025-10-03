import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Belfast – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Belfast and reduce energy bills. Professional installers, government grants, and quick approval available.",
  keywords: ["free loft insulation Belfast", "loft insulation grants Belfast", "Belfast loft insulation scheme", "government free loft insulation Belfast", "loft insulation installers Belfast", "energy saving loft insulation Belfast", "eco loft insulation Belfast", "free home insulation Belfast"],
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
    canonical: '/uk/bel/loft-insulation-belfast',
    languages: {
      'en-US': '/uk/bel/loft-insulation-belfast',
      'en-GB': '/uk/bel/loft-insulation-belfast',
      'en': '/uk/bel/loft-insulation-belfast',
    },
  },
  openGraph: {
    title: "Belfast's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Belfast. Reduce heat loss, save money, and enjoy a warmer home this winter.",
    url: 'https://www.loft-insulation-services-uk.com/uk/bel/loft-insulation-belfast',
    siteName: 'Free Loft Insulation in Belfast',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-belfast.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Belfast',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-belfast.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Belfast – Government Grants Available',
    description: 'Belfast homeowners can now qualify for free loft insulation through eco-friendly government schemes. Check eligibility today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-belfast.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Belfast',
    'twitter:image:alt': 'Free Loft Insulation in Belfast',
  },
};

export default function LoftInsulationBelfastPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Belfast
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
