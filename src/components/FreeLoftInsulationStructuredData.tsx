export default function FreeLoftInsulationStructuredData() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Free Loft Insulation UK",
    "url": "https://www.loft-insulation-services-uk.com/free-loft-insulation-uk",
    "image": "https://d3euc6irt3la1j.cloudfront.net/free-loft-insulation-uk.webp",
    "description": "Government-backed free loft insulation service for UK homeowners, helping reduce energy bills with expert installation.",
    "sku": "FLIU-001",
    "brand": {
      "@type": "Brand",
      "name": "Free Loft Insulation UK"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.loft-insulation-services-uk.com/free-loft-insulation-uk",
      "priceCurrency": "GBP",
      "price": "0",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "LIS UK"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "158",
      "reviewCount": "49"
    },
    "audience": {
      "@type": "Audience",
      "description": "UK households eligible for free loft insulation under ECO4, government grants, and energy-saving schemes. Designed for low-income families, homeowners, tenants, and landlords seeking better energy efficiency.",
      "audienceType": "Homeowners, Tenants, Landlords"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite", 
    "url": "https://www.loft-insulation-services-uk.com/",
    "name": "Free Loft Insulation UK",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.loft-insulation-services-uk.com/free-loft-insulation-uk/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "LIS UK - Loft Insulation Services",
    "url": "https://www.loft-insulation-services-uk.com/free-loft-insulation-uk",
    "description": "LIS UK provides professional loft insulation services across the UK, helping homeowners save energy and reduce heating costs with certified installers.",
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
      "description": "Expert loft insulation installation services, energy efficiency upgrades, and free insulation surveys."
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
        "name": "City",
        "item": "https://www.loft-insulation-services-uk.com/uk"
      },
      {
        "@type": "ListItem",
        "position": 156792,
        "name": "UK",
        "item": "https://www.loft-insulation-services-uk.com/free-loft-insulation-uk"
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "name": "Free Loft Insulation UK",
    "url": "https://www.loft-insulation-services-uk.com/free-loft-insulation-uk",
    "datePublished": "2025-01-15",
    "author": {
      "@type": "Person",
      "name": "Mike"
    },
    "reviewBody": "The team at Free Loft Insulation UK was fantastic. They arrived on time, completed the loft insulation quickly, and left the place clean. I've already noticed a big difference in warmth and reduced heating bills.",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9"
    },
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Free Loft Insulation UK",
      "url": "https://www.loft-insulation-services-uk.com/free-loft-insulation-uk",
      "priceRange": "200",
      "image": "https://d3euc6irt3la1j.cloudfront.net/free-loft-insulation-uk.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 High Street",
        "addressLocality": "London",
        "postalCode": "SW1A 1AA",
        "addressCountry": "GB"
      },
      "telephone": "+1 (336) 792-5111"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Free Loft Insulation UK",
    "image": "https://d3euc6irt3la1j.cloudfront.net/free-loft-insulation-uk.webp",
    "@id": "home",
    "url": "https://www.loft-insulation-services-uk.com/free-loft-insulation-uk",
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
      "https://www.loft-insulation-services-uk.com/free-loft-insulation-uk"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is loft insulation free across the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, under the UK government's ECO4 and related grant schemes, eligible households across England, Scotland, Wales, and Northern Ireland may qualify for free loft insulation to improve energy efficiency."
        }
      },
      {
        "@type": "Question",
        "name": "What are the eligibility criteria for free loft insulation in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eligibility usually depends on household income, property type, energy efficiency rating, and whether you receive qualifying government benefits. Low-income households and those in older, inefficient homes are often prioritized."
        }
      },
      {
        "@type": "Question",
        "name": "How do I apply for a free loft insulation grant in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can apply through approved insulation providers or directly via government-backed energy schemes. An eligibility check and home energy assessment are usually carried out before installation is approved."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of free loft insulation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Loft insulation helps reduce heat loss, lower energy bills by up to £500 a year, increase home comfort, and reduce carbon emissions. It is one of the most cost-effective energy efficiency upgrades for UK homes."
        }
      },
      {
        "@type": "Question",
        "name": "How long does loft insulation last in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "High-quality loft insulation can last for over 40 years. Once installed, most households benefit from reduced heating costs for decades without needing replacement."
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
        "name": "Is loft insulation free in the UK?",
        "text": "Many UK residents ask if loft insulation can be installed for free under government-backed energy schemes.",
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
          "text": "Yes, eligible households across the UK may qualify for free loft insulation under the ECO4 grant scheme, designed to reduce energy bills and improve efficiency.",
          "dateCreated": "2025-07-14T10:00:00+05:30",
          "upvoteCount": 10,
          "url": "https://www.loft-insulation-services-uk.com/free-loft-insulation-uk#q1a1",
          "author": {
            "@type": "Person",
            "name": "Suresh Das",
            "url": "https://www.sureshdas.com/"
          }
        }
      },
      {
        "@type": "Question",
        "name": "How can I apply for free loft insulation in the UK?",
        "text": "People in the UK often ask about the process of applying for free loft insulation under ECO4.",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can apply through accredited energy providers or government-approved installers. An eligibility check and property survey are typically required before installation is approved.",
          "dateCreated": "2025-07-14T10:10:00+05:30",
          "url": "https://www.loft-insulation-services-uk.com/free-loft-insulation-uk#q3a1"
        }
      },
      {
        "@type": "Question",
        "name": "What savings can I expect with loft insulation in the UK?",
        "text": "UK homeowners and tenants want to know how much money they can save annually with free loft insulation.",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On average, properly installed loft insulation can save households between £300 and £500 per year on heating bills while also making homes more comfortable.",
          "url": "https://www.loft-insulation-services-uk.com/free-loft-insulation-uk#q4a1"
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
