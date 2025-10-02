export default function LoftInsulationNearMeStructuredData() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Loft Insulation Near Me",
    "url": "https://www.loft-insulation-services-uk.com/loft-insulation-near-me",
    "image": "https://d3euc6irt3la1j.cloudfront.net/loft-insulation-near-me.webp",
    "description": "LIS UK provides professional loft insulation services across the UK with certified installers. Improve energy efficiency, reduce heat loss, and lower energy bills.",
    "sku": "LINM-001",
    "brand": {
      "@type": "Brand",
      "name": "Loft Insulation Near Me"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.loft-insulation-services-uk.com/loft-insulation-near-me",
      "priceCurrency": "GBP",
      "price": "400",
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
      "ratingCount": "8654",
      "reviewCount": "8654"
    },
    "audience": {
      "@type": "Audience",
      "description": "8654 Reviews",
      "audienceType": "UK Homeowners aged 60-80"
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
    "@id": "https://www.loft-insulation-services-uk.com/loft-insulation-near-me#review",
    "name": "Loft Insulation Near Me Review",
    "url": "https://www.loft-insulation-services-uk.com/loft-insulation-near-me",
    "datePublished": "2025-01-12",
    "author": {
      "@type": "Person",
      "name": "Mike"
    },
    "reviewBody": "LIS UK provided exceptional loft insulation services. The installers were professional, and my home feels much warmer while my heating bills have gone down.",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1"
    },
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Loft Insulation Near Me",
      "url": "https://www.loft-insulation-services-uk.com/loft-insulation-near-me",
      "priceRange": "£400-£1000",
      "image": "https://d3euc6irt3la1j.cloudfront.net/loft-insulation-near-me.webp",
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
        "name": "Who is eligible for free loft insulation in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Homeowners in the UK may qualify for free loft insulation under government energy-saving schemes if they meet certain criteria, such as low income or receiving specific benefits."
        }
      },
      {
        "@type": "Question",
        "name": "How long does loft insulation installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most loft insulation installations are completed within 2–4 hours, depending on the property size and existing insulation."
        }
      },
      {
        "@type": "Question",
        "name": "Will loft insulation reduce my energy bills?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, proper loft insulation can significantly reduce heat loss, helping to cut your energy bills by up to 25% annually."
        }
      },
      {
        "@type": "Question",
        "name": "How long does loft insulation last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "High-quality loft insulation can last for more than 40 years, maintaining its effectiveness with minimal maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "Is there any cost for the survey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, we offer a free survey to assess your property and confirm your eligibility for free loft insulation."
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
