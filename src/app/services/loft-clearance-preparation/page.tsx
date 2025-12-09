import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Trash2, Recycle, Shield, Sparkles, AlertTriangle, Home, Leaf, ClipboardCheck, FileText, ArrowRight, Users, Award, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Loft Clearance & Preparation | Loft Insulation Services UK",
  description: "Professional loft clearance and preparation services across the UK. Expert team ensures your loft is clean, accessible, and ready for insulation or boarding.",
  keywords: ["loft clearance", "loft preparation", "loft clearance services", "UK loft clearance", "loft decluttering", "loft waste removal"],
};

export default function LoftClearancePreparationPage() {
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
              Loft Clearance & Preparation
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Professional loft clearance and preparation service ensuring your loft is clean, accessible, and prepped for insulation or any further renovation.
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
                Proper loft clearance and preparation form the essential first step before any insulation, boarding, or loft conversion can begin. A clutter-free, safe loft not only allows insulation and boarding work to proceed smoothly — it also transforms the attic into usable space, improves safety, and reduces fire, damp, and pest risks.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Loft Insulation Services UK, our Loft Clearance & Preparation service ensures your loft is clean, accessible, and prepped for insulation or any further renovation. Whether it's a simple declutter or full clearance of decades of stored items, our team delivers a professional, efficient, and safe solution — helping you unlock the full potential of your loft space.
              </p>
            </div>

            {/* Why Loft Clearance & Preparation Matters */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Loft Clearance & Preparation Matters</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A loft is often used over many years as a dumping ground for old furniture, boxes of memorabilia, seasonal items, and redundant household goods. Over time, this accumulation leads to several problems:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Reduced usable space</strong> — clutter prevents effective use of the loft.</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Increased risks</strong> — overfilled lofts can become fire hazards, attract pests, accumulate dust, and even cause structural stress due to excessive weight.</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Problems for insulation or boarding</strong> — items stored on insulation or uneven surfaces can compress insulation material, reducing thermal efficiency and defeating the purpose of insulation.</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Poor ventilation and damp issues</strong> — clutter can block airflow and restrict ventilation paths, increasing the risk of condensation, damp, and mould.</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hence, before you install insulation or loft boarding, clearing and preparing the loft is crucial. It's not just about removing clutter — it's about ensuring structural safety, thermal efficiency, and a clean, usable space.
              </p>
            </div>

            {/* What Our Service Includes */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">What Our Loft Clearance & Preparation Service Includes</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We offer a comprehensive clearance and preparation package designed to make your loft ready for insulation, storage use or conversion. Here's what we handle:
              </p>

              {/* Full Clearance */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <Trash2 className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Full Clearance of Stored Items & Debris</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Removal of old furniture, boxes, storage containers, suitcases, redundant items.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Safe handling of bulky or awkward items, ensuring no damage to loft access points, flooring or ceilings.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Removal of insulation off-cuts, debris, broken items or rubbish accumulated over time.</span>
                  </li>
                </ul>
              </div>

              {/* Safe Disposal */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 mb-6">
                <div className="flex items-center mb-4">
                  <Recycle className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Safe Disposal & Recycling / Waste Management</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>We work with licensed waste carriers and disposal services — ensuring responsible, compliant disposal of waste.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Whenever possible, we recycle or donate reusable items (furniture, usable goods, etc.), reducing landfill waste and supporting sustainability.</span>
                  </li>
                </ul>
              </div>

              {/* Loft Preparation */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Loft Preparation for Insulation or Boarding</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Clearing all obstacles from access ways (stairs, ladders, hatches) to ensure safe and convenient entry/exit.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ensuring loft space is ready for board installation or insulation — removing unwanted old beams, unstable flooring, obsolete or dangerous items (old insulation, contaminated materials, damaged wood).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Basic checks for damp, structural safety, ventilation and pest issues — alerting homeowners if further repairs or treatments (e.g. damp-proofing, pest control) are needed before insulation.</span>
                  </li>
                </ul>
              </div>

              {/* Optional Add-ons */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Optional Add-ons: Pest / Damp Inspection & Loft Hygiene Clean-up</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Removal of rodent droppings, contaminated materials, old insulation wastes (which may degrade thermal performance or pose health risks).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Loft sweep, dust removal, and basic clean-up ensuring the loft is hygienic and ready for storage, boarding or insulation installation.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Benefits of Professional Loft Clearance & Preparation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <CheckCircle className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Maximised Loft Space & Versatility</h3>
                      <p className="text-gray-700">Clearing years of clutter instantly transforms a neglected loft into an empty, flexible area — ready for storage, insulation, boarding, or even conversion to a usable room (office, extra bedroom, storage area, etc.).</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Safer & Healthier Home Environment</h3>
                      <p className="text-gray-700">Removing accumulated rubbish, old insulation, mould, pest contamination, and hazardous waste significantly reduces health risks, fire danger, and structural weight stresses.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Leaf className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Better Insulation & Energy Efficiency Outcomes</h3>
                      <p className="text-gray-700">Insulation only works properly on clear, stable surfaces. By clearing and preparing the loft, you help ensure insulation is laid evenly at the correct depth — avoiding compressed insulation that loses effectiveness.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Sparkles className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Convenience & Time Savings</h3>
                      <p className="text-gray-700">What might take a homeowner days or weekends to sort, lift, sort, carry, and dispose of — is often completed by professionals in a matter of hours. No need to rent a van, lift heavy loads, or handle waste disposal logistics yourself.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Recycle className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Environmentally Responsible Disposal</h3>
                      <p className="text-gray-700">Our process emphasises recycling and donation — reducing waste sent to landfill, re-using what's still useful, and disposing responsibly under licensed systems.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Home className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Prepares Loft for Future Upgrades</h3>
                      <p className="text-gray-700">A cleared loft is ready not only for insulation — but also for boarding, storage systems, or even conversion into living space. It makes future upgrades easier, safer, and more cost-effective.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Who Should Consider */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who Should Consider Loft Clearance & Preparation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our Loft Clearance & Preparation service is ideal for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Homeowners whose lofts have accumulated many years of storage and clutter.</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">People planning to install loft insulation or upgrade existing insulation.</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Those looking to install loft boarding, raised loft floors, or use the loft as a storage / living space.</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Owners of older properties where loft spaces may have outdated insulation, damp, pest risk, or structural wear.</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Landlords or property managers preparing a property for letting or sale — a clean, safe loft adds value and credibility.</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're preparing for insulation, boarding, conversion, or simply clearing out decades of unwanted storage — our service helps you start with a clean slate.
              </p>
            </div>

            {/* How the Process Works */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">How the Process Works — What to Expect</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-primary-blue rounded-full p-3 mr-4 flex-shrink-0">
                      <ClipboardCheck className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1: Free Consultation & Survey</h3>
                      <p className="text-gray-700">We assess your loft's contents, access, condition (ventilation, structural state, potential hazards), and quote a clearance plan tailored to your needs.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-green-500 rounded-full p-3 mr-4 flex-shrink-0">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2: Pre-Clearance Advice (if required)</h3>
                      <p className="text-gray-700">We'll suggest any steps you should take before our team arrives — such as removing items you definitely want to keep, clearing fragile/valuable items, and ensuring access paths are clear.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-purple-500 rounded-full p-3 mr-4 flex-shrink-0">
                      <Trash2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3: Clearance & Sorting</h3>
                      <p className="text-gray-700">Our team removes stored items, sorts what's to go for disposal / recycling / donation / storage. We handle heavy lifting, safe removal, and secure transport out of the loft.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-orange-500 rounded-full p-3 mr-4 flex-shrink-0">
                      <Recycle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4: Safe Disposal & Recycling</h3>
                      <p className="text-gray-700">Waste and recyclable items are sent via licensed waste carriers; usable items are recycled or donated — in line with best environmental practices.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-teal-500 rounded-full p-3 mr-4 flex-shrink-0">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 5: Loft Clean-up & Final Inspection</h3>
                      <p className="text-gray-700">Loft is swept, dusted, and checked for damp, ventilation issues, structural problems, or hazards. You receive a clean, ready-to-use loft space.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-indigo-500 rounded-full p-3 mr-4 flex-shrink-0">
                      <ArrowRight className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 6: Optional Follow-up</h3>
                      <p className="text-gray-700">If going for insulation or loft boarding, we can proceed with those services immediately — making the transition seamless and hassle-free.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Choose Loft Insulation Services UK for Loft Clearance & Preparation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Experienced Professionals</h3>
                    <p className="text-gray-700">Our teams are trained for lofts of all sizes, with experience handling cluttered, old, or difficult-to-access attics.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">End-to-end Service</h3>
                    <p className="text-gray-700">From surveying to final waste disposal, we handle every step, saving you time and effort.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Health, Safety & Compliance</h3>
                    <p className="text-gray-700">We follow all regulatory standards for waste handling, disposal, and structural safety.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Leaf className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Eco-Conscious Approach</h3>
                    <p className="text-gray-700">Recycling, donation, and responsible disposal practices embedded in our service.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Sparkles className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Flexible & Efficient</h3>
                    <p className="text-gray-700">From small clearance jobs to full loft prepare-and-renovate projects, we tailor the service to your needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Home className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Set-Up for Future Home Improvements</h3>
                    <p className="text-gray-700">Whether you want storage, insulation, boarding, or conversion — we prepare your loft properly to support future work.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ready to Transform */}
            <div className="bg-gradient-to-r from-primary-blue/10 to-secondary-blue/10 rounded-3xl p-8 md:p-12 border-2 border-primary-blue/20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Loft?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                If your loft is cluttered, underused, or hasn't seen attention in years — it's time to consider clearance and preparation before investing in insulation, boarding, or conversion.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Contact Loft Insulation Services UK today for a free survey and tailored quote. Let us help you turn your attic from a dusty storage space into a clean, usable, safe, and energy-efficient part of your home.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Loft Clearance & Preparation (Top 5)</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>How long does a loft clearance take?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Most loft clearances take 2–4 hours, depending on clutter level and loft size.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>Do I need to remove anything before you arrive?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    You only need to remove items you want to keep immediately. Our team handles everything else.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Can you take away old or damaged insulation?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes, we safely remove old, damaged, or contaminated insulation as part of the clearance service.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>Will you clean the loft after clearing it?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes — every clearance includes sweeping, debris removal, and a basic hygiene clean.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>Do you prepare the loft for boarding as well?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Absolutely. We prepare lofts for insulation, boarding, or both, depending on your needs.
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
                  Ready to Clear and Prepare Your Loft?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional loft clearance and preparation services today.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Let us help you transform your loft into a clean, safe, and usable space ready for insulation, boarding, or conversion.
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
