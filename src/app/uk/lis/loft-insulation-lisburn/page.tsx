import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Lisburn – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Lisburn and reduce energy bills. Local installers, government grants, fast approval.",
  keywords: ["free loft insulation Lisburn", "loft insulation grants Lisburn", "Lisburn loft insulation scheme", "government free loft insulation Lisburn", "loft insulation installers Lisburn", "energy saving loft insulation Lisburn", "eco loft insulation Lisburn", "free home insulation Lisburn"],
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
    canonical: '/uk/lis/loft-insulation-lisburn',
    languages: {
      'en-US': '/uk/lis/loft-insulation-lisburn',
      'en-GB': '/uk/lis/loft-insulation-lisburn',
      'en': '/uk/lis/loft-insulation-lisburn',
    },
  },
  openGraph: {
    title: "Lisburn's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Lisburn. Reduce heat loss, save money, and enjoy a warmer home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/lis/loft-insulation-lisburn',
    siteName: 'Free Loft Insulation in Lisburn',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-lisburn.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Lisburn',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-lisburn.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Lisburn – Government Grants Available',
    description: 'Lisburn homeowners may now be eligible for free loft insulation under government schemes. Check eligibility today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-lisburn.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Lisburn',
    'twitter:image:alt': 'Free Loft Insulation in Lisburn',
  },
};

export default function LoftInsulationLisburnPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Lisburn
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
