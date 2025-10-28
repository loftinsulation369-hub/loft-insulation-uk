<<<<<<< HEAD
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Loft Insulation Services UK",
  description: "Stay informed with the latest insights, tips, and industry news about loft insulation and energy efficiency from Loft Insulation Services UK.",
  keywords: ["loft insulation blog", "energy efficiency tips", "loft insulation news", "home insulation advice", "UK insulation blog", "loft insulation guides"],
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
    canonical: '/blog',
    languages: {
      'en-US': '/blog',
      'en-GB': '/blog',
      'en': '/blog',
    },
  },
  openGraph: {
    title: "Blog – Loft Insulation Services UK",
    description: "Explore our blog for expert insights, tips, and guides on loft insulation, energy efficiency, and home improvement across the UK.",
    url: 'https://www.loft-insulation-services-uk.com/blog',
    siteName: 'Loft Insulation Services UK Blog',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-blog.webp',
        width: 1200,
        height: 630,
        alt: 'Loft Insulation Blog',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-blog.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog – Loft Insulation Services UK',
    description: 'Stay informed with the latest insights, tips, and industry news about loft insulation and energy efficiency from Loft Insulation Services UK.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-blog.webp'],
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
    'og:image:alt': 'Loft Insulation Blog',
    'twitter:image:alt': 'Loft Insulation Blog',
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Blog
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






=======
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Loft Insulation Services UK",
  description: "Stay informed with the latest insights, tips, and industry news about loft insulation and energy efficiency from Loft Insulation Services UK.",
  keywords: ["loft insulation blog", "energy efficiency tips", "loft insulation news", "home insulation advice", "UK insulation blog", "loft insulation guides"],
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
    canonical: '/blog',
    languages: {
      'en-US': '/blog',
      'en-GB': '/blog',
      'en': '/blog',
    },
  },
  openGraph: {
    title: "Blog – Loft Insulation Services UK",
    description: "Explore our blog for expert insights, tips, and guides on loft insulation, energy efficiency, and home improvement across the UK.",
    url: 'https://www.loft-insulation-services-uk.com/blog',
    siteName: 'Loft Insulation Services UK Blog',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-blog.webp',
        width: 1200,
        height: 630,
        alt: 'Loft Insulation Blog',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/loft-insulation-blog.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog – Loft Insulation Services UK',
    description: 'Stay informed with the latest insights, tips, and industry news about loft insulation and energy efficiency from Loft Insulation Services UK.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/loft-insulation-blog.webp'],
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
    'og:image:alt': 'Loft Insulation Blog',
    'twitter:image:alt': 'Loft Insulation Blog',
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder content - will be replaced with actual content later */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Blog
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
