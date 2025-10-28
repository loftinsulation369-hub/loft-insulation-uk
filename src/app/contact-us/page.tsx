<<<<<<< HEAD
import type { Metadata } from "next";
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import ContactStats from '@/components/ContactStats';
import ContactFAQ from '@/components/ContactFAQ';
import ContactQuickActions from '@/components/ContactQuickActions';

export const metadata: Metadata = {
  title: "Contact Us – Loft Insulation Services UK",
  description: "Get in touch with Loft Insulation Services UK for professional loft insulation solutions. Contact us for free quotes and expert advice.",
  keywords: ["contact Loft Insulation Services", "loft insulation quotes", "professional insulation services", "UK insulation contact", "loft insulation experts", "free insulation survey"],
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
    canonical: '/contact-us',
    languages: {
      'en-US': '/contact-us',
      'en-GB': '/contact-us',
      'en': '/contact-us',
    },
  },
  openGraph: {
    title: "Contact Us – Loft Insulation Services UK",
    description: "Reach out to Loft Insulation Services UK for professional loft insulation solutions. Contact us for free quotes and expert advice.",
    url: 'https://www.loft-insulation-services-uk.com/contact-us',
    siteName: 'Loft Insulation Services UK',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/contact-us-image.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Loft Insulation Services UK',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/contact-us-image.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us – Loft Insulation Services UK',
    description: 'Get in touch with Loft Insulation Services UK for professional loft insulation solutions. Contact us for free quotes and expert advice.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/contact-us-image.webp'],
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
    'og:image:alt': 'Contact Loft Insulation Services UK',
    'twitter:image:alt': 'Contact Loft Insulation Services UK',
  },
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-secondary-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our expert team for professional loft insulation services. 
              We&apos;re here to help you with all your insulation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
            {/* Contact Form - Takes 2 columns on desktop */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Contact Information - Takes 1 column on desktop */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <ContactInfo />
            </div>
          </div>

          {/* Additional Cards Below */}
          <div className="mt-12 lg:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <ContactStats />
              <ContactFAQ />
              <ContactQuickActions />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}






=======
import type { Metadata } from "next";
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import ContactStats from '@/components/ContactStats';
import ContactFAQ from '@/components/ContactFAQ';
import ContactQuickActions from '@/components/ContactQuickActions';

export const metadata: Metadata = {
  title: "Contact Us – Loft Insulation Services UK",
  description: "Get in touch with Loft Insulation Services UK for professional loft insulation solutions. Contact us for free quotes and expert advice.",
  keywords: ["contact Loft Insulation Services", "loft insulation quotes", "professional insulation services", "UK insulation contact", "loft insulation experts", "free insulation survey"],
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
    canonical: '/contact-us',
    languages: {
      'en-US': '/contact-us',
      'en-GB': '/contact-us',
      'en': '/contact-us',
    },
  },
  openGraph: {
    title: "Contact Us – Loft Insulation Services UK",
    description: "Reach out to Loft Insulation Services UK for professional loft insulation solutions. Contact us for free quotes and expert advice.",
    url: 'https://www.loft-insulation-services-uk.com/contact-us',
    siteName: 'Loft Insulation Services UK',
    images: [
      {
        url: 'https://d3euc6irt3la1j.cloudfront.net/contact-us-image.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Loft Insulation Services UK',
        secureUrl: 'https://d3euc6irt3la1j.cloudfront.net/contact-us-image.webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us – Loft Insulation Services UK',
    description: 'Get in touch with Loft Insulation Services UK for professional loft insulation solutions. Contact us for free quotes and expert advice.',
    images: ['https://d3euc6irt3la1j.cloudfront.net/contact-us-image.webp'],
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
    'og:image:alt': 'Contact Loft Insulation Services UK',
    'twitter:image:alt': 'Contact Loft Insulation Services UK',
  },
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-secondary-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our expert team for professional loft insulation services. 
              We&apos;re here to help you with all your insulation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
            {/* Contact Form - Takes 2 columns on desktop */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Contact Information - Takes 1 column on desktop */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <ContactInfo />
            </div>
          </div>

          {/* Additional Cards Below */}
          <div className="mt-12 lg:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <ContactStats />
              <ContactFAQ />
              <ContactQuickActions />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> 250e5e376a9912864c58af5759d99934dc0c03b9
