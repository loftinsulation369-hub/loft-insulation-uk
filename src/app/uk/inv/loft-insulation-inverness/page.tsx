import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Inverness – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Inverness and reduce your energy bills. Local installers, government grants, fast approval available.",
  keywords: ["free loft insulation Inverness", "loft insulation grants Inverness", "Inverness loft insulation scheme", "government free loft insulation Inverness", "loft insulation installers Inverness", "energy saving loft insulation Inverness", "eco loft insulation Inverness", "free home insulation Inverness"],
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
    canonical: '/uk/inv/loft-insulation-inverness',
    languages: {
      'en-US': '/uk/inv/loft-insulation-inverness',
      'en-GB': '/uk/inv/loft-insulation-inverness',
      'en': '/uk/inv/loft-insulation-inverness',
    },
  },
  openGraph: {
    title: "Inverness's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Inverness. Reduce heat loss, save money, and enjoy a warmer home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/inv/loft-insulation-inverness',
    siteName: 'Free Loft Insulation in Inverness',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-inverness.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Inverness',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-inverness.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Inverness – Government Grants Available',
    description: 'Inverness homeowners can now qualify for free loft insulation via government schemes. Check your eligibility today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-inverness.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Inverness',
    'twitter:image:alt': 'Free Loft Insulation in Inverness',
  },
};

export default function LoftInsulationInvernessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Inverness
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
