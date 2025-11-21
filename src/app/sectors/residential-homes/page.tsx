import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Homes | Loft Insulation Services UK",
  description: "Learn more about our residential insulation services. Content coming soon.",
};

export default function ResidentialHomesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Residential Homes
          </h1>
          <p className="text-xl text-gray-600">Content coming soon.</p>
        </div>
      </section>
    </div>
  );
}


