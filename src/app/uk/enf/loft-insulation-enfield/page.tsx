import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Enfield – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Enfield and cut your energy bills. Local installers, government grants, fast approval.",
  keywords: ["free loft insulation Enfield", "loft insulation grants Enfield", "Enfield loft insulation scheme", "government free loft insulation Enfield", "loft insulation installers Enfield", "energy saving loft insulation Enfield", "eco loft insulation Enfield", "free home insulation Enfield"],
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
    canonical: '/uk/enf/loft-insulation-enfield',
    languages: {
      'en-US': '/uk/enf/loft-insulation-enfield',
      'en-GB': '/uk/enf/loft-insulation-enfield',
      'en': '/uk/enf/loft-insulation-enfield',
    },
  },
  openGraph: {
    title: "Enfield's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Enfield. Reduce heat loss, save money, and enjoy a warmer, more efficient home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/enf/loft-insulation-enfield',
    siteName: 'Free Loft Insulation in Enfield',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-enfield.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Enfield',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-enfield.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Enfield – Government Grants Available',
    description: 'Enfield homeowners may qualify for free loft insulation through government schemes. Check your eligibility now.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-enfield.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Enfield',
    'twitter:image:alt': 'Free Loft Insulation in Enfield',
  },
};

export default function LoftInsulationEnfieldPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Enfield
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
