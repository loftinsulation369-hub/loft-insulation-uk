import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loft Insulation in Birmingham – Save Energy & Reduce Bills",
  description: "Get free loft insulation in Birmingham and lower your energy bills. Local professionals, government grants, and fast service.",
  keywords: ["free loft insulation Birmingham", "loft insulation grants Birmingham", "Birmingham loft insulation scheme", "government free loft insulation Birmingham", "loft insulation installers Birmingham", "energy saving loft insulation Birmingham", "eco loft insulation Birmingham", "free home insulation Birmingham"],
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
    canonical: '/uk/bir/loft-insulation-birmingham',
    languages: {
      'en-US': '/uk/bir/loft-insulation-birmingham',
      'en-GB': '/uk/bir/loft-insulation-birmingham',
      'en': '/uk/bir/loft-insulation-birmingham',
    },
  },
  openGraph: {
    title: "Birmingham's Free Loft Insulation Scheme – Check Your Eligibility Today",
    description: "Discover how to get free loft insulation in Birmingham. Reduce heat loss, save money, and make your home warmer.",
    url: 'https://www.loft-insulation-services-uk.com/uk/bir/loft-insulation-birmingham',
    siteName: 'Free Loft Insulation in Birmingham',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-birmingham.webp',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in Birmingham',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-birmingham.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in Birmingham – Government Grants Available',
    description: 'Birmingham homeowners can now claim free loft insulation through eco-friendly government schemes. Check if you\'re eligible today.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-birmingham.webp'],
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
    'og:image:alt': 'Free Loft Insulation in Birmingham',
    'twitter:image:alt': 'Free Loft Insulation in Birmingham',
  },
};

export default function LoftInsulationBirminghamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free Loft Insulation in Birmingham
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
