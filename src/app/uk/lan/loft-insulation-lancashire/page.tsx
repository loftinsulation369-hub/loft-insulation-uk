import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Lancashire – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Lancashire and reduce energy costs. Local installers, government grants, and fast approval available.",
  keywords: ["free loft insulation Lancashire", "loft insulation grants Lancashire", "Lancashire loft insulation scheme", "government free loft insulation Lancashire", "loft insulation installers Lancashire", "energy saving loft insulation Lancashire", "eco loft insulation Lancashire", "free home insulation Lancashire"],
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
    canonical: '/uk/lan/loft-insulation-lancashire',
    languages: {
      'en-US': '/uk/lan/loft-insulation-lancashire',
      'en-GB': '/uk/lan/loft-insulation-lancashire',
      'en': '/uk/lan/loft-insulation-lancashire',
    },
  },
  openGraph: {
    title: "Lancashire's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Lancashire. Reduce heat loss, save money, and enjoy a warmer home this winter.",
    url: 'https://www.loft-insulation-services-uk.com/uk/lan/loft-insulation-lancashire',
    siteName: 'Free Loft Insulation in Lancashire',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-lancashire.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Lancashire',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-lancashire.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Lancashire – Government Grants Available',
    description: 'Homeowners in Lancashire may qualify for free loft insulation under government schemes. Check eligibility today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-lancashire.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Lancashire',
    'twitter:image:alt': 'Free Loft Insulation in Lancashire',
  },
};

export default function LoftInsulationLancashirePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Lancashire
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
