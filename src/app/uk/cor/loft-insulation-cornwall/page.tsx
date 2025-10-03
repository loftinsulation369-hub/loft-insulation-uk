import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Cornwall – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Cornwall and cut your energy bills. Local installers, government grants, and fast approval available.",
  keywords: ["free loft insulation Cornwall", "loft insulation grants Cornwall", "Cornwall loft insulation scheme", "government free loft insulation Cornwall", "loft insulation installers Cornwall", "energy saving loft insulation Cornwall", "eco loft insulation Cornwall", "free home insulation Cornwall"],
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
    canonical: '/uk/cor/loft-insulation-cornwall',
    languages: {
      'en-US': '/uk/cor/loft-insulation-cornwall',
      'en-GB': '/uk/cor/loft-insulation-cornwall',
      'en': '/uk/cor/loft-insulation-cornwall',
    },
  },
  openGraph: {
    title: "Cornwall's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Cornwall. Reduce heat loss, save money, and enjoy a warmer home this winter.",
    url: 'https://www.loft-insulation-services-uk.com/uk/cor/loft-insulation-cornwall',
    siteName: 'Free Loft Insulation in Cornwall',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-cornwall.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Cornwall',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-cornwall.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Cornwall – Government Grants Available',
    description: 'Cornwall homeowners can now qualify for free loft insulation through government schemes. Check if you\'re eligible today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-cornwall.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Cornwall',
    'twitter:image:alt': 'Free Loft Insulation in Cornwall',
  },
};

export default function LoftInsulationCornwallPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Cornwall
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
