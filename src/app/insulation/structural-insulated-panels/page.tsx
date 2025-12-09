import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, ClipboardCheck, Wrench, TrendingDown, Leaf, Droplets, RefreshCw, Zap, Award, Package, AlertTriangle, Thermometer, Wind, Lock, Layers, Sun, Ruler, Building2, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Structural Insulated Panels (SIPs) | Loft Insulation Services UK",
  description: "Professional Structural Insulated Panels (SIPs) installation across the UK. High-performance modular insulation and building system combining structural integrity, insulation, and rapid construction.",
  keywords: ["SIPs", "structural insulated panels", "SIP construction", "modular insulation", "energy-efficient building", "UK SIPs"],
};

export default function StructuralInsulatedPanelsPage() {
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
              Structural Insulated Panels (SIPs)
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              High‑Performance Modular Insulation & Building System
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
                Structural Insulated Panels (SIPs) are a modern, energy‑efficient building method combining structural integrity, insulation, airtightness, and rapid construction. At Loft Insulation Services UK, our SIP solutions offer a turnkey approach — delivering insulated, strong, and durable wall, floor, and roof panels that save time, reduce energy loss, and improve comfort. Whether you're building a new home, extension, attic conversion, or energy‑efficient property upgrade — SIPs provide a high-quality, long-lasting solution.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                SIPs integrate structural framing and insulation in one element, reducing thermal bridges, improving airtightness, and accelerating build time. For homeowners, landlords, or developers seeking modern building methods with top thermal performance and minimal maintenance, SIPs are an excellent choice.
              </p>
            </div>

            {/* Why Choose Structural Insulated Panels */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Structural Insulated Panels</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Structural Insulated Panels offer a set of distinctive advantages compared to traditional insulation + frame + block/brick construction. Here's what makes them stand out:
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">Key Benefits of SIP Construction:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Thermometer className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous thermal envelope & minimal thermal bridging</h3>
                      <p className="text-gray-700">Because insulation is built into the panel structure, SIP walls, roofs, and floors avoid cold spots or heat leaks common in traditional framed constructions.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <TrendingDown className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">High energy efficiency & reduced heating/cooling demand</h3>
                      <p className="text-gray-700">SIP‑built properties retain heat in winter and remain stable in summer — lowering energy bills and improving indoor comfort.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Structural strength with lightweight construction</h3>
                      <p className="text-gray-700">SIPs provide strong load-bearing walls and roofs, yet are easier and quicker to assemble than traditional masonry, saving time and labor costs.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Zap className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Fast build time & reduced disruption</h3>
                      <p className="text-gray-700">With pre-fabricated panels, construction or renovation projects are often completed faster — ideal for extensions, new builds, or conversions with tight timelines.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Wind className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced airtightness & sound insulation</h3>
                      <p className="text-gray-700">SIP joins are sealed carefully, which reduces drafts, improves insulation, and helps with acoustic separation — beneficial for homes in noisy or urban environments.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Layers className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Design flexibility & modular construction</h3>
                      <p className="text-gray-700">SIPs can be used for walls, floors, roofs, dormers, extensions — and work for traditional houses, bungalows, loft conversions, or modern passive‑house style builds.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border-l-4 border-pink-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Lock className="h-6 w-6 text-pink-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Durability, low maintenance, and long-term value</h3>
                      <p className="text-gray-700">Properly installed SIP systems deliver long-term structural integrity, insulation performance, and reduced maintenance compared to older building methods.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Structural Insulated Panel Service */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Structural Insulated Panel Service</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We offer a complete, end-to-end SIP service — from design and planning to installation and aftercare — ensuring your building benefits fully from SIP advantages.
              </p>

              {/* Step 1: Project Survey */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <ClipboardCheck className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">1. Project Survey & Planning</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Assess site, building design, required thermal performance, ventilation, local climate, and structural load requirements.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Design a panel layout: walls, roof, floors — dimensioned to your property's needs (new build, extension, loft conversion, etc.).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Determine appropriate panel specification (insulation thickness, board material, structural grade) to meet regulatory and comfort standards.</span>
                  </li>
                </ul>
              </div>

              {/* Step 2: Manufacture & Panel Fabrication */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 mb-6">
                <div className="flex items-center mb-4">
                  <Package className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">2. Manufacture & Panel Fabrication (Offsite or Onsite)</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Panels are prefabricated (foam insulation core sandwiched between structural boards) to exact measurements.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Panels include cut-outs or provisions for windows, doors, services (plumbing, electrical), reducing onsite modifications and speed-up installation.</span>
                  </li>
                </ul>
              </div>

              {/* Step 3: Installation & Assembly */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">3. Installation & Assembly</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Delivery and assembly of panels on-site — walls, floors, roof sections fitted and sealed.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Joints and seams sealed for airtightness, structural fixings applied, ensuring load-bearing integrity and insulation continuity.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Roof and floor panels installed along with required boarding or finishing layers to suit intended use (storage, habitation, etc.).</span>
                  </li>
                </ul>
              </div>

              {/* Step 4: Insulation & Airtightness Verification */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 mb-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">4. Insulation & Airtightness Verification</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Post-assembly inspection to verify panel insulation, sealing, vapour control (if required), and airtightness.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ensure proper ventilation and moisture control to prevent condensation, damp or mould — especially for roofs, loft conversions, or extensions.</span>
                  </li>
                </ul>
              </div>

              {/* Step 5: Finishing & Handover */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">5. Finishing & Handover</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Internal and external finishing: cladding, plasterboard, flooring, roofing — as per design.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Final quality check: structural stability, insulation performance, sealing, ventilation, and overall build compliance.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Provide documentation: panel specifications, thermal rating, maintenance guidance, and advice for future inspections or upgrades.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* When SIPs Are Especially Suitable */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">When SIPs Are Especially Suitable</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SIPs are particularly advantageous in certain types of constructions or renovation scenarios:
              </p>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  Ideal for:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Building2 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">New builds or custom homes wanting energy‑efficiency, speed, and modern construction standards.</span>
                  </div>
                  <div className="flex items-start">
                    <Building2 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Extensions, loft conversions or attic‑room builds — where insulation and structural integrity must coexist with limited space.</span>
                  </div>
                  <div className="flex items-start">
                    <Building2 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Homes aiming for low heating bills, improved comfort, and airtight construction — e.g. passive‑house or low‑energy standards.</span>
                  </div>
                  <div className="flex items-start">
                    <Building2 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Renovations needing strong structural upgrade and insulation — for older or poorly insulated buildings.</span>
                  </div>
                  <div className="flex items-start">
                    <Building2 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Properties in colder climates or with high energy‑cost concerns — where thermal efficiency adds long-term savings.</span>
                  </div>
                  <div className="flex items-start">
                    <Building2 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Projects requiring fast turnaround — modular panel assembly significantly reduces on-site build time.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Advantages for Homeowners */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Advantages for Homeowners, Developers & Property Managers</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By choosing SIPs through Loft Insulation Services UK, you benefit from:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Lower energy bills thanks to excellent insulation and airtightness.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Comfortable, stable indoor temperatures all year round — no cold spots, draughts, or overheating.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Faster construction/renovation timelines compared to traditional brick-and‑mortar or timber frame builds, reducing inconvenience and labor cost.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Durability and long-term structural integrity — walls and roofs that remain stable, insulated, and maintenance-light for decades.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Better sound insulation — quieter, more private, and more comfortable interiors.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Flexibility and scalability — suitable for everything from small homes to large builds, extensions, or multi‑unit properties.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Improved property value and marketability — energy-efficient, modern-construction properties attract buyers or tenants.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Environmental and sustainability benefits — reducing heating/cooling energy demand contributes to lower carbon footprint over building lifetime.</span>
                </div>
              </div>
            </div>

            {/* Considerations */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Considerations & What to Check Before Choosing SIPs</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                While SIPs offer many benefits, there are a few considerations to bear in mind:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Higher initial cost vs. basic builds</strong> — prefabrication, high‑quality materials and installation may cost more upfront than traditional builds.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Need for precise design and accurate measurements</strong> — SIPs must be planned and manufactured carefully; alterations mid-construction can be complex.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Importance of proper sealing and ventilation</strong> — airtightness demands correctly implemented ventilation or vapour control systems to avoid condensation or moisture problems.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Dependence on quality installation</strong> — poor assembly or sealing can compromise insulation/waterproofing — always use experienced, certified installers.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Less flexibility for major structural changes later</strong> — modifications can be harder compared to traditional framed or block construction.</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                Given these, SIPs are best suited for projects where long-term performance, energy efficiency, and build quality are priorities over minimal upfront cost and maximum flexibility for future modifications.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Structural Insulated Panels (Top 5)</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>What are Structural Insulated Panels (SIPs)?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    SIPs are prefabricated panels made of an insulating foam core sandwiched between structural sheathing (boards), used to build walls, roofs, and floors. Once assembled, they provide structural support, thermal insulation, and airtightness — streamlining construction.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>Will a SIP‑built home save on heating and cooling costs?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. Because SIPs deliver continuous insulation and eliminate thermal bridges, properties built with SIPs typically require much less energy to heat or cool, leading to lower running costs and improved comfort.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Are SIPs suitable for loft conversions or attic rooms?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Absolutely. SIPs are ideal for loft conversions or attic rooms where insulation, space efficiency, head‑height, and airtightness matter. Panels can be used for roofs, walls, or floors depending on design.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>Is construction with SIPs faster than traditional builds?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. Since panels are prefabricated and only assembled on-site, build time is significantly shorter compared to masonry or timber-frame builds — reducing labour, site disruption, and overall project time.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>Do SIP buildings require special maintenance or ventilation?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    SIPs require proper ventilation and moisture control to prevent condensation or damp — especially because of airtight construction. With good design and maintenance (ensuring vents, seals, and humidity control), SIP buildings remain comfortable and efficient for decades.
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
                  Ready to Build with Structural Insulated Panels?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional SIP installation today.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Experience high-performance modular insulation and rapid construction with our expert SIP solutions.
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
