import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Lincolnshire – Save Energy & Reduce Bills",
  description: "Apply for free loft insulation in Lincolnshire and lower your energy bills. Trusted local installers, government grants, fast approval.",
  keywords: ["free loft insulation Lincolnshire", "loft insulation grants Lincolnshire", "Lincolnshire loft insulation scheme", "government free loft insulation Lincolnshire", "loft insulation installers Lincolnshire", "energy saving loft insulation Lincolnshire", "eco loft insulation Lincolnshire", "free home insulation Lincolnshire"],
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
    canonical: '/uk/lin/loft-insulation-lincolnshire',
    languages: {
      'en-US': '/uk/lin/loft-insulation-lincolnshire',
      'en-GB': '/uk/lin/loft-insulation-lincolnshire',
      'en': '/uk/lin/loft-insulation-lincolnshire',
    },
  },
  openGraph: {
    title: "Lincolnshire's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Lincolnshire. Reduce heat loss, save money, and enjoy a warmer, more efficient home.",
    url: 'https://www.loft-insulation-services-uk.com/uk/lin/loft-insulation-lincolnshire',
    siteName: 'Free Loft Insulation in Lincolnshire',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-lincolnshire.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Lincolnshire',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-lincolnshire.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Lincolnshire – Government Grants Available',
    description: 'Homeowners in Lincolnshire may now be eligible for free loft insulation under government schemes. Check now.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-lincolnshire.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Lincolnshire',
    'twitter:image:alt': 'Free Loft Insulation in Lincolnshire',
  },
};

export default function LoftInsulationLincolnshirePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Lincolnshire
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
