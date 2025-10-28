<<<<<<< HEAD
export default function HomeStructuredData() {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}







=======
export default function HomeStructuredData() {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}

>>>>>>> 250e5e376a9912864c58af5759d99934dc0c03b9
