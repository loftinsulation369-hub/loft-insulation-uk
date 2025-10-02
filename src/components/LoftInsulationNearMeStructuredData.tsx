export default function LoftInsulationNearMeStructuredData() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Loft Insulation Near Me",
    "image": "https://d3euc6irt3la1j.cloudfront.net/loft-insulation-near-me.webp",
    "description": "Professional loft insulation service by LIS UK. Reduce heat loss, save on energy bills, and improve home comfort with certified UK installers.",
    "brand": {
      "@type": "Brand",
      "name": "Loft Insulation Near Me"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "148",
      "reviewCount": "49"
    },
    "audience": {
      "@type": "Audience",
      "description": "UK households searching for 'loft insulation near me', including homeowners, tenants, and landlords who want to improve energy efficiency, lower heating costs, and benefit from ECO4 grants.",
      "audienceType": "Homeowners, Tenants, Landlords"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite", 
    "url": "https://www.loft-insulation-services-uk.com/",
    "name": "Loft Insulation Near Me",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.loft-insulation-services-uk.com/loft-insulation-near-me/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Loft Insulation Near Me | LIS UK",
    "url": "https://www.loft-insulation-services-uk.com/loft-insulation-near-me",
    "description": "LIS UK provides professional and affordable loft insulation services near you. Certified installers, free surveys, and energy-saving solutions across the UK.",
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
      "description": "Find expert loft insulation services near you with LIS UK. We offer free surveys, certified installers, and cost-effective solutions to reduce heat loss and lower your energy bills across the UK."
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
        "name": "Loft Insulation Near Me",
        "item": "https://www.loft-insulation-services-uk.com/loft-insulation-near-me"
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "name": "Loft Insulation Near Me",
    "url": "https://www.loft-insulation-services-uk.com/loft-insulation-near-me",
    "image": "https://d3euc6irt3la1j.cloudfront.net/loft-insulation-near-me.webp",
    "author": "Mike",
    "reviewBody": "LIS UK provided exceptional loft insulation services. The installers were professional, and my home feels much warmer while my heating bills have gone down.",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9"
    },
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Loft Insulation Near Me",
      "priceRange": "200",
      "image": "image-url",
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
    "name": "Loft Insulation Near Me",
    "image": "https://d3euc6irt3la1j.cloudfront.net/loft-insulation-near-me.webp",
    "@id": "home",
    "url": "https://www.loft-insulation-services-uk.com/loft-insulation-near-me",
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
      "https://www.loft-insulation-services-uk.com/loft-insulation-near-me"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I find loft insulation services near me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can find loft insulation services near you by searching online for local installers, checking government-approved ECO4 providers, or contacting nearby energy efficiency companies."
        }
      },
      {
        "@type": "Question",
        "name": "Are loft insulation surveys near me free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most loft insulation providers near you offer a free home survey to check eligibility for government grants and to provide an accurate insulation assessment."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get same-day loft insulation near me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In many cases, local loft insulation companies can complete a survey and install insulation on the same day, depending on property size and accessibility."
        }
      },
      {
        "@type": "Question",
        "name": "Do loft insulation companies near me work with ECO4 grants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most loft insulation installers near you are ECO4-approved and can help you apply for free or subsidised insulation under the UK government energy efficiency scheme."
        }
      },
      {
        "@type": "Question",
        "name": "How much does loft insulation near me cost without a grant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Without a government grant, the cost of loft insulation near you typically ranges from £400 to £1,000 depending on loft size, property type, and insulation materials."
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
        "name": "How can I find loft insulation companies near me?",
        "text": "Homeowners often ask how they can quickly locate trusted loft insulation services nearby.",
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
          "text": "You can find loft insulation companies near you by searching online for local ECO4-approved installers or contacting nearby energy efficiency service providers.",
          "dateCreated": "2025-07-14T10:00:00+05:30",
          "upvoteCount": 10,
          "url": "https://www.loft-insulation-services-uk.com/loft-insulation-near-me#q1a1",
          "author": {
            "@type": "Person",
            "name": "Suresh Das",
            "url": "https://www.sureshdas.com/"
          }
        }
      },
      {
        "@type": "Question",
        "name": "Is loft insulation near me covered by government grants?",
        "text": "Many residents want to know if they can access free or subsidised loft insulation through local ECO4 schemes.",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most loft insulation services near you are eligible for ECO4 funding. Households may qualify if they are on a low income, receive government benefits, or live in energy-inefficient homes.",
          "dateCreated": "2025-07-14T10:10:00+05:30",
          "url": "https://www.loft-insulation-services-uk.com/loft-insulation-near-me#q3a1"
        }
      },
      {
        "@type": "Question",
        "name": "How much does loft insulation near me cost without a grant?",
        "text": "People often ask about the average price of loft insulation if they do not qualify for a government scheme.",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Without a grant, the cost of loft insulation near you typically ranges from £400 to £1,000 depending on the property size, loft accessibility, and insulation material used.",
          "url": "https://www.loft-insulation-services-uk.com/loft-insulation-near-me#q4a1"
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
