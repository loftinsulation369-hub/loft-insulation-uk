import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, ClipboardCheck, Wrench, TrendingDown, Leaf, Droplets, RefreshCw, Zap, Award, Package, HelpCircle, AlertTriangle, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: "Loose‑Fill Insulation | Loft Insulation Services UK",
  description: "Professional loose-fill insulation installation across the UK. Flexible, effective insulation solution for irregular lofts, roofs, floors, and ceilings.",
  keywords: ["loose-fill insulation", "blown insulation", "loose fill insulation", "UK loose-fill", "blown-in insulation", "loft loose-fill"],
};

export default function LooseFillPage() {
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
              Loose‑Fill Insulation
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Flexible, highly effective insulation for irregular lofts, roofs, floors, and ceilings
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
                Loose‑fill insulation is a flexible, highly effective way to insulate lofts, roofs, floors or ceilings — especially when spaces are irregular, have obstructions, or when you want to top up existing insulation. At Loft Insulation Services UK, our loose‑fill insulation service delivers expert installation, high‑quality materials, and long‑lasting thermal performance tailored to your home or building.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're insulating a new loft, upgrading old insulation, or insulating a complex attic space with joists, pipes or wiring — loose‑fill offers an efficient, adaptable solution that fills gaps and covers uneven areas thoroughly.
              </p>
            </div>

            {/* Why Choose Loose-Fill Insulation */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Loose‑Fill Insulation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Loose‑fill insulation offers several advantages that make it a popular choice among homeowners, landlords, and property managers:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Sparkles className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Excellent for Irregular or Obstructed Spaces</h3>
                      <p className="text-gray-700">Since loose‑fill is poured or blown in, it conforms to the shape of the loft — wrapping around pipes, wires, beams and other obstacles, and filling gaps that traditional batts or boards may miss.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Coverage</h3>
                      <p className="text-gray-700">Loose‑fill fills voids and irregular spaces thoroughly, reducing the risk of heat loss through gaps or poorly insulated zones.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <RefreshCw className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Easy to Top-up or Upgrade Existing Insulation</h3>
                      <p className="text-gray-700">If your loft already has some insulation, loose‑fill can be added on top to increase overall thermal resistance without major disruption.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Home className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Good Thermal and Acoustic Performance</h3>
                      <p className="text-gray-700">Quality loose‑fill materials — like mineral‑wool fibre or recycled fibre insulation — trap air and reduce heat transfer, helping maintain stable indoor temperatures. The compound structure can also help dampen noise.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Zap className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Cost-effective and Efficient Installation</h3>
                      <p className="text-gray-700">Loose‑fill installation is relatively quick and less disruptive compared to rigid boards or complex insulation systems, which helps save on labour and installation time.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Award className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Adaptable to Many Building Types</h3>
                      <p className="text-gray-700">From older homes with uneven joists to modern builds with complex loft geometry, loose‑fill works well in a variety of situations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Loose-Fill Insulation Service */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Loose‑Fill Insulation Service</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We provide a full-service loose‑fill insulation installation — from inspection to completion — ensuring high quality, consistency, and safety.
              </p>

              {/* Step 1: Initial Assessment */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <ClipboardCheck className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">1. Initial Loft/Roof Assessment & Planning</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Inspect the loft/roof space to check joist layout, existing insulation (if any), roof structure, ventilation and any obstructions like pipes, wiring, tanks, beams.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Determine whether loose‑fill is the most appropriate insulation type for your loft — based on shape, access, and requirements.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Calculate the required insulation depth and quantity for optimal thermal performance.</span>
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
                    <span>Ensure the loft space is ready for work — clear of debris, items, or old insulation if removal is needed.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Set up safety equipment and protective coverings, especially around vents, water tanks, wiring, and access hatches.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>If existing insulation is damaged, contaminated or degraded, we remove and dispose it safely before applying new loose‑fill insulation.</span>
                  </li>
                </ul>
              </div>

              {/* Step 3: Installation */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">3. Blown or Poured Installation of Loose‑Fill</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Use professional blower or pouring equipment to install loose‑fill insulation evenly across loft floor or between joists.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Fill all gaps, corners, and irregular spaces — ensuring full coverage and avoiding voids.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Distribute insulation to recommended depth for maximum thermal efficiency.</span>
                  </li>
                </ul>
              </div>

              {/* Step 4: Ventilation */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 mb-6">
                <div className="flex items-center mb-4">
                  <Droplets className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">4. Ventilation & Moisture Control Consideration</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ensure loft ventilation is maintained — vents, soffits, and air paths are kept clear to prevent condensation or damp.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>For certain loft uses (storage or habitable space), check for vapour barriers or membranes if needed.</span>
                  </li>
                </ul>
              </div>

              {/* Step 5: Final Inspection */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">5. Final Inspection & Clean‑Up</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Inspect the newly insulated space — verify even coverage, recommended depth, and no gaps.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Clean up any installation debris or dust.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Provide guidance on loft maintenance — how to preserve insulation performance, avoid damp, and keep ventilation working.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What Materials Are Used */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-6">
                <Package className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Materials Are Used in Loose‑Fill Insulation</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We offer a range of loose‑fill insulation materials depending on the specific needs of your loft and building:
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mineral‑wool fibre</h3>
                  <p className="text-gray-700">Durable, fire‑resistant, and offers good thermal and acoustic insulation — ideal for many loft applications.</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fibreglass or Glass‑fibre fibre</h3>
                  <p className="text-gray-700">Lightweight and effective, used in many standard loft insulation jobs.</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Eco‑friendly and recycled fibre insulation</h3>
                  <p className="text-gray-700">For clients seeking environmentally conscious insulation solutions, recycled cellulose or fibre insulation is available (subject to suitability and loft conditions).</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                We select the material based on building structure, insulation requirements, and long‑term performance, keeping safety and energy efficiency in focus.
              </p>
            </div>

            {/* Why Proper Installation Is Essential */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Proper Installation Is Essential</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Loose‑fill insulation delivers best results when installed correctly. Mistakes like uneven filling, inadequate depth, blocked ventilation, or damp exposure can reduce effectiveness.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-semibold">Key points for proper installation:</p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Ensure even coverage across the loft, with no gaps or compressed spots.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Maintain clear ventilation channels to allow air flow and avoid condensation.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Use fire‑resistant materials (e.g. mineral‑wool fibre) especially around roof structures, vents, and electrical/water installations.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Remove any old, damaged or damp insulation before installing new loose‑fill.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Ensure loft access remains safe; avoid walking on insulation directly — use boards or boards‑onto‑joists if boarding over.</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                Our professional installers follow all best practices to guarantee safe, high‑performing insulation that lasts years.
              </p>
            </div>

            {/* Benefits for Homeowners */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Benefits for Homeowners, Landlords & Property Managers</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By choosing our loose‑fill insulation service, you can expect:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Lower heating bills and reduced energy consumption.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">More stable and comfortable indoor temperatures — warmer in winter, cooler in summer.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Improved energy efficiency and reduced heat loss, potentially improving a property's thermal performance rating.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Good acoustic insulation and noise reduction (especially in multi-storey or semi‑detached homes).</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">A flexible, cost-effective insulation solution, even for irregular lofts or older buildings.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Quick installation with minimal disruption, making it suitable for occupied properties or rental units.</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                For many homes and properties, loose‑fill insulation is one of the most effective ways to improve comfort and energy efficiency without major structural changes.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Loose‑Fill Insulation</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>When is loose‑fill insulation better than rolls, batts or boards?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Loose‑fill is ideal when loft spaces are irregular, have obstructions (pipes, wiring, tanks, beams), or when joist spacing is uneven — making it difficult to fit rigid insulation neatly. It's also a great solution when you want to top up existing insulation without full strip‑out.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>Can loose‑fill insulation be added over existing insulation?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes — loose‑fill can be used to top up or supplement existing insulation, boosting thermal performance and filling any gaps left by older insulation layers. However, the existing insulation must be in good condition (dry, clean, stable).
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Is professional installation required?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Usually yes. Loose‑fill installation often requires blower or specialized pouring equipment, and correct filling technique is important to avoid gaps or ventilation blockage. For safety and performance, we recommend using a professional installer rather than DIY.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>Will it perform well long-term? Will it settle or degrade?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    High-quality loose‑fill insulation performs reliably for many years if the loft remains dry and ventilated. However, in damp or poorly ventilated lofts, or if exposed to moisture, insulation can degrade over time. Periodic loft checks are recommended.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>Is loose‑fill suitable if I plan to board the loft or use it for storage?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes — but care is needed. Loose‑fill can be used under boarding, but boards should be laid on joists (or loft legs) rather than directly on insulation to avoid compressing the material. This ensures insulation remains effective while giving you usable loft flooring.
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
                  Ready to Install Loose‑Fill Insulation?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional loose-fill insulation installation today.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Let us help you insulate irregular spaces with flexible, effective loose-fill insulation.
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
