import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Croydon – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Croydon and reduce your energy bills. Skilled local installers, government grants, quick approval.",
  keywords: ["free loft insulation Croydon", "loft insulation grants Croydon", "Croydon loft insulation scheme", "government free loft insulation Croydon", "loft insulation installers Croydon", "energy saving loft insulation Croydon", "eco loft insulation Croydon", "free home insulation Croydon"],
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
    canonical: '/uk/cro/loft-insulation-croydon',
    languages: {
      'en-US': '/uk/cro/loft-insulation-croydon',
      'en-GB': '/uk/cro/loft-insulation-croydon',
      'en': '/uk/cro/loft-insulation-croydon',
    },
  },
  openGraph: {
    title: "Croydon's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Croydon. Reduce heat loss, save money, and enjoy a warmer home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/cro/loft-insulation-croydon',
    siteName: 'Free Loft Insulation in Croydon',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-croydon.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Croydon',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-croydon.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Croydon – Government Grants Available',
    description: 'Croydon homeowners can now qualify for free loft insulation schemes. Check your eligibility today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-croydon.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Croydon',
    'twitter:image:alt': 'Free Loft Insulation in Croydon',
  },
};

export default function LoftInsulationCroydonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Croydon
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
