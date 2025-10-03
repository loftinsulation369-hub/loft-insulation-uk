import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Northern Ireland – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Northern Ireland and lower your energy bills. Local installers, government grants, fast approval available.",
  keywords: ["free loft insulation Northern Ireland", "loft insulation grants Northern Ireland", "Northern Ireland loft insulation scheme", "government free loft insulation Northern Ireland", "loft insulation installers Northern Ireland", "energy saving loft insulation Northern Ireland", "eco loft insulation Northern Ireland", "free home insulation Northern Ireland"],
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
    canonical: '/uk/nor/loft-insulation-northern-ireland',
    languages: {
      'en-US': '/uk/nor/loft-insulation-northern-ireland',
      'en-GB': '/uk/nor/loft-insulation-northern-ireland',
      'en': '/uk/nor/loft-insulation-northern-ireland',
    },
  },
  openGraph: {
    title: "Northern Ireland's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Northern Ireland. Reduce heat loss, save money, and enjoy a warmer home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/nor/loft-insulation-northern-ireland',
    siteName: 'Free Loft Insulation in Northern Ireland',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-northern-ireland.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Northern Ireland',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-northern-ireland.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Northern Ireland – Government Grants Available',
    description: 'Northern Ireland homeowners may qualify for free loft insulation under government schemes. Check eligibility today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-northern-ireland.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Northern Ireland',
    'twitter:image:alt': 'Free Loft Insulation in Northern Ireland',
  },
};

export default function LoftInsulationNorthernIrelandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Northern Ireland
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
