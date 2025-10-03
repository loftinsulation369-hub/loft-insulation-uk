import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Horncastle – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Horncastle and reduce your energy bills. Local installers, government grants, quick approval.",
  keywords: ["free loft insulation Horncastle", "loft insulation grants Horncastle", "Horncastle loft insulation scheme", "government free loft insulation Horncastle", "loft insulation installers Horncastle", "energy saving loft insulation Horncastle", "eco loft insulation Horncastle", "free home insulation Horncastle"],
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
    canonical: '/uk/hor/loft-insulation-horncastle',
    languages: {
      'en-US': '/uk/hor/loft-insulation-horncastle',
      'en-GB': '/uk/hor/loft-insulation-horncastle',
      'en': '/uk/hor/loft-insulation-horncastle',
    },
  },
  openGraph: {
    title: "Horncastle's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Horncastle. Cut heat loss, save money, and enjoy a warmer home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/hor/loft-insulation-horncastle',
    siteName: 'Free Loft Insulation in Horncastle',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-horncastle.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Horncastle',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-horncastle.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Horncastle – Government Grants Available',
    description: 'Horncastle homeowners can now qualify for free loft insulation via government schemes. Check eligibility today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-horncastle.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Horncastle',
    'twitter:image:alt': 'Free Loft Insulation in Horncastle',
  },
};

export default function LoftInsulationHorncastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Horncastle
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
