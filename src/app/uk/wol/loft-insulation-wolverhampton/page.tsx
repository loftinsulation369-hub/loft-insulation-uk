import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Wolverhampton – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Wolverhampton and lower your energy bills. Local installers, government grants, fast approval available.",
  keywords: ["free loft insulation Wolverhampton", "loft insulation grants Wolverhampton", "Wolverhampton loft insulation scheme", "government free loft insulation Wolverhampton", "loft insulation installers Wolverhampton", "energy saving loft insulation Wolverhampton", "eco loft insulation Wolverhampton", "free home insulation Wolverhampton"],
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
    canonical: '/uk/wol/loft-insulation-wolverhampton',
    languages: {
      'en-US': '/uk/wol/loft-insulation-wolverhampton',
      'en-GB': '/uk/wol/loft-insulation-wolverhampton',
      'en': '/uk/wol/loft-insulation-wolverhampton',
    },
  },
  openGraph: {
    title: "Wolverhampton Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Wolverhampton. Reduce heat loss, save money, and enjoy a warmer home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/wol/loft-insulation-wolverhampton',
    siteName: 'Free Loft Insulation in Wolverhampton',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-wolverhampton.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Wolverhampton',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-wolverhampton.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Wolverhampton – Government Grants Available',
    description: 'Wolverhampton homeowners may qualify for free loft insulation under government schemes. Check eligibility today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-wolverhampton.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Wolverhampton',
    'twitter:image:alt': 'Free Loft Insulation in Wolverhampton',
  },
};

export default function LoftInsulationWolverhamptonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Wolverhampton
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
