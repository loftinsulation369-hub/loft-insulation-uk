import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, AlertTriangle, ClipboardCheck, Wrench, Lightbulb, Box, TrendingUp, Leaf, Users, ArrowRight, FileText, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Loft Boarding & Storage | Loft Insulation Services UK",
  description: "Professional loft boarding and storage services across the UK. Transform your loft into a safe, clean, and accessible storage space while maintaining insulation efficiency.",
  keywords: ["loft boarding", "loft storage", "loft boarding services", "UK loft boarding", "loft floor installation", "attic storage"],
};

export default function LoftBoardingStoragePage() {
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
              Loft Boarding & Storage
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Transform your loft into a safe, clean, and accessible storage space while maintaining insulation efficiency and ensuring safety compliance.
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
                Transforming your loft from a dusty, under-used attic into a safe, clean, and accessible storage space can add immense value and utility to your home. At Loft Insulation Services UK, our Loft Boarding & Storage service provides a complete solution — converting lofts into usable, stable storage areas while maintaining insulation efficiency and ensuring safety in compliance with standards.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you want to store seasonal items, suitcases, family memorabilia, or simply reclaim bedroom or garage space, our loft boarding service ensures a clean, level floor, safe access, and long-term durability. Paired with proper insulation (if needed), your loft becomes an efficient, energy-smart storage solution.
              </p>
            </div>

            {/* Why Loft Boarding & Storage Matters */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Loft Boarding & Storage Matters</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Many UK lofts remain empty or are used as haphazard dumping grounds — dusty boxes, unused items, or old furniture piled on un-boarded joists. Without proper boarding and storage preparation, lofts pose several risks:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Unsafe walking surfaces</strong> — stepping between joists can be dangerous.</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Poor insulation performance</strong> — foot traffic and storage may damage insulation or compress it, reducing thermal efficiency.</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Risk to stored items</strong> — dust, pests, dampness can damage anything stored loosely.</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Wasted space</strong> — unboarded lofts often remain under-utilised, despite offering useful storage area.</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Difficulty in future maintenance or upgrades</strong> — e.g. wiring, roof maintenance, insulation inspection become hazardous without a stable floor.</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Boarding the loft presents a cost-effective way to add usable square footage without major renovation. It improves safety, protects insulation integrity, preserves stored items, and unlocks wasted attic space.
              </p>
            </div>

            {/* Our Service Overview */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Loft Boarding & Storage Service Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We deliver a full-service loft boarding and storage conversion — from assessment to boarding, finishing, and optional extras such as lighting, storage organisation, or combined insulation. Our process is professional, safe, and tailored to your home's structure.
              </p>

              {/* Thorough Assessment */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <ClipboardCheck className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Thorough Loft Assessment & Planning</h3>
                </div>
                <p className="text-gray-700 mb-3 ml-9">Before any work begins, our team conducts a full inspection of your loft to assess:</p>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Joist layout, spacing, and structural integrity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Roof pitch, access hatch or ladder condition</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Existing insulation, wiring, water tanks, pipes, vents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Ventilation and airflow pathways</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Potential obstacles (e.g. beams, chimney breasts, restricted areas)</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 ml-9">
                  Based on this inspection, we provide a detailed plan and a transparent quote, recommending the appropriate boarding method, materials, and any preparatory or supplementary work (e.g. insulation upgrade, hatch improvement, ventilation checks).
                </p>
              </div>

              {/* Professional Installation */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 mb-6">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Professional Loft Boarding Installation</h3>
                </div>
                <p className="text-gray-700 mb-3 ml-9">Once the plan is agreed, our installers carry out the boarding work using high-quality, durable materials:</p>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Strong, moisture-resistant boarding panels or boards (e.g. flooring-grade plywood or oriented strand board)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Secure fixing to joists with proper fixings and fire-rated screws (where required)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Crossing joists when necessary to improve load-bearing capacity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Safe edging and walkway around obstructions (tanks, chimney, lighting)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Loft hatch improvement or installation (if needed) for safe access</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 ml-9">
                  The result: a solid, level floor across the loft, suitable for safe foot traffic, storage, and easy future access to roof space, wiring, or loft extras.
                </p>
              </div>

              {/* Insulation Protection */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Leaf className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Insulation Protection & Integration</h3>
                </div>
                <p className="text-gray-700 mb-3 ml-9">If your loft already has insulation — or if you plan to insulate later — we make sure the boarding installation does not compromise thermal performance:</p>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>We ensure insulation remains undisturbed or re-laid at the correct depth before boarding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Maintain ventilation paths and avoid blocking air bricks or soffit vents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Optionally combine loft board installation with insulation upgrade for maximum energy efficiency</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 ml-9">
                  This integrated approach ensures the loft remains warm and energy efficient while becoming a usable storage space.
                </p>
              </div>

              {/* Storage Solutions */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <Box className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Loft Storage Solutions & Optional Add-Ons</h3>
                </div>
                <p className="text-gray-700 mb-3 ml-9">Beyond basic boarding, we offer a range of add-on services to make your attic a functional storage area:</p>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Loft ladders or fixed staircase installation for safe and easy access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Lighting — fixed or battery-powered loft lights to improve usability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Reinforced boarding for heavy storage (e.g. suitcases, large boxes, seasonal equipment)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Storage organisation — optional shelving, storage racks, or labelled boxes for neat storage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Loft hatch insulation and sealing — to prevent heat loss and drafts from boarded loft</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 ml-9">
                  This makes your loft not just a floor — but a safe, organised, and energy-efficient storage room.
                </p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Benefits of Loft Boarding & Storage Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Home className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Unlock Underused Space</h3>
                      <p className="text-gray-700">Convert unused loft area into a practical storage zone — declutter living areas and free up valuable space.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Safe & Easy Access</h3>
                      <p className="text-gray-700">With a proper floor and safe access hatch or ladder, retrieving stored items is safer and more convenient.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Leaf className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Preserve Insulation, Thermal Efficiency & Energy Savings</h3>
                      <p className="text-gray-700">Boarding done right around insulation helps maintain home energy efficiency while offering storage.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Sparkles className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Long-Term Durability</h3>
                      <p className="text-gray-700">High-quality boarding and proper installation ensure the loft floor remains stable for decades — suitable for storage, occasional access, and maintenance.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Box className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Protect Stored Items</h3>
                      <p className="text-gray-700">Boarding safeguards stored items from dust, pests, damp, and temperature fluctuations.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <TrendingUp className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Adds Value & Practical Appeal to Property</h3>
                      <p className="text-gray-700">A boarded loft with usable storage — or potential for loft conversion — is a plus for resale or rental value.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 border-l-4 border-rose-500 hover:shadow-lg transition-shadow duration-300 md:col-span-2">
                  <div className="flex items-start mb-3">
                    <Lightbulb className="h-6 w-6 text-rose-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Cost-Effective Alternative to Garage or Extension</h3>
                      <p className="text-gray-700">Boarding loft offers extra space without the cost, planning or disruption of an extension — ideal for storage or holiday items.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Who Should Consider */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who Should Consider Loft Boarding & Storage?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our loft boarding service is ideal for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Homeowners with cluttered homes needing extra storage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Families storing seasonal items, decorations, sporting equipment, or memorabilia</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Property owners seeking long-term, dust-free storage for boxes, files, or suitcases</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">People planning future loft conversions — boarding offers safe access and a solid floor base</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Landlords wanting to offer tenants extra storage space or safely access roof maintenance</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether your loft is empty and unused, partially cluttered, or currently inaccessible — we tailor boarding and storage solutions to match.
              </p>
            </div>

            {/* How the Process Works */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">How the Process Works — Step by Step</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-primary-blue rounded-full p-3 mr-4 flex-shrink-0">
                      <ClipboardCheck className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1: Free Loft Survey & Assessment</h3>
                      <p className="text-gray-700">Our team visits your home to inspect loft structure, access point, insulation condition, and storage needs. We then provide a detailed quote and plan.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-green-500 rounded-full p-3 mr-4 flex-shrink-0">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2: Pre-installation Preparations</h3>
                      <p className="text-gray-700">Before boarding, we ensure the loft is clear of obstacles; if needed, we recommend or carry out loft clearance and basic clean-up.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-purple-500 rounded-full p-3 mr-4 flex-shrink-0">
                      <Wrench className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3: Boarding Installation</h3>
                      <p className="text-gray-700">We fit boarding panels securely onto joists, ensuring safe load-bearing capacity, ventilation clearance, and even floor coverage. Loft hatch or ladder adjustments are made if needed.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-orange-500 rounded-full p-3 mr-4 flex-shrink-0">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4: Optional Enhancements</h3>
                      <p className="text-gray-700">If requested, we install loft ladders/stairs, lighting, storage racks or shelving, ventilation check, or combine with insulation upgrade.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-teal-500 rounded-full p-3 mr-4 flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 5: Final Inspection & Handover</h3>
                      <p className="text-gray-700">We inspect the boarded loft for stability, safety, ventilation, and ease of access. We walk you through using the space safely, and provide guidance for storage loads and loft maintenance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Loft Boarding & Storage</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>How long does loft boarding take?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    For a standard domestic loft, boarding typically takes half a day to a full day, depending on loft size, complexity (e.g., water tanks, obstructions), and whether optional extras (ladders, lighting) are included.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>Can I store heavy items or furniture on a boarded loft?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes — provided the boarding is installed correctly. We use strong, moisture-resistant boards and correct fixings to ensure the floor supports typical loft storage loads (suitcases, boxes, seasonal items). For very heavy loads, we can reinforce the floor or advise safe load limits.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Will boarding affect my home's heating and insulation?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Not if done properly. We ensure existing insulation remains intact and correctly positioned. If insulation is lacking, we can combine boarding with insulation upgrade, preserving or improving thermal efficiency.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>Do I need a new ladder or stair for loft access?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Not always. We can work with your existing loft hatch and ladder if safe. However, for frequent access or heavy storage, we recommend upgrading to a proper loft ladder or fixed stairs — which we can supply and fit as part of the service.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>Can loft boarding be reversed if I want to convert the loft later?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. Our installation is done in a way that allows future loft conversions or maintenance access. Boards can be removed if required, and access to beams, wiring, or roof structure remains possible.
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
                  Ready to Transform Your Loft into Usable Storage?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional loft boarding and storage services today.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Let us help you unlock the full potential of your loft space with safe, durable boarding that maintains energy efficiency.
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
