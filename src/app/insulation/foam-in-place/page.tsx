import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, ClipboardCheck, Wrench, TrendingDown, Leaf, Droplets, RefreshCw, Zap, Award, Package, AlertTriangle, Thermometer, Wind, Lock, Layers, Sun, Ruler, Droplet, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Foam-in-Place Insulation | Loft Insulation Services UK",
  description: "Professional foam-in-place insulation installation across the UK. High-performance insulation method using liquid foam that expands and hardens in situ, filling gaps and sealing air leaks.",
  keywords: ["foam-in-place insulation", "injected foam", "spray-applied foam", "UK foam insulation", "expanding foam insulation", "air leak sealing"],
};

export default function FoamInPlacePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-blue via-blue-500 to-secondary-blue py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Foam‑in‑Place Insulation
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              High-performance insulation method that fills gaps, voids and irregular spaces while sealing air leaks
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 -mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Foam‑in‑place insulation (also known as injected or spray‑applied foam) is a high-performance insulation method that uses liquid foam which expands and hardens in situ — filling gaps, voids and irregular spaces while simultaneously sealing air leaks. At Loft Insulation Services UK, our Foam‑in‑Place Insulation service delivers professional installation, strong thermal performance and long-term benefits, ideal for lofts, roofs, walls, floors, or any space where conventional insulation may struggle to deliver complete coverage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you want effective insulation that seals air leaks, improves energy efficiency, and adapts to unusual or awkward building structures — foam‑in‑place is a compelling solution.
              </p>
            </div>

            {/* Why Choose Foam-in-Place Insulation */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Foam‑in‑Place Insulation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Foam‑in‑place insulation offers several advantages compared to traditional insulation approaches:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Thermometer className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Superior thermal performance and airtightness</h3>
                      <p className="text-gray-700">The foam expands to fill all cavities, cracks, corners and irregular voids — ensuring a continuous thermal envelope and reducing heat loss or gain through conduction, convection and air leaks.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Home className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Excellent for irregular or hard-to-reach spaces</h3>
                      <p className="text-gray-700">Especially useful in lofts, vaulted ceilings, roof structures with sloping rafters, under floors, or in walls where joists, beams, pipes or wiring make traditional insulation difficult.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Moisture and air‑leak sealing (when done correctly)</h3>
                      <p className="text-gray-700">Closed‑cell foam can provide water resistance and reduce air infiltration — helping prevent drafts, damp penetration and improving insulation effectiveness.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Lock className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Durable, long-lasting insulation</h3>
                      <p className="text-gray-700">Once cured, foam‑in‑place does not sag, settle or degrade quickly — it remains stable over years and retains its insulation qualities.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Ruler className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Space-efficient solution</h3>
                      <p className="text-gray-700">Because foam expands and conforms to the available space, it often achieves high insulation values with less thickness than some traditional insulation materials, useful when floor-to-ceiling height is limited or roof geometry is tight.</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-8">
                Because of these benefits, foam‑in‑place insulation is often chosen for lofts, attic conversions, renovated roofs, under‑floor insulation, or buildings with complex structure where traditional insulation may not fit or perform optimally.
              </p>
            </div>

            {/* Our Foam-in-Place Insulation Service */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Foam‑in‑Place Insulation Service</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We deliver a complete foam‑in‑place insulation solution — from initial inspection to installation and post‑work guidance — ensuring safety, compliance, and performance.
              </p>

              {/* Step 1: Detailed Assessment */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <ClipboardCheck className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">1. Detailed Property & Structural Assessment</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Inspect the area (loft, roof, walls or floors) — checking rafter/joist layout, roof pitch, existing insulation or damp, ventilation, water tanks, pipes, wiring, and access.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Evaluate suitability of foam insulation — considering ventilation needs, moisture risk, and whether closed‑cell or open‑cell foam is appropriate.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Provide a tailored recommendation on foam thickness, coverage area, and ventilation/vent path requirements.</span>
                  </li>
                </ul>
              </div>

              {/* Step 2: Preparation */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 mb-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">2. Preparation & Safety Measures</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Clear all debris, old insulation, stored items, or obstacles in the loft/roof/wall/floor space before foam is applied.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Protect ventilation routes, plumbing, wiring, hatchways and access points.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ensure safe access for installers — stable flooring where needed, protective covers, and secure containment of foam overspray or residue.</span>
                  </li>
                </ul>
              </div>

              {/* Step 3: Professional Foam Application */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Droplet className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">3. Professional Foam Application (Foam‑in‑Place Installation)</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Use certified spray‑equipment to apply foam evenly into cavities, between rafters/joists, under floors or in wall cavities.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ensure proper expansion and curing — filling all gaps, voids, corners, and creating a continuous, sealed insulation envelope.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>For lofts/roofs: apply at correct depth for required thermal resistance; for walls or floors: ensure coverage meets building standards and structural safety.</span>
                  </li>
                </ul>
              </div>

              {/* Step 4: Ventilation & Moisture Planning */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 mb-6">
                <div className="flex items-center mb-4">
                  <Wind className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">4. Ventilation & Moisture / Condensation Planning</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ensure ventilation is maintained — in roof spaces there must still be airflow (soffit, ridge, vents or equivalent) to prevent trapped moisture.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Where required, combine foam insulation with appropriate vapour control or ventilation systems to avoid condensation, damp or timber rot.</span>
                  </li>
                </ul>
              </div>

              {/* Step 5: Final Inspection */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">5. Final Inspection, Safety Check & Handover</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Inspect foam coverage, check for voids, areas of poor adhesion, or gaps around penetrations (pipes, cables, chimneys, hatches).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Clean up residual material or overspray, remove protective covers, and ensure safe access to loft/roof/wall/floor.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Provide a full handover — documentation of work done, foam type used, coverage area, ventilation/maintenance guidance, and recommended inspection schedule for long‑term performance.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Considerations & When Foam-in-Place Should Be Chosen with Care */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Considerations & When Foam‑in‑Place Should Be Chosen with Care</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                While foam‑in‑place offers strong benefits, it also requires careful planning and professional installation — especially to avoid potential drawbacks:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Higher cost than standard insulation:</strong> Foam materials and certified installation tend to be more expensive compared to rolls or batt insulation.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Ventilation & moisture risk if misused:</strong> An airtight seal can trap moisture; if roof or loft ventilation is inadequate, this may lead to damp, mould or timber decay — especially with closed‑cell foam.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Difficult to remove or alter:</strong> Once cured, foam is hard to remove. Thinking of future modifications (loft conversions, roof inspections, wiring/plumbing changes) may be more challenging.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Not always ideal for older buildings needing breathability:</strong> In older or heritage buildings where breathability and natural ventilation are important, foam&apos;s airtightness can conflict with requirements for vapour diffusion and moisture regulation.</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                Because of these trade‑offs, we recommend foam‑in‑place primarily when you need airtight insulation, are confident ventilation can be managed, and are working with a professional installer who documents the work properly.
              </p>
            </div>

            {/* Benefits for Homeowners */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Benefits for Homeowners, Landlords & Property Managers</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By choosing foam‑in‑place insulation through our service, you may benefit from:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Greatly reduced heat loss and improved energy efficiency — resulting in lower heating bills and improved comfort.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">A continuous insulation and air‑seal barrier — fewer draughts, no cold spots, better airtightness and indoor temperature stability.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Adaptable insulation that fits irregular spaces, difficult geometry, and lofts or roofs with complex layouts.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Long‑term durability — insulation that does not sag or settle and maintains its thermal performance for decades.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Potential to improve property comfort standards and reduce heating/cooling costs — valuable for landlords or property managers.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Suitable solution for loft conversions, attic space insulation, re‑roofing projects, or retrospective insulation upgrades where conventional insulation is impractical.</span>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Foam‑in‑Place Insulation</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>What is foam‑in‑place insulation, and is it the same as spray foam?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes — foam‑in‑place is a form of spray or injected foam insulation. Liquid foam is sprayed or injected into cavities (loft roof, walls, floors), where it expands and cures to form a solid, insulating, airtight layer.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>Is foam‑in‑place better than traditional insulation like rolls or loose‑fill?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    It depends on your home. Foam‑in‑place excels at sealing gaps, irregular voids, and providing airtight insulation — often outperforming traditional insulation in thermal efficiency and air sealing.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Are there any risks or drawbacks I should know about?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes — if ventilation is inadequate or moisture is trapped, foam can worsen damp or cause timber rot. It&apos;s more expensive, hard to remove or modify later, and improper installation can cause issues in loft inspection, roof maintenance, or property resale.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>For which situations is foam‑in‑place most suitable?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    It is ideal for lofts or roofs with complex geometry or sloping rafters, buildings with irregular spaces or obstructions, under‑floor voids, walls with difficult cavities, and renovation or conversion projects where airtight insulation or maximum thermal performance is needed.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>How do I ensure safe and effective foam‑in‑place insulation installation?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Use a certified, experienced installer; ensure loft/roof ventilation is reviewed and maintained; document the work (type of foam, coverage, ventilation paths); and include ventilation and moisture‑control measures. Also, plan for future access and maintenance, given foam&apos;s permanence.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary-blue via-blue-600 to-secondary-blue rounded-3xl p-10 md:p-14 text-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Install Foam‑in‑Place Insulation?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional foam-in-place insulation installation today.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Experience superior thermal performance and airtightness with our expert foam-in-place installation service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary-blue text-lg font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
                  >
                    <Quote className="h-6 w-6 mr-3" />
                    Get Free Quote
                  </Link>
                  <Link
                    href="tel:+44123456789"
                    className="inline-flex items-center justify-center px-10 py-5 bg-transparent text-white text-lg font-bold rounded-xl border-2 border-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                  >
                    <Phone className="h-6 w-6 mr-3" />
                    Call Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
