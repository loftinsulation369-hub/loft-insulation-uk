export default function LoftInsulationLeadsStructuredData() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Loft Insulation Leads",
    "url": "https://www.loft-insulation-services-uk.com/loft-insulation-leads",
    "image": "https://d3euc6irt3la1j.cloudfront.net/loft-insulation-leads.webp",
    "description": "Exclusive and verified loft insulation leads in the UK for installers and contractors. Connect with real homeowners ready for insulation services.",
    "sku": "LIL-001",
    "brand": {
      "@type": "Brand",
      "name": "Loft Insulation Leads"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.loft-insulation-services-uk.com/loft-insulation-leads",
      "priceCurrency": "GBP",
      "price": "50",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "LIS UK"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "138",
      "reviewCount": "55"
    },
    "audience": {
      "@type": "Audience",
      "description": "Businesses in the UK seeking exclusive or shared loft insulation leads, including ECO4-approved installers, energy efficiency companies, and home improvement service providers.",
      "audienceType": "Insulation Companies, Installers, Energy Providers"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite", 
    "url": "https://www.loft-insulation-services-uk.com/",
    "name": "Loft Insulation Leads",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.loft-insulation-services-uk.com/loft-insulation-leads/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Loft Insulation Leads | LIS UK",
    "url": "https://www.loft-insulation-services-uk.com/loft-insulation-leads",
    "description": "Get targeted loft insulation leads today. Verified UK homeowners ready for installation services.",
    "inLanguage": "en-GB",
    "publisher": {
      "@type": "Organization",
      "name": "LIS UK",
      "logo": {
        "@type": "ImageObject",
        "url": "https://d3euc6irt3la1j.cloudfront.net/loft-insulation-logo.webp"
      }
    },
    "mainEntity": {
      "@type": "Service",
      "serviceType": "Loft Insulation",
      "provider": {
        "@type": "Organization",
        "name": "LIS UK"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United Kingdom"
      },
      "description": "UK loft insulation leads for installers and contractors. Real homeowners, verified data, and high conversion rates."
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 156790,
        "name": "Home",
        "item": "https://www.loft-insulation-services-uk.com"
      },
      {
        "@type": "ListItem",
        "position": 156791,
        "name": "Services",
        "item": "https://www.loft-insulation-services-uk.com/uk"
      },
      {
        "@type": "ListItem",
        "position": 156792,
        "name": "Leads",
        "item": "https://d3euc6irt3la1j.cloudfront.net/loft-insulation-logo.webp"
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "name": "Accurate and High-Converting Leads",
    "url": "https://www.loft-insulation-services-uk.com/loft-insulation-leads",
    "author": "James",
    "reviewBody": "The loft insulation leads provided were genuine and highly targeted. The conversion rate exceeded my expectations, making this an excellent investment for my business.",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9"
    },
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Loft Insulation Leads",
      "priceRange": "200",
      "image": "https://d3euc6irt3la1j.cloudfront.net/loft-insulation-leads.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 High Street",
        "addressLocality": "London",
        "postalCode": "SW1A 1AA",
        "addressCountry": "GB"
      }
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Loft Insulation Leads",
    "image": "https://d3euc6irt3la1j.cloudfront.net/loft-insulation-leads.webp",
    "@id": "home",
    "url": "https://www.loft-insulation-services-uk.com/loft-insulation-leads",
    "telephone": "+1 (336) 792-5111",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 High Street",
      "addressLocality": "London",
      "postalCode": "SW1A 1AA",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.5072",
      "longitude": "-0.1276"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/L4RGINDIA/",
      "https://twitter.com/L4rgindia",
      "https://www.instagram.com/l4rgllc/",
      "https://www.youtube.com/c/L4RGINDIA",
      "https://in.linkedin.com/company/l4rgindia",
      "https://in.pinterest.com/L4RGINDIA/",
      "https://l4rgcompany.quora.com/",
      "https://www.loft-insulation-services-uk.com/loft-insulation-leads"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are loft insulation leads in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Loft insulation leads in the UK are potential customer inquiries from homeowners and tenants interested in installing loft insulation, often generated through online marketing, government grant schemes, or energy efficiency campaigns."
        }
      },
      {
        "@type": "Question",
        "name": "How are loft insulation leads generated in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Leads are generated through digital marketing, SEO campaigns, paid ads, social media promotions, and referrals from government schemes like ECO4, which encourage households to apply for free or subsidised loft insulation."
        }
      },
      {
        "@type": "Question",
        "name": "Why are loft insulation leads important for UK businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "High-quality loft insulation leads help UK insulation companies connect with eligible households, increase conversions, grow revenue, and take advantage of government-backed grant schemes to serve more customers."
        }
      },
      {
        "@type": "Question",
        "name": "Who buys loft insulation leads in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Loft insulation leads are purchased by insulation companies, energy providers, and grant installers across the UK looking to expand their customer base and secure more installations."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get exclusive loft insulation leads in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get exclusive loft insulation leads by partnering with trusted lead generation companies, using targeted digital campaigns, and focusing on ECO4-eligible households to ensure high-quality conversions."
        }
      }
    ]
  };

  const qaPageSchema = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are loft insulation leads in the UK?",
        "text": "Businesses often ask what loft insulation leads are and how they can help grow their customer base in the UK.",
        "answerCount": 3,
        "upvoteCount": 12,
        "datePublished": "2025-08-17T14:00:00+05:30",
        "author": {
          "@type": "Person",
          "name": "Amit Sharma",
          "url": "https://www.sureshdas.com/"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Loft insulation leads in the UK are potential customer enquiries from homeowners or tenants interested in installing insulation, usually generated through online campaigns, government schemes, or referrals.",
          "dateCreated": "2025-07-14T10:00:00+05:30",
          "upvoteCount": 10,
          "url": "https://www.loft-insulation-services-uk.com/loft-insulation-leads#q1a1",
          "author": {
            "@type": "Person",
            "name": "Suresh Das",
            "url": "https://www.sureshdas.com/"
          }
        }
      },
      {
        "@type": "Question",
        "name": "How are loft insulation leads generated in the UK?",
        "text": "UK installers and providers want to know how loft insulation leads are typically generated.",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Leads are generated through digital marketing, SEO, PPC ads, social media campaigns, and government-backed schemes like ECO4 that encourage households to apply for free or subsidised loft insulation.",
          "dateCreated": "2025-07-14T10:10:00+05:30",
          "url": "https://www.loft-insulation-services-uk.com/loft-insulation-leads#q3a1"
        }
      },
      {
        "@type": "Question",
        "name": "Who buys loft insulation leads in the UK?",
        "text": "Many people ask which businesses typically purchase loft insulation leads in the UK market.",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Loft insulation leads are usually purchased by insulation companies, energy providers, and ECO4-approved installers who want to connect with qualified households and secure more installations.",
          "url": "https://www.loft-insulation-services-uk.com/loft-insulation-leads#q4a1"
        }
      }
    ]
  };

  const employerRatingSchema = {
    "@context": "https://schema.org/",
    "@type": "EmployerAggregateRating",
    "itemReviewed": {
      "@type": "Organization",
      "name": "UK's Best Loft Insulation Services",
      "sameAs": "https://www.loft-insulation-services-uk.com/"
    },
    "ratingValue": 91,
    "bestRating": 100,
    "worstRating": 1,
    "ratingCount": "10561"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(qaPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(employerRatingSchema),
        }}
      />
    </>
  );
}
