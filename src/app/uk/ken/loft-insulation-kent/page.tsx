import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Kent – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Kent and lower your energy bills. Local installers, government grants, fast approval available.",
  keywords: ["free loft insulation Kent", "loft insulation grants Kent", "Kent loft insulation scheme", "government free loft insulation Kent", "loft insulation installers Kent", "energy saving loft insulation Kent", "eco loft insulation Kent", "free home insulation Kent"],
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
    canonical: '/uk/ken/loft-insulation-kent',
    languages: {
      'en-US': '/uk/ken/loft-insulation-kent',
      'en-GB': '/uk/ken/loft-insulation-kent',
      'en': '/uk/ken/loft-insulation-kent',
    },
  },
  openGraph: {
    title: "Kent's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Kent. Reduce heat loss, save money, and enjoy a more comfortable home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/ken/loft-insulation-kent',
    siteName: 'Free Loft Insulation in Kent',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-kent.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Kent',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-kent.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Kent – Government Grants Available',
    description: 'Homeowners in Kent may now qualify for free loft insulation via government schemes. Check eligibility today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-kent.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Kent',
    'twitter:image:alt': 'Free Loft Insulation in Kent',
  },
};

export default function LoftInsulationKentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Kent
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
