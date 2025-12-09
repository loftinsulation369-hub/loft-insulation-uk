import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, ClipboardCheck, Wrench, TrendingDown, Leaf, Droplets, RefreshCw, Zap, Award, Package, AlertTriangle, Thermometer, Wind, Lock, Layers, Ruler, HelpCircle, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Rigid Foam Board Insulation | Loft Insulation Services UK",
  description: "Professional rigid foam board insulation installation across the UK. Premium, high-performance solution for lofts, roofs, walls, and floors with maximum thermal resistance.",
  keywords: ["rigid foam board", "foam board insulation", "PIR insulation", "XPS insulation", "EPS insulation", "UK foam board"],
};

export default function RigidFoamBoardPage() {
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
              Rigid Foam Board Insulation
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Premium, high-performance solution for maximum thermal resistance and structural strength
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
                Rigid foam board insulation is a premium, high‑performance solution for lofts, roofs, walls, and floors where space is limited, maximum thermal resistance is required, or structural strength matters. At Loft Insulation Services UK, our rigid foam board insulation service delivers expert installation, long-lasting performance, and energy savings — ideal for loft conversions, flat roofs, extensions, or homes needing optimal thermal efficiency.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you&apos;re planning a loft conversion, upgrading insulation in a modern build, renovating a roof or wall, or simply aiming for long-term energy savings — rigid foam board can provide a solid, stable, and efficient insulation solution that meets high standards and delivers comfort year-round.
              </p>
            </div>

            {/* Why Choose Rigid Foam Board Insulation */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Rigid Foam Board Insulation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Rigid foam board insulation stands out because of its unique combination of thermal performance, structural strength, and versatility. Here&apos;s what makes it a top choice for many projects:
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">Key advantages of rigid foam boards:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Thermometer className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">High thermal resistance per thickness</h3>
                      <p className="text-gray-700">Foam boards offer a very good U‑value even with relatively thin profiles, making them ideal where roofspace, wall cavity, or floor height is limited.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Layers className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Structural stability and load-bearing capacity</h3>
                      <p className="text-gray-700">Unlike loose‑fill or rolls, foam boards remain rigid — enabling them to support flooring, roof decks, or wall overlays without sagging or compression. Excellent for loft conversions, solid floor overlays, or roof renovations.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Moisture resistance and water‑tightness</h3>
                      <p className="text-gray-700">Closed-cell foam boards resist water absorption, helping prevent damp, condensation, and thermal bridging — especially useful in roofs, flat ceilings, or walls exposed to moisture or external weather conditions.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Lock className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Consistent performance over time</h3>
                      <p className="text-gray-700">Foam boards don&apos;t settle, compress, or degrade easily — they maintain their insulation value for decades if installed correctly.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Home className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Versatile application</h3>
                      <p className="text-gray-700">Suitable for flat roofs, pitched roofs under rafters, external wall insulation, internal wall overlays, floors (over joists or concrete slabs), basement ceilings, and more.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Wind className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Improved airtightness and comfort</h3>
                      <p className="text-gray-700">Because boards are rigid and fitted snugly (with sealing at joints), they help create a continuous thermal envelope — reducing drafts, noise infiltration, and improving energy efficiency.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Rigid Foam Board Insulation Services */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Rigid Foam Board Insulation Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We provide a comprehensive rigid-foam‑board insulation service — from the initial survey to installation and aftercare — ensuring correct specification, safe installation, and long-term performance.
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
                    <span>Examine the building&apos;s structure — roof pitch, wall construction, floor type (suspended or concrete), existing insulation, moisture risk, ventilation, and load-bearing requirements.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Determine appropriate foam board type (e.g. PIR, XPS, EPS) and thickness for the installation based on thermal performance required, structural load, and regulatory standards.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Check for potential obstructions — water tanks, wiring, pipes, vents, chimneys — and plan cuttings/overlaps accordingly.</span>
                  </li>
                </ul>
              </div>

              {/* Step 2: Preparation */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 mb-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">2. Preparation & Moisture / Ventilation Planning</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ensure roof/wall/floor surfaces are dry, clean, and structurally sound before board installation.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Where needed, install vapour control layers or membranes to manage moisture ingress and condensation risk — especially in roofs or basement ceilings.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Verify ventilation or airflow requirements (e.g. soffit vents for pitched roofs, external wall vents) remain functional after foam board installation.</span>
                  </li>
                </ul>
              </div>

              {/* Step 3: Precise Installation */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">3. Precise Installation of Foam Boards</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Cut boards accurately to fit between rafters, joists, or wall studs — ensuring snug fit and minimal gaps.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Secure boards with appropriate fixings (mechanical fixings, adhesive, screws — depending on wall/roof/floor type) to ensure stability.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Seal all joints, edges, penetrations (around pipes, wires, vents) to maintain thermal continuity and avoid thermal bridging or air leakage.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>For roof or floor conversions, overlay appropriate boarding, flooring, or plasterboard over foam to provide usable surface while preserving insulation performance.</span>
                  </li>
                </ul>
              </div>

              {/* Step 4: Quality Assurance */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">4. Quality Assurance, Safety & Compliance Checks</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Inspect for correct board thickness, coverage, and sealing at all seams and penetrations.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Check that moisture control measures (vapour barrier, vents) are correctly implemented to prevent condensation or damp problems.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ensure structural fixings comply with building standards — especially when boards are used under floors or in load-bearing roofs/walls.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Clean up installation debris, and provide ventilation/maintenance guidance for long-term performance.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Types of Rigid Foam Boards We Use */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-6">
                <Package className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Types of Rigid Foam Boards We Use</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We tailor board selection to your building&apos;s needs, balancing performance, cost, and application. Common options include:
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">PIR (Polyisocyanurate) Boards</h3>
                  <p className="text-gray-700">High thermal efficiency and thin-profile insulation — ideal when space is limited (e.g. between rafters or wall cavities).</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">XPS (Extruded Polystyrene) Boards</h3>
                  <p className="text-gray-700">Strong, moisture-resistant, and suitable for floors, basement ceilings, or external ground-level walls where damp or moisture ingress is possible.</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">EPS (Expanded Polystyrene) Boards</h3>
                  <p className="text-gray-700">A cost-effective option for internal walls or ceilings where extreme thermal performance is not critical but insulation, lightweight and ease-of-fitting matter.</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                For projects requiring external wall insulation or high moisture resistance, we recommend selecting boards with appropriate moisture-grade and finishing (render, cladding, boarding) as per building use and exposure.
              </p>
            </div>

            {/* When Rigid Foam Board Is Particularly Beneficial */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">When Rigid Foam Board Insulation Is Particularly Beneficial</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Rigid foam insulation is especially advantageous in the following situations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Building2 className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong className="text-gray-900">Loft conversions or attic rooms:</strong> Where you convert loft spaces into living areas — boards provide insulation under rafters or over ceilings, without compromising head height.</span>
                </div>
                <div className="flex items-start">
                  <Building2 className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong className="text-gray-900">Flat or pitched roofs undergoing renovation:</strong> Ideal for re-roofing jobs where you need strong insulation that also supports roof decking or coverings.</span>
                </div>
                <div className="flex items-start">
                  <Building2 className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong className="text-gray-900">Solid floors or ground-floor slabs:</strong> When converting basements, garages, or building extensions — foam boards give insulation under screed or floors without raising floor height excessively.</span>
                </div>
                <div className="flex items-start">
                  <Building2 className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong className="text-gray-900">External wall retrofits:</strong> Board-based external insulation on solid walls to improve thermal performance where cavity insulation is not possible.</span>
                </div>
                <div className="flex items-start">
                  <Building2 className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong className="text-gray-900">Moisture-prone or damp areas:</strong> Basements, ground floors, or older buildings where damp ingress is a concern — closed-cell boards help resist water penetration.</span>
                </div>
                <div className="flex items-start">
                  <Building2 className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong className="text-gray-900">Energy-efficiency upgrades in space-limited structures:</strong> Period homes or houses with restricted loft or wall cavity depth benefit from high thermal performance per mm thickness.</span>
                </div>
              </div>
            </div>

            {/* Benefits for Homeowners */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Benefits for Homeowners, Landlords & Property Managers</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By choosing rigid foam board insulation through our service, you can expect:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Significant energy savings and lower heating/cooling bills.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Improved comfort — stable indoor temperatures, fewer drafts, better thermal consistency.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Durability and long-term insulation performance without settling or thermal degradation.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Structural strength — ability to support floors, roof surfaces, or wall overlays.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Reduced risk of damp, condensation, or thermal bridging (when installed professionally).</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Increased property value — energy efficiency, thermal comfort, and usable loft/floor space add market appeal.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Versatility — suitable for a wide range of home types (lofts, flats, houses), building works (conversions, renovations), and climates.</span>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Rigid Foam Board Insulation</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>How thick should rigid foam insulation be to get good thermal performance?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    It depends on your property type, climate, and thermal targets. Typically, boards of 50 mm to 100 mm thickness are used, but our survey and calculations will determine the ideal thickness based on U‑value requirements and building regulations.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>Can I install rigid foam board myself, or should I hire professionals?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Due to structural, moisture‑control, and sealing requirements — and depending on project complexity (loft, roof, floor, moisture exposure) — professional installation is strongly recommended to ensure long-term performance, compliance, and safety.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Will foam board insulation prevent damp or condensation?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes — when combined with proper ventilation and vapour control (where needed). Closed-cell boards resist moisture ingress and, with correctly sealed joints and ventilation, help maintain a dry, stable building envelope that reduces condensation risk.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>Is rigid foam board suitable for loft conversions where I intend to install flooring or a loft room?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Absolutely. Foam boards are both insulating and structurally stable, making them ideal under floorboards or roof decking. With proper fixings and sealing, you get a well-insulated, usable loft space with minimal heat loss.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>How long does rigid foam board insulation last?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    When installed correctly and kept dry, rigid foam board insulation retains its thermal properties for decades. It does not sag or settle over time, making it a durable, long-term solution.
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
                  Ready to Install Rigid Foam Board Insulation?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional rigid foam board insulation installation today.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Experience premium thermal performance and structural strength with our expert installation service.
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
