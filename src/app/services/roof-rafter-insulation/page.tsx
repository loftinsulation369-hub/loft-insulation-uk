import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, AlertTriangle, ClipboardCheck, Wrench, TrendingDown, Leaf, Droplets, Users, Award, ArrowRight, FileText, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Roof Rafter Insulation | Loft Insulation Services UK",
  description: "Professional roof rafter insulation services across the UK. Transform your roof structure with energy-efficient insulation for loft conversions and improved thermal performance.",
  keywords: ["roof rafter insulation", "rafter insulation", "roof insulation", "UK roof insulation", "loft conversion insulation", "pitched roof insulation"],
};

export default function RoofRafterInsulationPage() {
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
              Roof Rafter Insulation
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Transform your roof structure with professional rafter insulation for improved energy efficiency, indoor comfort, and home longevity.
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
                Transforming your roof structure with professional rafter insulation can deliver significant improvements in energy efficiency, indoor comfort, and home longevity. At Loft Insulation Services UK, our Roof Rafter Insulation service is designed to protect your home from heat loss, reduce condensation risks, and ensure that your roof structure supports insulation in a safe and effective way. Whether you&apos;re converting your loft into a living space or simply safeguarding your roof against cold and damp, our rafter insulation solutions offer long-term performance and peace of mind.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Roof-rafter insulation is particularly beneficial for loft conversions, pitched roofs, or homes where standard loft-floor insulation won&apos;t give the right thermal performance. By insulating directly between or under the rafters, you create a thermal envelope that helps regulate indoor temperature, prevents heat from escaping through the roof, and reduces the burden on your heating system. Our experienced team uses modern insulation materials and installation methods that comply with UK building standards, giving you a safe, efficient and durable solution.
              </p>
            </div>

            {/* Why Roof Rafter Insulation Is Important */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Roof Rafter Insulation Is Important</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Standard loft-floor insulation works well when the loft is left unused — but when you want to transform the space into a habitable room or store belongings under the roof, rafter insulation becomes essential. Here&apos;s why:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Creates a continuous thermal barrier</strong> — insulating the roof itself prevents heat loss through the roof surface, not just through the loft floor.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Suitable for loft conversions or occupied attic spaces</strong> — ensures the roof space becomes part of the heated envelope of the home.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Protects roof timbers and structure</strong> — helps maintain a stable temperature and reduces condensation, prolonging the life of rafters, timber beams and roof materials.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Improves energy efficiency and comfort</strong> — reduces draughts, hot spots and heat loss, making upper rooms more comfortable in winter and cooler in summer.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Optimizes moisture control and condensation prevention</strong> — when combined with proper ventilation, rafter insulation keeps homes healthier and prevents damp or mould.</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                For homeowners looking to maximize their home&apos;s value, comfort, and energy performance, rafter insulation is often the step that makes an attic or roof-ready for conversion or long-term use.
              </p>
            </div>

            {/* Our Service Overview */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Roof Rafter Insulation Service</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We provide a full-service package tailored to your roof type, property structure, and desired outcome. From assessment and preparation to installation and finishing — we handle it all.
              </p>

              {/* Comprehensive Inspection */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <ClipboardCheck className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Comprehensive Roof Inspection & Planning</h3>
                </div>
                <p className="text-gray-700 mb-3 ml-9">Before any work begins, our team inspects your roof structure thoroughly:</p>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Check rafter spacing, roof pitch, and structural integrity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Evaluate existing roof timbers, beams, and any previous insulation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Inspect ventilation paths, vents, and cold-water tanks (if present)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Identify obstructions: electrical cables, pipework, lighting, chimney stacks, roof vents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Determine the most suitable insulation method and materials based on roof type and usage</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 ml-9">
                  Based on the assessment, we provide a detailed plan and a transparent quotation so you know exactly what work will be done and how.
                </p>
              </div>

              {/* Selection of Materials */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 mb-6">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Selection of High-Quality Insulation Materials</h3>
                </div>
                <p className="text-gray-700 mb-3 ml-9">Depending on your roof structure and needs, we use one or a combination of the following insulation materials:</p>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Rigid or semi-rigid insulation boards</strong> — ideal for insulating between rafters where space is limited or where air circulation must be preserved.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Breathable insulation rolls or batts</strong> — used for flexible installations, especially in older roofs or where ventilation is critical.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Spray foam insulation / insulated plasterboard systems</strong> — for highly energy-efficient conversions or where maximum thermal performance is required (subject to structural and ventilation review).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Vapour control layers (VCL) and membrane installation</strong> — to prevent moisture ingress and manage condensation risk, essential for roof-rafter insulation.</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 ml-9">
                  We help you choose the best material for your home&apos;s roof type, whether it&apos;s a simple pitched roof, a dormer, or a complex attic conversion.
                </p>
              </div>

              {/* Professional Installation */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Professional Installation of Rafter Insulation</h3>
                </div>
                <p className="text-gray-700 mb-3 ml-9">During the installation phase, we ensure work is carried out safely, cleanly, and to high standards:</p>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Install insulation carefully between or under rafters, ensuring full coverage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Fit vapour control layers and membranes where required for moisture management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Maintain or re-establish proper roof ventilation — ensuring soffit vents, ridge vents, and any air gaps remain effective</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Work around existing roof elements such as chimneys, roof windows, beams, wiring, and water tanks — without compromising insulation continuity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Check and seal all joints and gaps to prevent thermal bridging and air leaks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ensure structural safety and compliance with building regulations, particularly if the loft space is intended for habitation</span>
                  </li>
                </ul>
              </div>

              {/* Post-Installation Quality Check */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Post-Installation Quality Check & Finishing</h3>
                </div>
                <p className="text-gray-700 mb-3 ml-9">Once insulation is installed, we perform a detailed inspection to ensure:</p>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Insulation is evenly fitted and at correct thickness for optimal thermal efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Vapour control layer is correctly installed, sealed, and taped at joints</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ventilation paths are clear and functional</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Any modifications (e.g. raising roof windows, repositioning tanks) are properly sealed and safe</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Clean-up of the work area, removal of waste, and safe disposal of any old materials</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 ml-9">
                  Where required, we can also offer finishing options such as plasterboard installation, loft boarding, or loft usage readiness — making the space immediately usable.
                </p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Benefits of Choosing Roof Rafter Insulation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <TrendingDown className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Long-Term Energy Savings & Reduced Heating Costs</h3>
                      <p className="text-gray-700">With a properly insulated roof, homes lose far less heat — reducing demand on boilers or heating systems and lowering energy bills.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Home className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Increased Comfort and Consistent Indoor Temperatures</h3>
                      <p className="text-gray-700">Rooms under the roof remain warm in winter and cooler in summer, without cold spots or drafts.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Droplets className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Prevents Condensation, Damp, and Mould Risk</h3>
                      <p className="text-gray-700">Combined with correct ventilation and vapour control, roof insulation helps maintain healthy indoor air and protects roof timbers.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Sparkles className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Suitable for Loft Conversions & Habitable Roof Spaces</h3>
                      <p className="text-gray-700">Rafter insulation makes attics and lofts viable — whether you plan to use them as bedrooms, offices, or storage rooms.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Award className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Adds Value to Your Property</h3>
                      <p className="text-gray-700">A properly insulated and habitable loft is a strong selling point; many buyers value extended usable space and improved energy performance.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Long-Term Durability & Low Maintenance</h3>
                      <p className="text-gray-700">Once installed correctly, rafter insulation requires no regular maintenance while continuing to deliver comfort and efficiency for decades.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Who Should Consider */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who Should Consider Roof Rafter Insulation?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Homeowners planning loft conversions or attic bedrooms</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">People with uninsulated pitched roofs or lofts used as living space</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Those experiencing high heating bills, cold roof rooms, or draughts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Owners of older properties where roof timbers and insulation are outdated</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Anyone wanting to improve energy efficiency and reduce carbon footprint</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">People seeking to make their loft a usable, comfortable, and safe space year-round</span>
                </div>
              </div>
            </div>

            {/* Step-by-Step Process */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Roof Rafter Insulation – Step-by-Step Process</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-primary-blue rounded-full p-3 mr-4 flex-shrink-0">
                      <ClipboardCheck className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1: Initial Roof Survey & Consultation</h3>
                      <p className="text-gray-700">We inspect the roof, assess structure and ventilation, and provide a clear quote with recommended insulation type.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-green-500 rounded-full p-3 mr-4 flex-shrink-0">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2: Preparation & Hazard Checks</h3>
                      <p className="text-gray-700">We clear the loft area, ensure safe access, identify obstructions (pipes, wiring, tanks), and mark out rafter layout.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-purple-500 rounded-full p-3 mr-4 flex-shrink-0">
                      <Wrench className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3: Installation of Insulation & Vapour Control Layer</h3>
                      <p className="text-gray-700">Insulation is fitted between or under rafters; membranes and vapour-control layers are installed for moisture protection.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-orange-500 rounded-full p-3 mr-4 flex-shrink-0">
                      <Droplets className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4: Ventilation & Sealing Checks</h3>
                      <p className="text-gray-700">Ensure soffit/ridge vents are unobstructed, roof vents are functioning, and all joints are sealed properly to avoid drafts or condensation.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-teal-500 rounded-full p-3 mr-4 flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 5: Final Inspection & Clean-Up</h3>
                      <p className="text-gray-700">We perform quality assurance checks (thickness, coverage, ventilation), clean up tools/waste, and hand over the space ready for use or further finishing (boarding, plastering, storage).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Roof Rafter Insulation</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>When should I choose roof rafter insulation instead of loft floor insulation?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Choose rafter insulation if you plan to use the loft as a living area (bedroom, office, storage), want to heat the space, or if your loft floor insulation isn&apos;t sufficient for thermal comfort. It&apos;s ideal for loft conversions and inhabited attic spaces.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>Will rafter insulation cause condensation problems or mold?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Not when installed properly. Our process includes a vapour-control layer and ensures proper roof ventilation (soffit vents, ridge vents, air gaps). This prevents condensation build-up and protects roof timbers from damp or mould.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>What materials are used for rafter insulation, and is there an energy-efficient option?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    We typically use rigid insulation boards, breathable insulation rolls, or vapour-controlled systems. For maximum efficiency and thermal performance — particularly in loft conversions — rigid boards or insulation + membrane systems offer excellent long-term energy savings.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>Does roof rafter insulation affect storage or loft use?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    It depends on how the roof space is used. Rafter insulation by itself doesn&apos;t create a floor — but once insulated, we can combine it with loft boarding or flooring if you wish to use the space for storage or as a living area.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>How long does roof rafter insulation last, and how do I maintain it?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    With proper installation, roof rafter insulation lasts for decades and requires minimal maintenance. As long as ventilation remains clear and the roof structure is intact, the insulation continues to perform effectively without extra upkeep.
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
                  Ready to Insulate Your Roof Rafters?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional roof rafter insulation services today.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Let us help you improve your home&apos;s energy efficiency, comfort, and value with expert rafter insulation installation.
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
