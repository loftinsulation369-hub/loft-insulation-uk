import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loft Insulation Types Guide – Choose the Best Option for Your Home",
  description: "Explore different types of loft insulation materials. Compare their benefits, costs, and suitability for your home.",
  keywords: ["loft insulation types", "fiberglass insulation", "mineral wool insulation", "cellulose insulation", "spray foam insulation", "rigid board insulation", "blown-in insulation", "eco-friendly loft insulation", "loft insulation materials guide"],
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
    canonical: '/blog/loft-insulation-types-guide',
    languages: {
      'en-US': '/blog/loft-insulation-types-guide',
      'en-GB': '/blog/loft-insulation-types-guide',
      'en': '/blog/loft-insulation-types-guide',
    },
  },
  openGraph: {
    title: "Loft Insulation Types Guide – Choose the Best Option for Your Home",
    description: "Discover various loft insulation materials, their benefits, costs, and how to choose the right one for your home.",
    url: 'https://www.loft-insulation-services-uk.com/blog/loft-insulation-types-guide',
    siteName: 'Loft Insulation Types Guide',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-types-guide.webp',
        width: 1200,
        height: 630,
        alt: 'Loft Insulation Types Guide',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-types-guide.webp',
      },
    ],
    locale: 'en_GB',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loft Insulation Types Guide – Choose the Best Option for Your Home',
    description: 'Explore different types of loft insulation materials. Compare their benefits, costs, and suitability for your home.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-types-guide.webp'],
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
    'og:image:alt': 'Loft Insulation Types Guide',
    'twitter:image:alt': 'Loft Insulation Types Guide',
  },
};

export default function LoftInsulationTypesGuideBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Loft Insulation Types Guide – Choose the Best Option for Your Home
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






