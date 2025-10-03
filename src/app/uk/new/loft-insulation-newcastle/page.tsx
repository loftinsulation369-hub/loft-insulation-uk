import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Newcastle – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Newcastle and reduce your energy bills. Expert installers, fast approval, and government-backed grants available.",
  keywords: ["free loft insulation Newcastle", "loft insulation grants Newcastle", "Newcastle loft insulation scheme", "government free loft insulation Newcastle", "loft insulation installers Newcastle", "energy saving loft insulation Newcastle", "eco loft insulation Newcastle", "free home insulation Newcastle"],
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
    canonical: '/uk/new/loft-insulation-newcastle',
    languages: {
      'en-US': '/uk/new/loft-insulation-newcastle',
      'en-GB': '/uk/new/loft-insulation-newcastle',
      'en': '/uk/new/loft-insulation-newcastle',
    },
  },
  openGraph: {
    title: "Newcastle's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Newcastle. Reduce heat loss, save money, and enjoy a warmer home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/new/loft-insulation-newcastle',
    siteName: 'Free Loft Insulation in Newcastle',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-newcastle.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Newcastle',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-newcastle.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Newcastle – Government Grants Available',
    description: 'Newcastle homeowners can now qualify for free loft insulation through eco-friendly government schemes. Check if you\'re eligible today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-newcastle.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Newcastle',
    'twitter:image:alt': 'Free Loft Insulation in Newcastle',
  },
};

export default function LoftInsulationNewcastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Newcastle
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
