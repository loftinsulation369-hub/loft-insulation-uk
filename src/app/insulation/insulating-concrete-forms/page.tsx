import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, ClipboardCheck, Wrench, TrendingDown, Leaf, Droplets, RefreshCw, Zap, Award, Package, AlertTriangle, Thermometer, Wind, Lock, Layers, Sun, Ruler, Building2, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Insulating Concrete Forms (ICF) | Loft Insulation Services UK",
  description: "Professional ICF construction and insulation solutions across the UK. Energy-efficient structural insulation combining structural strength, thermal insulation, and durability.",
  keywords: ["ICF", "insulating concrete forms", "ICF construction", "structural insulation", "energy-efficient building", "UK ICF"],
};

export default function InsulatingConcreteFormsPage() {
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
              Insulating Concrete Forms (ICF)
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Energy‑Efficient Structural Insulation – Combining strength, thermal performance, and durability
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
                Insulating Concrete Forms (ICF) represent a modern, high-performance construction method that combines structural strength, thermal insulation, soundproofing, and long-term durability. At Loft Insulation Services UK, our ICF solutions provide robust, energy-efficient building shells — ideal for new builds, extensions, basements, or any project where insulation and structural integrity are top priorities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you are constructing a new home or renovating an existing property, ICF offers a comprehensive solution: structural concrete core, continuous insulation, airtight envelope, and resilience — all in one integrated system.
              </p>
            </div>

            {/* Why Choose ICF Construction & Insulation */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose ICF Construction & Insulation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                ICF stands apart because it merges structure, insulation, and airtightness in a single system. Here are the main benefits:
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">Key advantages of ICF:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Thermometer className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">High thermal efficiency & continuous insulation</h3>
                      <p className="text-gray-700">ICF walls combine a concrete core with insulating formwork, delivering excellent thermal resistance and eliminating thermal bridges — which means consistent indoor temperatures and lower energy bills.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Wind className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Airtight & energy-efficient building envelope</h3>
                      <p className="text-gray-700">The continuous shell reduces air leakage, helping maintain a stable internal climate and reducing heating/cooling demand.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Structural strength and durability</h3>
                      <p className="text-gray-700">Walls built using ICF are extremely robust — resistant to fire, storms, earthquakes, pests, rot, and have excellent longevity.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Zap className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Sound insulation & acoustic comfort</h3>
                      <p className="text-gray-700">The dense concrete core plus foam insulation offers superior sound dampening — ideal for urban environments or multi-unit buildings.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Lock className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Moisture, mould & pest resistance</h3>
                      <p className="text-gray-700">ICF walls resist damp, mould, and insect damage better than many traditional wooden-frame structures.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <TrendingDown className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Energy savings and reduced running costs</h3>
                      <p className="text-gray-700">Due to the high thermal performance and airtightness, ICF buildings often require significantly less energy for heating and cooling — leading to long-term savings.</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-8">
                In summary, ICF gives you a strong, insulated, airtight, and long-lasting building envelope — reducing both upfront risks and long-term energy/maintenance costs.
              </p>
            </div>

            {/* How ICF Works */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">How ICF Works – The Construction & Insulation Process</h2>

              {/* Step 1: ICF Formwork Installation */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <Layers className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">1. ICF Formwork Installation</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Modular, interlocking insulated form units (made of foam or insulating material) are dry-stacked to form the walls, basement, or structural envelope.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>The formwork includes built-in channels for reinforcement (rebar), plumbing, electrical conduits, and window/door openings — making it flexible for design and installations.</span>
                  </li>
                </ul>
              </div>

              {/* Step 2: Reinforced Concrete Pour */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 mb-6">
                <div className="flex items-center mb-4">
                  <Building2 className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">2. Reinforced Concrete Pour & Core Formation</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Once the formwork is in place, concrete is poured into the cavity. After curing, this forms a strong, monolithic structural core.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>This concrete core provides structural integrity: wind resistance, fire resistance, structural load capacity, and long-term stability.</span>
                  </li>
                </ul>
              </div>

              {/* Step 3: Permanent Insulation */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">3. Permanent Insulation & Airtight Shell</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>The insulating formwork remains permanently as part of the wall system, delivering continuous external or internal insulation. This avoids cold-bridging and ensures consistent thermal performance.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Seams, joints, and penetrations are sealed to maintain airtightness, which helps in reducing draughts and thermal losses.</span>
                  </li>
                </ul>
              </div>

              {/* Step 4: Finishing */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">4. Finishing & Multi-Use Building Envelope</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Once the structural and insulation shell is ready, standard internal and external finishes (e.g. plaster, drywall, cladding) can be applied.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>The result is a building with strong external walls that combine structure and insulation — suitable for basements, homes, extensions, ground floors, or multi-storey constructions.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Where ICF Is Especially Effective */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Where ICF Is Especially Effective & Recommended</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ICF construction & insulation is particularly advantageous in the following scenarios:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Building2 className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong className="text-gray-900">New builds or full-house construction:</strong> For clients wanting a highly energy-efficient, durable, low-maintenance home.</span>
                </div>
                <div className="flex items-start">
                  <Building2 className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong className="text-gray-900">Basements, ground floors, or buildings in damp zones:</strong> ICF&apos;s moisture resistance and airtightness make it ideal where damp, moisture, or ground humidity is a concern.</span>
                </div>
                <div className="flex items-start">
                  <Building2 className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong className="text-gray-900">Extensions or renovations needing robust exterior walls:</strong> When you add to existing homes, ICF offers structural strength while boosting thermal efficiency.</span>
                </div>
                <div className="flex items-start">
                  <Building2 className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong className="text-gray-900">Buildings requiring sound insulation or vibration protection:</strong> Schools, apartments, multi-unit housing, or urban homes benefit from ICF&apos;s acoustic damping.</span>
                </div>
                <div className="flex items-start">
                  <Building2 className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong className="text-gray-900">Long-term investment properties:</strong> Low maintenance, high durability, energy savings and resilience to pests, storms, or fire make ICF a smart choice.</span>
                </div>
                <div className="flex items-start">
                  <Building2 className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong className="text-gray-900">Climate zones with high heating or cooling demand:</strong> ICF&apos;s thermal mass and continuous insulation help maintain stable indoor temperatures, reducing energy demand for heating or cooling.</span>
                </div>
              </div>
            </div>

            {/* Benefits for Homeowners */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Benefits for Homeowners, Developers & Property Managers</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By opting for ICF through Loft Insulation Services UK, you enjoy:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Reduced heating and cooling costs — thanks to continuous insulation and airtight structure.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Consistent indoor comfort — avoidance of cold spots, draughts, and better climate control throughout the year.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Long-term durability — insulation that does not sag or settle and maintains its thermal performance for decades.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Lower maintenance and repair costs — insulating concrete reduces need for frequent upkeep common in traditional builds.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Enhanced acoustic comfort — quieter interiors, reduced external noise, better privacy in multi-unit or urban settings.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Increased building lifespan and value — ICF walls provide a durable, stable shell likely to outlast many traditional constructions.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Flexibility in design — modular formwork and structural strength allow varied architectural styles: wide spans, basements, multi-storeys, complex rooflines.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Environmental benefits — energy savings reduce carbon footprint over the building&apos;s life, contributing to sustainability goals.</span>
                </div>
              </div>
            </div>

            {/* Considerations & When ICF Might Not Be the Ideal Choice */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Considerations & When ICF Might Not Be the Ideal Choice</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                While ICF offers many advantages, there are certain considerations before deciding:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Higher upfront cost:</strong> ICF construction and materials typically cost more initially than basic frame or block builds.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Need for experienced installers:</strong> Correct assembly, concrete pouring, sealing, and finishing must be done by skilled professionals to fully realise the benefits and avoid issues.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Less flexibility for late modifications:</strong> Once concrete is poured, making major structural changes (new windows, openings) is more difficult compared to framed walls.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Embodied carbon of concrete:</strong> Concrete production has a high carbon footprint; though often offset over time by energy savings, it is a factor for some eco-conscious builders.</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong className="text-gray-900">Dependence on proper ventilation and moisture control:</strong> Airtight construction demands adequate ventilation design; inadequate ventilation may cause indoor air quality or moisture buildup issues.</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                Because of these, ICF is best considered for projects where long-term performance, energy efficiency, and structural integrity outweigh the increased initial cost and where skilled installation is available.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Insulating Concrete Forms (Top 5)</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>What does &quot;insulating concrete form&quot; mean?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Insulating Concrete Form means a construction system where interlocking insulating formwork (usually foam or similar material) is used as the permanent mould for concrete. Once concrete is poured and cured, the formwork remains as an integral insulation layer, giving you both structure and thermal insulation in one.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>Will an ICF-built home reduce my energy bills significantly?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. Because ICF walls provide continuous insulation with minimal thermal bridging, and the structure is airtight, many ICF homes consume considerably less energy for heating and cooling compared to traditional masonry or timber-frame homes.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Is ICF safe and durable — for weather, fire, pests, dampness?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Definitely. The concrete core delivers structural strength, fire resistance, and resistance to pests and rot. The foam insulation protects against damp and helps maintain a stable internal environment, making ICF homes very durable and low-maintenance.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>Can I use ICF for basements, ground floors, or extensions as well as new builds?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. ICF is versatile and suitable for basements, ground floors, entire houses, extensions, or new builds. Its moisture resistance and insulation properties make it especially beneficial in basements or areas susceptible to damp.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>Is ICF more expensive than traditional building methods? Is it worth it?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Upfront costs are typically higher than basic wood-frame or block walls. However, the long-term benefits — lower energy bills, minimal maintenance, structural strength, soundproofing, and durability — often make ICF a cost-effective investment over time, especially for homeowners seeking value, comfort, and longevity.
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
                  Ready to Build with ICF?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional ICF construction and insulation today.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Experience energy-efficient structural insulation with our expert ICF solutions.
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
