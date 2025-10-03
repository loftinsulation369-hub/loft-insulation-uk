import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Burnley – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Burnley and lower energy usage. Professional installers, government grants, fast approval.",
  keywords: ["free loft insulation Burnley", "loft insulation grants Burnley", "Burnley loft insulation scheme", "government free loft insulation Burnley", "loft insulation installers Burnley", "energy saving loft insulation Burnley", "eco loft insulation Burnley", "free home insulation Burnley"],
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
    canonical: '/uk/bur/loft-insulation-burnley',
    languages: {
      'en-US': '/uk/bur/loft-insulation-burnley',
      'en-GB': '/uk/bur/loft-insulation-burnley',
      'en': '/uk/bur/loft-insulation-burnley',
    },
  },
  openGraph: {
    title: "Burnley's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Burnley. Reduce heat loss, save money, and enjoy a warmer home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/bur/loft-insulation-burnley',
    siteName: 'Free Loft Insulation in Burnley',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-burnley.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Burnley',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-burnley.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Burnley – Government Grants Available',
    description: 'Burnley homeowners can now qualify for free loft insulation through government schemes. Check eligibility today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-burnley.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Burnley',
    'twitter:image:alt': 'Free Loft Insulation in Burnley',
  },
};

export default function LoftInsulationBurnleyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Burnley
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
