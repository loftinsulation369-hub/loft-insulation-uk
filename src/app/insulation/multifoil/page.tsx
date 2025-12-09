import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, ClipboardCheck, Wrench, TrendingDown, Leaf, Droplets, RefreshCw, Zap, Award, Package, AlertTriangle, Thermometer, Wind, Lock, Layers, Sun, Ruler, HelpCircle, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Multifoil Insulation | Loft Insulation Services UK",
  description: "Professional multifoil insulation installation across the UK. Modern, high-performance insulation system combining reflective foil, insulating cores, and vapour-control membranes.",
  keywords: ["multifoil insulation", "multifoil", "reflective multifoil", "UK multifoil", "foil insulation", "space-saving insulation"],
};

export default function MultifoilPage() {
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
              Multifoil Insulation
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Modern, high-performance insulation system combining reflective foil, insulating cores, and vapour-control membranes
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
                Multifoil insulation is a modern, high‑performance insulation system that combines multiple layers of reflective foil, insulating cores, and vapour‑control membranes — offering a slim, space‑efficient alternative to traditional insulating materials. At Loft Insulation Services UK, our Multifoil Insulation service delivers professional installation, excellent thermal performance, and long-term comfort for lofts, roofs, walls, or floors — ideal for retrofit projects, loft conversions, or homes where space and head‑height are limited.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you want effective insulation that saves space, reduces heat loss and heat gain, controls moisture, and maintains flexibility for varied roof/loft shapes — multifoil is a great solution.
              </p>
            </div>

            {/* Why Choose Multifoil Insulation */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Multifoil Insulation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Multifoil insulation offers a combination of unique benefits that make it stand out compared to traditional insulation products:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Ruler className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Space‑saving slim profile</h3>
                      <p className="text-gray-700">Multifoil achieves strong thermal performance with far less thickness — making it ideal where loft headroom or wall/floor cavity depth is limited.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Sun className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Reflective & multi‑mode heat protection</h3>
                      <p className="text-gray-700">Multifoil works by reflecting radiant heat as well as providing insulation against conductive and convective heat loss — helping keep homes warmer in winter and cooler in summer.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Built‑in vapour control / moisture barrier</h3>
                      <p className="text-gray-700">Many multifoil products include vapour‑control layers, reducing risk of condensation, damp and mould — especially in variable climates.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Home className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Lightweight, easy to handle and install</h3>
                      <p className="text-gray-700">Multifoil rolls are lighter and more flexible than bulky boards or batts — easier for installers to fit around rafters, joists, beams, water tanks, and awkward spaces.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Layers className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Versatile application</h3>
                      <p className="text-gray-700">Suitable for lofts, roof spaces, sloped ceilings, walls, floors or any area where space is constrained.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Lock className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Long‑term durability and minimal maintenance</h3>
                      <p className="text-gray-700">Multifoil does not settle or sag like some insulation products and remains effective over many years.</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-8">
                Because of these attributes, multifoil is particularly useful in loft conversions, small attic spaces, older buildings with limited roof/floor space, and renovation projects where modern energy‑efficiency is desired without sacrificing headroom or usability.
              </p>
            </div>

            {/* Our Multifoil Insulation Service */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Multifoil Insulation Service</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We offer a full-service solution for multifoil insulation — from survey and planning to installation, finishing, and advice. Here&apos;s what you&apos;ll get when you choose us:
              </p>

              {/* Step 1: Initial Survey */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <ClipboardCheck className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">1. Initial Survey & Suitability Assessment</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Inspect the loft, roof, wall or floor structure — including joists/rafters, existing insulation (if any), ventilation, roof pitch, water tanks, wiring, pipes, and obstructions.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Check the building&apos;s moisture/condensation history, ventilation, and structural requirements to determine whether multifoil alone or combined with other insulation is most suitable.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Determine the correct multifoil product depending on the space and insulation needs.</span>
                  </li>
                </ul>
              </div>

              {/* Step 2: Preparation */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 mb-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">2. Preparation & Surface / Ventilation Checks</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Clear and clean the area — remove old insulation if degraded or damp, debris, and ensure surfaces are dry and structurally sound.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ensure loft/roof ventilation paths remain clear; maintain required airspace if the multifoil needs air gaps to work properly.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Prepare safe access for installers — stable flooring or temporary boards, clear pathways, protection for wiring and fixtures, and secure hatch or ladder access.</span>
                  </li>
                </ul>
              </div>

              {/* Step 3: Professional Installation */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">3. Professional Installation of Multifoil Layers</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Roll out the multifoil between rafters, joists or along walls/floors — cutting and shaping as necessary to navigate beams, pipes, ducts, or irregular surfaces.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Fix securely, ensuring a snug fit with no gaps — overlap seams correctly and seal all joints where required.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Maintain recommended air‑gaps between foil surface and roof sheathing or floor/ceiling — important for reflective performance.</span>
                  </li>
                </ul>
              </div>

              {/* Step 4: Integration */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 mb-6">
                <div className="flex items-center mb-4">
                  <Layers className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">4. Integration with Other Insulation & Finishing</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>In some homes or loft conversions, multifoil is combined with mineral wool, PIR boards or rigid insulation for enhanced U‑value or acoustic performance.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>After installation, check that ventilation, vapour control, and structural fixings meet building standards — especially if loft is to be converted, boarded, or used as living/storage space.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Clean up installation debris and provide guidance on maintenance, ventilation checks, and any follow‑up inspections required.</span>
                  </li>
                </ul>
              </div>

              {/* Step 5: Final Inspection */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">5. Final Inspection & Customer Guidance</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Final check of insulation coverage, joint sealing, vapour barrier integrity, and ventilation.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Advise homeowner on maintaining airflow, moisture control, and inspection schedule.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Provide documentation detailing materials used, installation method, and maintenance recommendations.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* When Multifoil Insulation Is Especially Useful */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">When Multifoil Insulation Is Especially Useful</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  Ideal for:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Building2 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Loft spaces or attic areas where head‑height or roof space is limited.</span>
                  </div>
                  <div className="flex items-start">
                    <Building2 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Roof conversions or lofts to be used for storage or living but with minimal thickness allowance for insulation.</span>
                  </div>
                  <div className="flex items-start">
                    <Building2 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Irregular roof spaces with rafters, beams, pipes, wiring, and other obstructions.</span>
                  </div>
                  <div className="flex items-start">
                    <Building2 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Properties needing a slim insulation upgrade without sacrificing floor-to-ceiling height.</span>
                  </div>
                  <div className="flex items-start">
                    <Building2 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Owners wanting a vapour‑control layer and thermal insulation in one product.</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mr-3" />
                  Consider combining with other insulation when:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Strict U‑value or thermal performance is required.</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Acoustic insulation or heavy floor use is needed.</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Roof or room ventilation is poor — multifoil&apos;s performance depends on correct air‑gaps and ventilation.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits for Homeowners */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Benefits for Homeowners, Landlords & Property Managers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Effective insulation with minimal thickness — preserving headroom or floor space.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Year‑round thermal comfort — warmth in winter, cooler in summer, reduced heat loss and heat gain.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Moisture control and reduced condensation risk.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Lightweight, flexible product suitable for complex lofts, older buildings, or retrofit projects.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Potential for lower energy bills, improved energy efficiency, and reduced carbon footprint.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Suitability for loft conversions, storage lofts, or renovation where traditional bulky insulation may not be feasible.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Long-term durability — insulation that retains performance over decades.</span>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Multifoil Insulation</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>What is multifoil insulation and how is it different from mineral wool or foam boards?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Multifoil insulation consists of many thin layers of reflective foil and insulating cores. Unlike mineral wool or foam boards, multifoil reflects radiant heat, reduces conduction and convection, and achieves good thermal resistance with minimal thickness.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>Can multifoil insulation be installed in a regular loft under rafters or along floorboards?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. Multifoil is flexible and can be fitted between rafters, along walls, or under roof sheathing. It&apos;s especially suited for lofts or attic spaces with awkward shapes, limited height, or obstructions like beams, pipes or cables.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Does multifoil insulation require ventilation or air gaps to work properly?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. For optimal thermal performance, many multifoil products require air‑spaces and adequate ventilation. Without these, its reflective effectiveness and performance can be compromised.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>Is multifoil insulation a good standalone solution — or should it be combined with other insulation?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    It depends on your heating/insulation goals. For basic loft insulation or small thermal improvements in tight spaces, multifoil alone can be suitable. But for loft conversions, high U‑value requirements, or maximum thermal efficiency, combining multifoil with rigid boards, mineral wool or additional layers may give better results.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>Does multifoil insulation last long? Does it need maintenance?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes — multifoil insulation is durable, does not settle or degrade like some loose-fill or fibrous insulation types, and remains effective over decades when installed correctly. Maintenance is minimal: ensure ventilation remains clear, no moisture ingress, and periodic checks on vapour barrier integrity.
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
                  Ready to Install Multifoil Insulation?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional multifoil insulation installation today.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Experience space-saving, high-performance insulation with our expert multifoil installation service.
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
