import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Cumbria – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Cumbria and reduce your energy bills. Trusted local installers, government grants, fast approval available.",
  keywords: ["free loft insulation Cumbria", "loft insulation grants Cumbria", "Cumbria loft insulation scheme", "government free loft insulation Cumbria", "loft insulation installers Cumbria", "energy saving loft insulation Cumbria", "eco loft insulation Cumbria", "free home insulation Cumbria"],
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
    canonical: '/uk/cum/loft-insulation-cumbria',
    languages: {
      'en-US': '/uk/cum/loft-insulation-cumbria',
      'en-GB': '/uk/cum/loft-insulation-cumbria',
      'en': '/uk/cum/loft-insulation-cumbria',
    },
  },
  openGraph: {
    title: "Cumbria's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Cumbria. Cut heat loss, save money, and enjoy a warmer home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/cum/loft-insulation-cumbria',
    siteName: 'Free Loft Insulation in Cumbria',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-cumbria.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Cumbria',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-cumbria.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Cumbria – Government Grants Available',
    description: 'Cumbria homeowners can now access free loft insulation through government schemes. Check if you\'re eligible today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-cumbria.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Cumbria',
    'twitter:image:alt': 'Free Loft Insulation in Cumbria',
  },
};

export default function LoftInsulationCumbriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Cumbria
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
