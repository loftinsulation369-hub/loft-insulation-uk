import type { Metadata } from "next";
import Link from 'next/link';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { blogPosts } from '@/data/content';

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

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="bg-gradient-to-br from-primary-blue via-blue-500 to-secondary-blue text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blogs</h1>
          <p className="text-lg md:text-xl opacity-90">
            Insights, guides, and updates to help you make smarter insulation decisions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <span className="text-2xl font-bold">📝</span>
                      </div>
                      <p className="text-sm font-medium">Blog Post</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      5 min read
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={post.href}
                    className="inline-flex items-center text-primary-blue font-semibold hover:text-blue-700 transition-colors duration-200 group/link"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}









