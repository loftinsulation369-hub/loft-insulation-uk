import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Bradford – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Bradford and cut energy bills. Expert local installers and government grants available.",
  keywords: ["free loft insulation Bradford", "loft insulation grants Bradford", "Bradford loft insulation scheme", "government free loft insulation Bradford", "loft insulation installers Bradford", "energy saving loft insulation Bradford", "eco loft insulation Bradford", "free home insulation Bradford"],
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
    canonical: '/uk/bra/loft-insulation-bradford',
    languages: {
      'en-US': '/uk/bra/loft-insulation-bradford',
      'en-GB': '/uk/bra/loft-insulation-bradford',
      'en': '/uk/bra/loft-insulation-bradford',
    },
  },
  openGraph: {
    title: "Bradford's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Bradford. Reduce heat loss, save money, and enjoy a warmer home this winter.",
    url: 'https://www.loft-insulation-services-uk.com/uk/bra/loft-insulation-bradford',
    siteName: 'Free Loft Insulation in Bradford',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-bradford.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Bradford',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-bradford.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Bradford – Government Grants Available',
    description: 'Bradford homeowners can now qualify for free loft insulation through government schemes. Check your eligibility today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-bradford.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Bradford',
    'twitter:image:alt': 'Free Loft Insulation in Bradford',
  },
};

export default function LoftInsulationBradfordPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Bradford
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
