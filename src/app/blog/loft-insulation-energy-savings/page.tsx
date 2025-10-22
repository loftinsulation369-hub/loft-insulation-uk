import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loft Insulation Energy Savings – How Much Can You Save?",
  description: "Learn how loft insulation can reduce your energy bills. Understand the potential savings and benefits of proper insulation.",
  keywords: ["loft insulation energy savings", "reduce energy bills", "energy efficiency", "loft insulation benefits", "save money on heating", "home energy efficiency", "insulation cost savings", "loft insulation ROI"],
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
    canonical: '/blog/loft-insulation-energy-savings',
    languages: {
      'en-US': '/blog/loft-insulation-energy-savings',
      'en-GB': '/blog/loft-insulation-energy-savings',
      'en': '/blog/loft-insulation-energy-savings',
    },
  },
  openGraph: {
    title: "Loft Insulation Energy Savings – How Much Can You Save?",
    description: "Discover how proper loft insulation can lead to significant energy savings. Learn about the potential reductions in heating costs and overall energy efficiency improvements.",
    url: 'https://www.loft-insulation-services-uk.com/blog/loft-insulation-energy-savings',
    siteName: 'Loft Insulation Energy Savings',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-energy-savings.webp',
        width: 1200,
        height: 630,
        alt: 'Loft Insulation Energy Savings',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-energy-savings.webp',
      },
    ],
    locale: 'en_GB',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loft Insulation Energy Savings – How Much Can You Save?',
    description: 'Learn how loft insulation can reduce your energy bills. Understand the potential savings and benefits of proper insulation.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-energy-savings.webp'],
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
    'og:image:alt': 'Loft Insulation Energy Savings',
    'twitter:image:alt': 'Loft Insulation Energy Savings',
  },
};

export default function LoftInsulationEnergySavingsBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Loft Insulation Energy Savings – How Much Can You Save?
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






