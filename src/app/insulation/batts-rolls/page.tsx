import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, ClipboardCheck, Wrench, TrendingDown, Leaf, Droplets, RefreshCw, Zap, Award, HelpCircle, Package, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Insulation Batts & Rolls | Loft Insulation Services UK",
  description: "Professional insulation batts and rolls installation across the UK. Flexible, cost-effective insulation solution for lofts, roofs, floors, and ceilings.",
  keywords: ["insulation batts", "insulation rolls", "batts and rolls", "UK insulation batts", "mineral wool insulation", "blanket insulation"],
};

export default function BattsRollsPage() {
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
              Insulation Batts & Rolls
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Effective, flexible and cost-efficient insulation solution for lofts, roofs, floors, and ceilings
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
                If you want an effective, flexible and cost‑efficient way to insulate your loft, roof, floors or ceilings — using insulation batts or rolls is one of the most popular and reliable choices. At Loft Insulation Services UK, our &quot;Insulation Batts & Rolls&quot; offering ensures high-quality materials, professional installation, and long-term performance tailored to each home or building. Whether for new builds, loft upgrades, conversions, or energy‑efficiency retrofits — this solution balances thermal performance, safety, and value.
              </p>
            </div>

            {/* Why Choose Batts & Rolls */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Batts & Rolls for Insulation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Insulation batts or rolls (also known as &quot;blanket insulation&quot;) are widely used across the UK for lofts, ceilings, floors and intermediate floors. Their popularity stems from their effectiveness, versatility and ease of installation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">Key advantages of batts & rolls:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Sparkles className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible and Adaptable</h3>
                      <p className="text-gray-700">Rolls and batts can be cut or shaped to fit between joists, rafters, around obstructions (wires, pipes, beams), and irregular spaces — ideal for lofts with unusual shapes or older buildings.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <TrendingDown className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Cost‑Effective</h3>
                      <p className="text-gray-700">Compared with rigid boards or more complex insulation types, batts/rolls are often more budget-friendly while still delivering good thermal performance.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Zap className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Easy and Quick to Install</h3>
                      <p className="text-gray-700">Because batts/rolls come ready to roll out and cut to size, installation is faster — reducing labour time and disruption.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Home className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Thermal Efficiency</h3>
                      <p className="text-gray-700">Good quality mineral‑wool or fibreglass rolls trap air and significantly reduce heat transfer, helping keep homes warm in winter and cooler in summer.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Acoustic Insulation & Fire Safety</h3>
                      <p className="text-gray-700">Mineral wool batts/rolls provide sound reduction between floors or rooms and are non‑combustible — adding fire safety to your home.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Award className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Versatility Across Building Parts</h3>
                      <p className="text-gray-700">Batts/rolls can be used for lofts, ceilings, intermediate floors, attic floors, and between rafters or joists — making them suitable for whole‑home insulation solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Batts & Rolls Insulation Service */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Batts & Rolls Insulation Service</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We offer a full-service package for batts & rolls insulation — from assessment and planning to installation and after‑care. Here&apos;s what to expect when you choose us:
              </p>

              {/* Step 1: Site Survey */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <ClipboardCheck className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">1. Site Survey & Insulation Planning</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Inspect loft/roof/floor space: joist/rafter layout, existing insulation (if any), accessibility, obstructions (pipes, wiring, water tanks).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Recommend the most suitable batt/roll type (mineral wool, glass wool, etc.) based on structure, use (storage, loft, living), and thermal requirements.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Determine required thickness and quantity to meet energy-efficiency and safety standards.</span>
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
                    <span>Ensure the work area is safe and accessible.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Protect existing fixtures, wiring, water tanks, and ventilation pathways.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>If replacing old or degraded insulation, remove and dispose safely.</span>
                  </li>
                </ul>
              </div>

              {/* Step 3: Professional Installation */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">3. Professional Installation of Batts & Rolls</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Roll out and cut to size, then lay between joists, rafters or floorboards; ensure snug fit to prevent gaps.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Install in multiple layers if required, to reach recommended depth for thermal performance.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Maintain ventilation paths, and avoid blocking vents or cold-water tanks.</span>
                  </li>
                </ul>
              </div>

              {/* Step 4: Quality Check */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">4. Quality Check & Clean-up</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Confirm full coverage, correct depth, no compression or gaps.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ensure ventilation is not blocked.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Clean up debris or insulation fibres carefully.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Provide guidance on maintenance and what to check after installation (e.g. vents, loft access, damp).</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What Materials We Use */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-6">
                <Package className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Materials We Use</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Depending on your project needs, we offer a variety of batt & roll materials:
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mineral Wool (Stone Wool or Glass-based)</h3>
                  <p className="text-gray-700">Excellent thermal and acoustic insulation, fire-resistant, durable, and suitable for most loft/floor/ceiling applications.</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fiberglass Wool</h3>
                  <p className="text-gray-700">Lightweight and flexible, with good insulation properties especially for loft floors or between joists.</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Other Natural or Eco-friendly Materials (on request)</h3>
                  <p className="text-gray-700">For clients seeking environmentally-conscious insulation options like sheep‑wool or recycled fibre — depending on availability and suitability.</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                We select materials based on safety, compliance to UK building standards, insulation performance, and suitability for your home.
              </p>
            </div>

            {/* Why Proper Installation Matters */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Proper Installation Matters</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                While batts & rolls are flexible and relatively easy to handle, correct installation is critical for them to perform well. Poor installation — gaps, compression, blocking vents — can severely degrade thermal and fire performance. Some key points we emphasise:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700"><strong>Insulation must be installed without gaps or compression</strong> — dense packing reduces air gaps and maximises thermal resistance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700"><strong>Ventilation paths must remain clear</strong> — especially loft vents, soffit vents, or spaces around water tanks — to prevent condensation and damp.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700"><strong>Use of fire‑resistant materials</strong> (e.g. mineral wool) ensures safety; avoid compressing or disturbing ventilation or piping.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700"><strong>When replacing old insulation</strong>, remove degraded or contaminated materials first — layering new insulation over old debris or damp insulation can reduce effectiveness and cause moisture problems.</p>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                Our professional installers follow all best practices to ensure insulation works as expected, safely and long-term.
              </p>
            </div>

            {/* Benefits for Homeowners */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Benefits for Homeowners & Property Owners</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By choosing batts & rolls insulation through our service, you stand to gain:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Lower heating bills thanks to reduced heat loss.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">More comfortable, consistent indoor temperatures throughout the year.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Improved energy efficiency and potentially better property energy rating.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Enhanced fire safety and acoustic insulation (if mineral-wool materials used).</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Versatile coverage — suitable for loft floors, ceilings, attic spaces, intermediate floors.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Cost-effective insulation upgrade with relatively quick installation and minimal disruption.</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                For many properties, adding or upgrading batts & rolls insulation is among the single most effective home improvements for comfort, efficiency, and long-term savings.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Insulation Batts & Rolls</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>What&apos;sthe difference between insulation rolls and rigid insulation boards?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Rolls (or batts) are flexible, easier to install, and ideal for lofts, between joists or irregular spaces. Rigid boards offer higher thermal resistance per thickness, but are less flexible and often more expensive. Rolls are better for retrofit lofts, while boards suit conversions or tight spaces.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>How do I choose the right thickness or depth for my loft insulation?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    It depends on your loft use, climate, and existing insulation. Professionals typically calculate required insulation depth to meet thermal performance standards — our survey will assess this and recommend the right thickness for maximum benefit.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Are insulation rolls safe and fire‑resistant?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes — mineral wool rolls (stone or glass wool) are generally non‑combustible and have high fire resistance ratings, making them a safe choice for lofts and ceilings.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>Can insulation rolls cause damp or condensation in the loft?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Not if installed correctly. Proper ventilation must be maintained so moisture can escape. We ensure vents are clear, avoid sealing lofts airtight, and install insulation so that airflow and vapour paths remain intact.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>Is this insulation suitable for old houses or irregular loft spaces?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Absolutely. The flexibility of rolls and batts makes them ideal for older homes, lofts with angled ceilings, irregular joist layouts, or spaces with obstructions like pipes, wires, or water tanks.
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
                  Ready to Install Batts & Rolls Insulation?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional batts and rolls insulation installation today.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Let us help you improve your home&apos;s energy efficiency with flexible, cost-effective insulation.
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
