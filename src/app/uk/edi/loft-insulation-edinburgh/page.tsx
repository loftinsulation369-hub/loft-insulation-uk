import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Edinburgh – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Edinburgh and cut energy bills. Professional installers, government grants, and fast approval available.",
  keywords: ["free loft insulation Edinburgh", "loft insulation grants Edinburgh", "Edinburgh loft insulation scheme", "government free loft insulation Edinburgh", "loft insulation installers Edinburgh", "energy saving loft insulation Edinburgh", "eco loft insulation Edinburgh", "free home insulation Edinburgh"],
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
    canonical: '/uk/edi/loft-insulation-edinburgh',
    languages: {
      'en-US': '/uk/edi/loft-insulation-edinburgh',
      'en-GB': '/uk/edi/loft-insulation-edinburgh',
      'en': '/uk/edi/loft-insulation-edinburgh',
    },
  },
  openGraph: {
    title: "Edinburgh's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Edinburgh. Reduce heat loss, save money, and enjoy a warmer home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/edi/loft-insulation-edinburgh',
    siteName: 'Free Loft Insulation in Edinburgh',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-edinburgh.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Edinburgh',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-edinburgh.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Edinburgh – Government Grants Available',
    description: 'Homeowners in Edinburgh can qualify for free loft insulation under government schemes. Check your eligibility today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-edinburgh.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Edinburgh',
    'twitter:image:alt': 'Free Loft Insulation in Edinburgh',
  },
};

export default function LoftInsulationEdinburghPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Edinburgh
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
