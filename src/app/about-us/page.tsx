<<<<<<< HEAD

=======
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Loft Insulation Services UK",
  description: "Learn about Loft Insulation Services UK, your trusted partner for professional loft insulation solutions across the UK.",
  keywords: ["Loft Insulation Services UK", "about Loft Insulation Services", "professional loft insulation", "UK insulation services", "certified loft installers", "energy-efficient insulation"],
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
    canonical: '/about-us',
    languages: {
      'en-US': '/about-us',
      'en-GB': '/about-us',
      'en': '/about-us',
    },
  },
  openGraph: {
    title: "About Us – Loft Insulation Services UK",
    description: "Discover who we are at Loft Insulation Services UK and how we provide top-quality loft insulation solutions to homeowners and businesses across the UK.",
    url: 'https://www.loft-insulation-services-uk.com/about-us',
    siteName: 'Loft Insulation Services UK',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/about-us-image.webp',
        width: 1200,
        height: 630,
        alt: 'About Loft Insulation Services UK',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/about-us-image.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us – Loft Insulation Services UK',
    description: 'Learn about Loft Insulation Services UK, your trusted partner for professional loft insulation solutions across the UK.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/about-us-image.webp'],
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
    'og:image:alt': 'About Loft Insulation Services UK',
    'twitter:image:alt': 'About Loft Insulation Services UK',
  },
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Us
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
>>>>>>> 250e5e376a9912864c58af5759d99934dc0c03b9
