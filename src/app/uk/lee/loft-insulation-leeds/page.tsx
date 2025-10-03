import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Leeds – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Leeds and cut energy bills. Local installers, government grants, and fast approval available.",
  keywords: ["free loft insulation Leeds", "loft insulation grants Leeds", "Leeds loft insulation scheme", "government free loft insulation Leeds", "loft insulation installers Leeds", "energy saving loft insulation Leeds", "eco loft insulation Leeds", "free home insulation Leeds"],
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
    canonical: '/uk/lee/loft-insulation-leeds',
    languages: {
      'en-US': '/uk/lee/loft-insulation-leeds',
      'en-GB': '/uk/lee/loft-insulation-leeds',
      'en': '/uk/lee/loft-insulation-leeds',
    },
  },
  openGraph: {
    title: "Leeds's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Leeds. Reduce heat loss, save money, and enjoy a warmer home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/lee/loft-insulation-leeds',
    siteName: 'Free Loft Insulation in Leeds',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-leeds.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Leeds',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-leeds.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Leeds – Government Grants Available',
    description: 'Leeds homeowners can now qualify for free loft insulation via government schemes. Check eligibility today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-leeds.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Leeds',
    'twitter:image:alt': 'Free Loft Insulation in Leeds',
  },
};

export default function LoftInsulationLeedsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Leeds
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
