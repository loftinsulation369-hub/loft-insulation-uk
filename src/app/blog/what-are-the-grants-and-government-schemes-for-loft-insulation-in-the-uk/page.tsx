import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are the Grants & Government Schemes for Loft Insulation in the UK?",
  description: "Guidance on identifying and accessing funding support and incentives for loft insulation projects in the UK.",
  metadataBase: new URL('https://www.loft-insulation-services-uk.com'),
  alternates: {
    canonical: '/blog/what-are-the-grants-and-government-schemes-for-loft-insulation-in-the-uk',
  },
  openGraph: {
    title: "What Are the Grants & Government Schemes for Loft Insulation in the UK?",
    description: "Guidance on identifying and accessing funding support and incentives for loft insulation projects in the UK.",
    url: 'https://www.loft-insulation-services-uk.com/blog/what-are-the-grants-and-government-schemes-for-loft-insulation-in-the-uk',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "What Are the Grants & Government Schemes for Loft Insulation in the UK?",
    description: "Guidance on identifying and accessing funding support and incentives for loft insulation projects in the UK.",
  },
};

export default function LoftInsulationGrantsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="bg-gradient-to-br from-primary-blue via-blue-500 to-secondary-blue text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What Are the Grants &amp; Government Schemes for Loft Insulation in the UK?
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Guidance on identifying and accessing funding support and incentives for loft insulation projects in the UK.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-700 text-lg leading-relaxed">
        <p><strong>Introduction:</strong> Grant and incentive programmes for energy efficiency can reduce upfront costs for eligible households. This article explains how to identify potential support and how installers can assist with applications.</p>

<p><strong>Where to look for support:</strong> National schemes, local authority programmes and supplier obligation schemes are common sources of support. Eligibility varies and schemes change over time; a professional check during the survey phase is recommended. Certain schemes target vulnerable or low-income households; others may be available for broader retrofits.</p>

<p><strong>Practical application considerations:</strong> Many schemes require certified installers, specified products and documentary evidence of completion. Work with installers experienced in scheme administration to streamline applications. Keep detailed records and compliance documentation to satisfy funder requirements.</p>

<p><strong>Conclusion:</strong> Treat grants and schemes as possible enhancements to the project budget. Consult a professional to confirm current options and eligibility during the specification stage.</p>

<p>This professional guidance is intended to provide clear, practical and actionable information. It emphasises compliance, best practice, and long-term value in selecting and installing loft insulation.</p>
        </div>
      </section>
    </div>
  );
}


