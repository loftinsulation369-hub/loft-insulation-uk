import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Sandwell – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Sandwell and lower your energy bills. Local installers, government grants, fast approval available.",
  keywords: ["free loft insulation Sandwell", "loft insulation grants Sandwell", "Sandwell loft insulation scheme", "government free loft insulation Sandwell", "loft insulation installers Sandwell", "energy saving loft insulation Sandwell", "eco loft insulation Sandwell", "free home insulation Sandwell"],
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
    canonical: '/uk/san/loft-insulation-sandwell',
    languages: {
      'en-US': '/uk/san/loft-insulation-sandwell',
      'en-GB': '/uk/san/loft-insulation-sandwell',
      'en': '/uk/san/loft-insulation-sandwell',
    },
  },
  openGraph: {
    title: "Sandwell Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Sandwell. Reduce heat loss, save money, and enjoy a warmer home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/san/loft-insulation-sandwell',
    siteName: 'Free Loft Insulation in Sandwell',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-sandwell.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Sandwell',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-sandwell.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Sandwell – Government Grants Available',
    description: 'Sandwell homeowners may qualify for free loft insulation under government schemes. Check eligibility today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-sandwell.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Sandwell',
    'twitter:image:alt': 'Free Loft Insulation in Sandwell',
  },
};

export default function LoftInsulationSandwellPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Sandwell
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
