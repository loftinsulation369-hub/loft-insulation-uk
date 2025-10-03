import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Derry – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Derry and lower your energy bills. Local installers, government grants, quick approval.",
  keywords: ["free loft insulation Derry", "loft insulation grants Derry", "Derry loft insulation scheme", "government free loft insulation Derry", "loft insulation installers Derry", "energy saving loft insulation Derry", "eco loft insulation Derry", "free home insulation Derry"],
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
    canonical: '/uk/der/loft-insulation-derry',
    languages: {
      'en-US': '/uk/der/loft-insulation-derry',
      'en-GB': '/uk/der/loft-insulation-derry',
      'en': '/uk/der/loft-insulation-derry',
    },
  },
  openGraph: {
    title: "Derry's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Derry. Reduce heat loss, save money, and enjoy a warmer home this winter.",
    url: 'https://www.loft-insulation-services-uk.com/uk/der/loft-insulation-derry',
    siteName: 'Free Loft Insulation in Derry',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-derry.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Derry',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-derry.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Derry – Government Grants Available',
    description: 'Derry homeowners can qualify for free loft insulation via government schemes. Check if you\'re eligible today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-derry.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Derry',
    'twitter:image:alt': 'Free Loft Insulation in Derry',
  },
};

export default function LoftInsulationDerryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Derry
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
