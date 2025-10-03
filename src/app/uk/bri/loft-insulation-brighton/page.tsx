import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Brighton – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Brighton and lower energy costs. Skilled local installers, government grants, fast approval.",
  keywords: ["free loft insulation Brighton", "loft insulation grants Brighton", "Brighton loft insulation scheme", "government free loft insulation Brighton", "loft insulation installers Brighton", "energy saving loft insulation Brighton", "eco loft insulation Brighton", "free home insulation Brighton"],
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
    canonical: '/uk/bri/loft-insulation-brighton',
    languages: {
      'en-US': '/uk/bri/loft-insulation-brighton',
      'en-GB': '/uk/bri/loft-insulation-brighton',
      'en': '/uk/bri/loft-insulation-brighton',
    },
  },
  openGraph: {
    title: "Brighton's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Brighton. Reduce heat loss, save money, and enjoy a warmer, more efficient home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/bri/loft-insulation-brighton',
    siteName: 'Free Loft Insulation in Brighton',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-brighton.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Brighton',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-brighton.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Brighton – Government Grants Available',
    description: 'Brighton homeowners can now qualify for free loft insulation under government schemes. Check your eligibility now.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-brighton.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Brighton',
    'twitter:image:alt': 'Free Loft Insulation in Brighton',
  },
};

export default function LoftInsulationBrightonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Brighton
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
