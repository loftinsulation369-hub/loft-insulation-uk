import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, ClipboardCheck, Wrench, TrendingDown, Leaf, Droplets, RefreshCw, Zap, Award, Package, AlertTriangle, Thermometer, Wind, Lock, HelpCircle, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: "Spray Foam Insulation | Loft Insulation Services UK",
  description: "Professional spray foam insulation installation across the UK. Superior thermal efficiency, airtightness, and long-term comfort for lofts, roofs, walls, and floors.",
  keywords: ["spray foam insulation", "spray foam", "UK spray foam", "closed-cell foam", "open-cell foam", "loft spray foam"],
};

export default function SprayFoamPage() {
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
              Spray Foam Insulation
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              High-performance solution for superior thermal efficiency, airtightness, and long-term comfort
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
                Spray foam insulation is a high-performance solution for lofts, roofs, walls, and floors that delivers superior thermal efficiency, airtightness, and long-term comfort. At Loft Insulation Services UK, our spray foam insulation service offers professional installation, precise application, and lasting results — ideal for new builds, loft conversions, renovations, or energy‑efficiency upgrades.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you want maximum insulation performance, airtightness, and reduced heat loss — spray foam can significantly outperform traditional insulation types like rolls, batts, or loose‑fill, making it a smart long-term investment for your home or building.
              </p>
            </div>

            {/* Why Choose Spray Foam Insulation */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Spray Foam Insulation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Spray foam insulation offers several advantages that make it particularly suitable for lofts, roofs, and more ambitious insulation projects:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Thermometer className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Superior thermal performance & airtightness</h3>
                      <p className="text-gray-700">Spray foam expands and fills gaps, cracks, and irregular spaces — creating a continuous thermal barrier that significantly reduces heat transfer and prevents cold air ingress or heat loss.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Home className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Excellent for irregular or hard-to-reach spaces</h3>
                      <p className="text-gray-700">Because spray foam expands and conforms to surfaces, it&apos;s especially effective where there are rafters, angled roofs, sloping ceilings, or awkward joist layouts.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Moisture and condensation resistance</h3>
                      <p className="text-gray-700">Closed-cell spray foam — when applied correctly — can act as a vapour barrier, preventing moisture ingress, reducing risk of damp, and protecting roof timbers or building structure.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Wind className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Air‑seal and draft reduction</h3>
                      <p className="text-gray-700">Spray foam effectively seals drafts, air leaks around windows, hatches, water tanks, pipes, and penetrations — improving overall insulation efficiency.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Lock className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Long-term durability and longevity</h3>
                      <p className="text-gray-700">Once cured, spray foam is stable, does not settle like loose-fill, and maintains its insulation and sealing properties for many decades.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Zap className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced energy efficiency & comfort</h3>
                      <p className="text-gray-700">Homes insulated with spray foam tend to retain heat better in winter, stay cooler in summer, and deliver more consistent indoor temperatures, reducing energy bills and improving comfort.</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-8">
                Because of these benefits, spray foam insulation is an excellent choice where premium performance, airtightness, and long-term energy savings are priorities.
              </p>
            </div>

            {/* Our Spray Foam Insulation Service */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Spray Foam Insulation Service</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We provide a full-service spray foam insulation installation — from assessment and planning to application, finishing, and after‑care. Here&apos;s what you can expect when you choose our service:
              </p>

              {/* Step 1: Comprehensive Assessment */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <ClipboardCheck className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">1. Comprehensive Property & Roof/Rafter Assessment</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Inspect the area (loft, roof, attic, walls, floor) — checking structure, rafter/joist layout, roof pitch, existing insulation, ventilation, water tanks, wiring, accesses, and any obstructions.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Evaluate whether spray foam is suitable (roof structure, ventilation requirements, moisture risk), and recommend the right spray foam type (open-cell or closed-cell) based on intended use (storage or habitation).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Check for existing insulation or damp issues — if needed, plan for removal and preparation before spray foam installation.</span>
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
                    <span>Clear the loft or roof space of debris, old insulation, or stored items to provide a clean area for foam application.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Seal or protect windows, hatchways, vents, wiring, electrical fixtures, water tanks and plumbing to avoid contamination or damage.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ensure access and safety for installers (sturdy flooring or boarding if needed, protective gear, ventilation when spraying, containment of overspray).</span>
                  </li>
                </ul>
              </div>

              {/* Step 3: Professional Application */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">3. Professional Application of Spray Foam</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Apply spray foam evenly between rafters, joists, or roof timbers — ensuring full coverage, correct thickness, and penetration into corners, gaps and irregular spaces.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>In lofts or roofs, ensure sufficient foam thickness to deliver recommended thermal resistance (U‑value) and airtightness.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Address all penetrations — around pipes, vents, cables, chimneys — sealing them thoroughly for airtightness and thermal continuity.</span>
                  </li>
                </ul>
              </div>

              {/* Step 4: Ventilation & Compliance */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 mb-6">
                <div className="flex items-center mb-4">
                  <Droplets className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">4. Ventilation, Moisture Control & Compliance</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Verify that loft ventilation requirements are met — even with spray foam&apos;s airtight qualities, adequate air movement or ventilation must be maintained according to building regulations.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>For roofs intended for habitation (loft conversions), ensure that vapour control and condensation risk are managed appropriately (vapour barriers or controlled ventilation if required).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Comply with fire, building safety, and insulation regulations for your property type and usage.</span>
                  </li>
                </ul>
              </div>

              {/* Step 5: Final Inspection */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">5. Final Inspection, Clean-up & Handover</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Inspect foam coverage for consistency, thickness, and absence of voids or thin spots.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Clean up any overspray, remove protective coverings, and clear waste safely.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Provide you with documentation of the work done — insulation specifications, thickness, ventilation advice, maintenance guidelines.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Advise on safe loft access, storage limitations (if any), and future inspections for roof/ventilation/ insulation integrity.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Types of Spray Foam We Use */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-6">
                <Layers className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Types of Spray Foam We Use</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We recommend and use high-quality spray foam products that meet safety and performance standards, typically choosing between:
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Closed‑cell spray foam</h3>
                  <p className="text-gray-700">Offers high insulation value per thickness, excellent airtightness, moisture resistance, and structural rigidity — especially suitable for roofs, loft conversions, or spaces requiring a vapour barrier.</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Open‑cell spray foam</h3>
                  <p className="text-gray-700">Lightweight and more breathable — sometimes preferred where some degree of breathability is required, or where rigid structural load is not needed (for internal partitions, ceilings, or floor/ceiling between storeys).</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our professional team evaluates your property&apos;s needs and recommends the correct foam type — prioritizing thermal efficiency, moisture control, ventilation, and building regulations compliance.
              </p>
            </div>

            {/* Why Correct Installation Matters */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Correct Installation Matters (More Than Ever)</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Spray foam insulation offers major benefits — but only when installed by trained professionals. Mistakes can reduce effectiveness, lead to damp or ventilation problems, or compromise fire safety. That&apos;s why we emphasize:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Proper preparation</strong> — cleaning, moisture check, removal of old or damaged materials, safe access.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Ensuring ventilation requirements are maintained or provided</strong> — especially for inhabited lofts or roofs with spray foam insulation.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Correct application thickness and coverage</strong> — to avoid cold spots, thermal bridging, or heat loss.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Full sealing around penetrations</strong> — pipes, cables, chimneys, windows, hatches — to ensure airtightness.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Appropriate fire-safety measures</strong> — spray foam materials and installation must meet building fire regulations, and not interfere with fire rated surfaces or escape routes.</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                Our experienced installers follow all best‑practice guidelines to deliver safe, effective, long-term insulation that protects your home and improves energy efficiency.
              </p>
            </div>

            {/* Benefits for Homeowners */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Benefits for Homeowners, Landlords & Property Managers</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By choosing spray foam insulation through Loft Insulation Services UK, you can expect the following benefits:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Major reduction in heat loss — leading to lower energy bills and improved heating efficiency.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Consistent indoor temperatures, better comfort, reduced draughts, and elimination of cold spots.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Airtight thermal envelope — improved insulation performance, reduced external noise, and enhanced energy efficiency.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Moisture and condensation protection (when properly ventilated) — protecting roof structure, timbers, and internal spaces.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Long-term durability — spray foam does not settle or sag over time, maintaining performance for decades.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Ideal for loft conversions, roof rooms, upgraded storage spaces, or homes with challenging roof geometries.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Potential increase in property value — thanks to improved energy efficiency, comfort, and insulated roof/loft spaces.</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                For many homeowners or property owners, spray foam is a premium insulation solution that pays off over the long term in comfort, efficiency, and durability.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Spray Foam Insulation (Top 5)</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>Is spray foam insulation suitable for my loft or roof?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes — especially if your loft or roof has irregular rafters or joists, sloped ceilings, hard‑to‑reach spots, or you want maximum insulation and airtightness. After a site assessment, we&apos;ll advise whether spray foam is the right choice for your property.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>Will spray foam cause ventilation or condensation problems?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Not if installed correctly. We always assess ventilation needs before application and ensure vents/air paths remain or are upgraded. For roof spaces or converted lofts, we make provisions for proper ventilation and vapour control to prevent condensation or damp.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>What type of spray foam do you use — open-cell or closed-cell?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    We typically use closed‑cell spray foam for roofs and lofts because of its superior insulation, moisture resistance, and airtightness. In situations requiring breathability or lighter load — open-cell foam may be recommended. Our survey will determine the right choice.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>Is spray foam safe and durable long-term?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. When applied correctly by professionals, spray foam insulation remains stable, does not settle or degrade, and preserves insulation performance for decades. It also contributes to airtightness and structural insulation integrity.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>Can I install spray foam if I plan a loft conversion or intend to use the roof space?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Absolutely. Spray foam is especially ideal for loft conversions, roof rooms, or converted attics — providing a continuous thermal envelope, moisture control, and airtightness. We also ensure ventilation and compliance with building standards.
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
                  Ready to Install Spray Foam Insulation?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional spray foam insulation installation today.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Experience superior thermal performance and airtightness with our expert spray foam installation service.
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
