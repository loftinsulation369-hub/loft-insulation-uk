import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Glasgow – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Glasgow and lower your energy bills. Professional installers, government grants, quick approval available.",
  keywords: ["free loft insulation Glasgow", "loft insulation grants Glasgow", "Glasgow loft insulation scheme", "government free loft insulation Glasgow", "loft insulation installers Glasgow", "energy saving loft insulation Glasgow", "eco loft insulation Glasgow", "free home insulation Glasgow"],
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
    canonical: '/uk/gla/loft-insulation-glasgow',
    languages: {
      'en-US': '/uk/gla/loft-insulation-glasgow',
      'en-GB': '/uk/gla/loft-insulation-glasgow',
      'en': '/uk/gla/loft-insulation-glasgow',
    },
  },
  openGraph: {
    title: "Glasgow's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Glasgow. Reduce heat loss, save money, and enjoy a warmer home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/gla/loft-insulation-glasgow',
    siteName: 'Free Loft Insulation in Glasgow',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-glasgow.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Glasgow',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-glasgow.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Glasgow – Government Grants Available',
    description: 'Glasgow homeowners may qualify for free loft insulation under government schemes. Check your eligibility now.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-glasgow.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Glasgow',
    'twitter:image:alt': 'Free Loft Insulation in Glasgow',
  },
};

export default function LoftInsulationGlasgowPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Glasgow
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
