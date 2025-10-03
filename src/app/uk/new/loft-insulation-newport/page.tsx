import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Newport – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Newport and lower your energy bills. Local installers, government grants, fast approval available.",
  keywords: ["free loft insulation Newport", "loft insulation grants Newport", "Newport loft insulation scheme", "government free loft insulation Newport", "loft insulation installers Newport", "energy saving loft insulation Newport", "eco loft insulation Newport", "free home insulation Newport"],
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
    canonical: '/uk/new/loft-insulation-newport',
    languages: {
      'en-US': '/uk/new/loft-insulation-newport',
      'en-GB': '/uk/new/loft-insulation-newport',
      'en': '/uk/new/loft-insulation-newport',
    },
  },
  openGraph: {
    title: "Newport's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Newport. Reduce heat loss, save money, and enjoy a warmer home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/new/loft-insulation-newport',
    siteName: 'Free Loft Insulation in Newport',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-newport.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Newport',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-newport.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Newport – Government Grants Available',
    description: 'Newport homeowners may qualify for free loft insulation under government schemes. Check eligibility today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-newport.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Newport',
    'twitter:image:alt': 'Free Loft Insulation in Newport',
  },
};

export default function LoftInsulationNewportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Newport
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
