import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, AlertTriangle, ClipboardCheck, Wrench, TrendingDown, Leaf, Droplets, Trash2, Recycle, RefreshCw, Users, HelpCircle, Clock, DollarSign, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "Insulation Removal & Replacement | Loft Insulation Services UK",
  description: "Professional insulation removal and replacement services across the UK. Safely remove old or damaged insulation and replace with modern, high-performance materials.",
  keywords: ["insulation removal", "insulation replacement", "insulation removal services", "UK insulation removal", "old insulation removal", "insulation upgrade"],
};

export default function InsulationRemovalReplacementPage() {
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
              Insulation Removal & Replacement
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Safely remove old or compromised insulation and replace it with modern, high-performance insulation suited to your home&apos;s structure and future use.
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
                When insulation becomes degraded, damaged or simply outdated — or if a loft or roof conversion is planned — simply layering new material over the old is not enough. For optimum safety, performance, and long-term energy efficiency, a professional insulation removal and replacement service is essential. At Loft Insulation Services UK, we provide a full-service solution: safely removing old or compromised insulation and replacing it with modern, high-performance insulation suited to your home&apos;s structure and future use.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you&apos;re dealing with water-damaged insulation, compressed material reducing thermal performance, pest-contaminated insulation, or simply looking to upgrade to a more efficient system — our team ensures a clean, safe, and effective installation from start to finish.
              </p>
            </div>

            {/* Why Insulation Removal & Replacement Might Be Necessary */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Insulation Removal & Replacement Might Be Necessary</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Over time, insulation can degrade or become compromised for several reasons:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Moisture, leaks or condensation</strong> can reduce effectiveness or cause mould and damp</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Old insulation materials</strong> may have settled, compressed or shifted — creating cold spots and reducing thermal performance</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Pest infestations</strong> (rodents, birds, insects) may contaminate insulation — posing health risks and damaging material</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Outdated insulation</strong> may fail to meet modern building regulations, fire standards, or minimum thermal performance levels</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Loft conversions</strong> — if you&apos;re converting a loft, roof, or attic into a habitable room — old insulation may block ventilation, be insufficient, or hinder the structural changes required</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Without removal, simply placing new insulation on top of compromised material may trap moisture, reduce ventilation, and compromise the entire build-up — resulting in poor energy efficiency, potential damp or mould problems, and even structural risk.
              </p>
            </div>

            {/* Our Service Overview */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Insulation Removal & Replacement Service Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We offer a comprehensive, end-to-end service: from inspection and risk-assessment to debris removal, safe disposal, and high-quality replacement. Our goal: deliver clean, efficient, code-compliant insulation that delivers lasting energy savings, improved comfort, and peace of mind.
              </p>

              {/* Step 1: Free Inspection */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <ClipboardCheck className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">1. Free Inspection & Risk Assessment</h3>
                </div>
                <p className="text-gray-700 mb-3 ml-9">Before any work begins, we carry out a detailed inspection of your loft/roof space:</p>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Check existing insulation material: type, condition, thickness, signs of damp, mould, compression, infestation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Inspect roof timbers, joists, ventilation, and any water tanks / pipes / wiring that may affect insulation integrity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Identify any structural issues, damp ingress, leaks, or pest trails that require attention before re-insulation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Evaluate access, safety, and potential hazards (loft hatch, flooring stability, debris risk, protective gear needed)</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 ml-9">
                  Based on this assessment, we provide a clear, no-obligation quote, detailing the recommended removal method and replacement suggestions.
                </p>
              </div>

              {/* Step 2: Safe Removal */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 mb-6">
                <div className="flex items-center mb-4">
                  <Trash2 className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">2. Safe Removal & Disposal of Old Insulation</h3>
                </div>
                <p className="text-gray-700 mb-3 ml-9">Old insulation removal must be handled carefully — especially if damp, mouldy, contaminated or animal-infested. Our professional team ensures:</p>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Use of protective clothing, masks, gloves, and safe handling procedures for contaminated insulation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Removal of all debris, old insulation fibres, contaminant remnants (rodent droppings, damp insulation, mouldy material)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Safe disposal via licensed waste carriers — ensuring environmentally compliant handling of waste insulation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Clearing of dust, fibres, and debris to leave the loft or attic clean and safe</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 ml-9">
                  We don&apos;t just remove — we restore the space to a clean, safe baseline, ready for re-insulation or renovation.
                </p>
              </div>

              {/* Step 3: Preparation */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">3. Loft / Roof Preparation & Ventilation Check</h3>
                </div>
                <p className="text-gray-700 mb-3 ml-9">Before installing new insulation, we prepare the loft/roof structure to guarantee proper performance and safety:</p>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Inspect and repair any damaged joists, beams, or roof timbers if necessary</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ensure ventilation paths (soffit vents, roof vents, eaves, air gaps) are clear and functional — vital for preventing condensation and damp</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Confirm water tanks, pipes, wiring or other installations are safe and insulated appropriately where required</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Install or replace vapour control layers (VCL) or membranes if needed to control moisture ingress for new insulation</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 ml-9">
                  Preparation ensures that your new insulation works effectively over the long term and doesn&apos;t lead to future damp, condensation, or structural problems.
                </p>
              </div>

              {/* Step 4: Replacement */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 mb-6">
                <div className="flex items-center mb-4">
                  <RefreshCw className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">4. High-Quality Insulation Replacement</h3>
                </div>
                <p className="text-gray-700 mb-3 ml-9">We install modern insulation tailored to your home&apos;s structure, use, and energy efficiency goals. Options include:</p>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Mineral wool rolls or batts</strong> — widely used and cost-effective for loft floors or between joists</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Loose-fill or blown-fibre insulation</strong> — ideal for irregular or hard-to-reach loft spaces, ensuring uniform coverage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Rigid insulation boards or foam-based boards</strong> — helpful if loft conversion or enhanced thermal performance is planned</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Vapour control membranes and proper ventilation</strong> for roof insulation to manage condensation risk — essential if insulation is near roof structure</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 ml-9">
                  Our installations are performed to the correct depth and density recommended for UK homes, ensuring maximum thermal performance, energy savings, and building regulation compliance.
                </p>
              </div>

              {/* Step 5: Final Inspection */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">5. Final Inspection, Clean-up & Handover</h3>
                </div>
                <p className="text-gray-700 mb-3 ml-9">Once installation is complete, we carry out a thorough inspection and house-keeping process:</p>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Check insulation coverage, thickness, and ensure no gaps or compressions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Confirm that ventilation, airflow, and vapour control layers are correctly installed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Clean up all work debris, dust, and leftover waste</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Provide homeowners with a report on the work done, guidance on maintenance, ventilation requirements, and how to optimise heating efficiency going forward</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 ml-9">
                  You receive a safe, clean, well-insulated space — ready for storage, conversion, or energy-efficient living.
                </p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Benefits of Professional Insulation Removal & Replacement</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <TrendingDown className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Restore Thermal Efficiency & Reduce Energy Bills</h3>
                      <p className="text-gray-700">New insulation performs at optimal levels — trapping heat, reducing heating demand, and cutting bills throughout the year.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Droplets className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Improve Indoor Air Quality & Hygiene</h3>
                      <p className="text-gray-700">Removal of contaminated or pest-ridden insulation, followed by clean replacement, reduces dust, allergens, damp risk, and improves living conditions.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Comply with Safety & Building Standards</h3>
                      <p className="text-gray-700">Modern insulation materials meet current fire, vapour control, and energy-efficiency regulations — giving you legal compliance and long-term reliability.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <AlertTriangle className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Prevent Future Damp, Mould & Structural Damage</h3>
                      <p className="text-gray-700">Proper ventilation, moisture control, and correct installation reduce the risk of condensation, rot, and long-term damage to roof timbers and structures.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <DollarSign className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Better Value for Money</h3>
                      <p className="text-gray-700">A one-time professional removal and replacement often delivers better long-term savings than repeated patchwork or partial insulation — especially in older homes.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Home className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Prepare Loft or Roof Space for Conversion or Use</h3>
                      <p className="text-gray-700">Once insulated properly, lofts or attics become suitable for storage, loft boarding, or even conversion to habitable rooms — increasing usable space and property value.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Who Should Consider */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who Should Consider Insulation Removal & Replacement?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Homeowners with old, water-damaged, or compressed insulation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Properties experiencing cold spots, damp, condensation, or mould in loft or upper rooms</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">People noticing high heating bills despite existing insulation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Those planning loft conversions, roof renovations, dormer additions, or increased roof usage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Houses with signs of pest infestation, rodent droppings, or animal nests in loft insulation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Landlords or property managers updating older properties to meet safety and energy-efficiency standards</span>
                </div>
              </div>
            </div>

            {/* Cost, Timeframe & What You Should Know */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Cost, Timeframe & What You Should Know</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Cost and time</strong> depend on loft/roof size, condition of old insulation, accessibility, type of new insulation, and extent of structural or ventilation work required.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Typical schedule:</strong> inspection and removal in one day; installation and finishing may require one additional day depending on scope.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Payback:</strong> New, efficient insulation typically reduces heating bills significantly — many homeowners begin to see savings in the first winter after installation.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Maintenance:</strong> Once done properly, insulation requires minimal maintenance — just periodic checks of loft ventilation, roof integrity, and no disruption of insulation layers.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Insulation Removal & Replacement (Top 5)</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>When should I consider removing my existing insulation?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    If you notice damp, mould, water damage, cold spots, compressed or flattened insulation, pest contamination, or you plan a loft conversion — these are all signs you should replace old insulation.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>Is removal dangerous or disruptive?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Not when done professionally. Our team uses protective gear and safe procedures — removing, bagging, and disposing old insulation properly while minimizing dust, debris, and disruption inside the home.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Can I install new insulation on top of old insulation?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    It&apos;s generally not recommended. Old, damaged, damp or compressed insulation can compromise the performance of the new layer, trap moisture, and reduce ventilation. Full removal ensures a proper base for new insulation.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>How long does the entire removal and replacement process take?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    For an average domestic loft or attic, the full process — inspection, removal, cleaning, and new insulation installation — typically takes 1–2 days. Larger or more complicated roofs may take longer.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>Will new insulation improve my home&apos;s energy efficiency significantly?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. Properly installed insulation reduces heat loss, improves thermal comfort, and reduces heating demand — leading to lower energy bills and improved energy efficiency throughout the home.
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
                  Ready to Remove and Replace Your Insulation?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional insulation removal and replacement services today.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Let us help you upgrade to modern, high-performance insulation that delivers lasting energy savings and improved comfort.
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
