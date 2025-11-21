import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Thick Should Your Loft Insulation Be? UK Guide",
  description: "Practical guidance on insulation depths and how to meet thermal targets in UK lofts.",
  metadataBase: new URL('https://www.loft-insulation-services-uk.com'),
  alternates: {
    canonical: '/blog/how-thick-should-your-loft-insulation-be-uk-guide',
  },
  openGraph: {
    title: "How Thick Should Your Loft Insulation Be? UK Guide",
    description: "Practical guidance on insulation depths and how to meet thermal targets in UK lofts.",
    url: 'https://www.loft-insulation-services-uk.com/blog/how-thick-should-your-loft-insulation-be-uk-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "How Thick Should Your Loft Insulation Be? UK Guide",
    description: "Practical guidance on insulation depths and how to meet thermal targets in UK lofts.",
  },
};

export default function LoftInsulationThicknessGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="bg-gradient-to-br from-primary-blue via-blue-500 to-secondary-blue text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How Thick Should Your Loft Insulation Be? UK Guide
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Practical guidance on insulation depths and how to meet thermal targets in UK lofts.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-700 text-lg leading-relaxed">
        <p><strong>Introduction:</strong> Determining the correct loft insulation thickness is essential to achieving thermal performance targets. This guide sets out practical rules of thumb and professional considerations for UK properties.</p>

<p><strong>Depth vs performance:</strong> The thermal resistance of an insulation layer is proportional to depth divided by the lambda value. Lower lambda materials require less depth to achieve equivalent performance. When specifying depth, consider the whole assembly and avoid compressing layers which reduces effectiveness.</p>

<p><strong>Recommended retrofit depths:</strong> For conventional mineral wool, contemporary retrofit guidance commonly suggests depths in the region of 250–300mm, subject to existing insulation and product lambda. For high-performance boards, a much smaller thickness may be sufficient. Always confirm with product data and a professional specification.</p>

<p><strong>Loft conversions and limited headroom:</strong> Conversions require tailored solutions to achieve U-values while preserving headroom. High-performance boards or combined between- and over-rafter approaches are commonly used. Insulate and detail junctions to avoid thermal bridging and condensation problems.</p>

<p><strong>Verification and documentation:</strong> Document the installed depth and provide an estimate of the achieved U-value. Photographic and written records support future compliance checks and homeowner confidence.</p>

<p><strong>Conclusion:</strong> There is no single correct thickness for every situation. Professional assessment ensures that material selection and installed depth combine to meet both performance and practical constraints.</p>

<p>This professional guidance is intended to provide clear, practical and actionable information. It emphasises compliance, best practice, and long-term value in selecting and installing loft insulation.</p>
        </div>
      </section>
    </div>
  );
}


