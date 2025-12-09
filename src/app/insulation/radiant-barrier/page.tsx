import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, ClipboardCheck, Wrench, TrendingDown, Leaf, Droplets, RefreshCw, Zap, Award, Package, AlertTriangle, Thermometer, Wind, Lock, Layers, Sun, HelpCircle, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Radiant Barrier Insulation | Loft Insulation Services UK",
  description: "Professional radiant barrier insulation installation across the UK. Reflective system designed to reduce heat transfer via radiation and enhance thermal performance.",
  keywords: ["radiant barrier", "radiant barrier insulation", "reflective insulation", "UK radiant barrier", "foil insulation", "attic heat barrier"],
};

export default function RadiantBarrierPage() {
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
              Radiant Barrier Insulation
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Reflective system designed to reduce heat transfer via radiation and enhance thermal performance
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
                Radiant‑barrier insulation is a reflective system designed to reduce heat transfer via radiation — a smart supplement to traditional insulation methods. At Loft Insulation Services UK, our radiant barrier solutions help enhance comfort, lower energy costs, and improve overall building thermal performance — especially where heat gain through the roof or attic is a concern.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you&apos;re renovating your loft, upgrading roof insulation, or seeking better home comfort and energy efficiency, radiant barrier insulation can be a useful addition to your insulation strategy.
              </p>
            </div>

            {/* Why Choose Radiant Barrier Insulation */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Radiant Barrier Insulation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Radiant barriers differ from standard insulation by targeting radiant heat transfer (heat travelling as infrared radiation), not just conduction or convection. This offers several benefits:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Sun className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Reflects radiant heat</h3>
                      <p className="text-gray-700">A radiant barrier uses a highly reflective surface to bounce radiant heat away, reducing the amount of heat entering from a hot roof or attic into living spaces.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Thermometer className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Reduces summer heat gain & cooling load</h3>
                      <p className="text-gray-700">For homes with roofs or attics that heat up under sun, radiant barriers help cut down attic heat build‑up — reducing strain on cooling systems and helping keep indoor temperatures more stable during warmer months.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Zap className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Improves overall thermal performance when combined with conventional insulation</h3>
                      <p className="text-gray-700">Since radiant barriers address radiant heat flow and other insulation materials tackle conductive/convection heat flow, combining both often yields better results than using either alone.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Home className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Lightweight and adaptable installation</h3>
                      <p className="text-gray-700">Radiant barriers are relatively easy to install, making them a practical choice even in lofts or roofs with limited space or complex geometry.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <TrendingDown className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Potential energy savings and comfort boost</h3>
                      <p className="text-gray-700">By reducing heat gain — especially in hot or sunny conditions — radiant barriers can lower cooling demand, improve occupant comfort, and contribute to a more consistent indoor climate.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Radiant Barrier Insulation Service */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Radiant Barrier Insulation Service</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We provide a full-service radiant barrier insulation installation — from assessment and planning to installation and final inspection. Here&apos;s how we deliver it:
              </p>

              {/* Step 1: Initial Survey */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <ClipboardCheck className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">1. Initial Building & Attic Survey</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Inspect roof/loft structure, ventilation, existing insulation, and temperature/heat‑gain exposure.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Determine whether a radiant barrier is suitable for your property (attic/roof orientation, roof materials, ventilation, and local climate impact).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Provide tailored recommendations — whether radiant barrier alone is sufficient or if it should be used alongside traditional insulation for best results.</span>
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
                    <span>Clear attic or loft space of debris, ensure safe access, and protect electrical wiring, vents, water tanks, and other roof fixtures.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ensure that installing a reflective surface will not block or compromise ventilation pathways — vital for thermal stability and moisture control.</span>
                  </li>
                </ul>
              </div>

              {/* Step 3: Installation */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">3. Installation of Reflective Barrier</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Staple or fix foil‑faced radiant barrier material between roof rafters, under roofing sheathing, or on attic surfaces — depending on roof structure and suitability.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ensure the reflective surface faces an airspace (not sandwiched solid against other materials), which is needed for the barrier to function effectively.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Seal or tape seams and ensure no gaps or tears to maintain continuous reflective coverage.</span>
                  </li>
                </ul>
              </div>

              {/* Step 4: Integration */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 mb-6">
                <div className="flex items-center mb-4">
                  <Layers className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">4. Integration with Other Insulation (if needed)</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Where heat conduction or cold retention is a concern (e.g., in winter), combine radiant barrier with conventional insulation (batts, foam, loose‑fill, etc.) to handle different modes of heat transfer.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Check for proper ventilation, moisture control, and avoid trapping damp or condensation between reflective surfaces and insulation.</span>
                  </li>
                </ul>
              </div>

              {/* Step 5: Final Inspection */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">5. Final Inspection & Maintenance Advice</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Confirm reflective coverage, correct installation, and air‑space integrity for optimal performance.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Inspect attic ventilation, moisture levels, and ensure no obstruction to airflow.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Provide guidance on maintenance — e.g., avoid dust accumulation on reflective surfaces (dust reduces reflectivity), check vents, and periodically inspect for tears or damage.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Where Radiant Barriers Are Most Effective */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Where Radiant Barriers Are Most Effective — and When They Help Less</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  Best suited when:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">The roof/attic receives high solar radiation (sunny or warm climates, strong roof heat gain)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Cooling demand is a major factor (hot summers, frequent roof/attic overheating)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Roof or attic insulation can be supplemented with reflective barrier to manage radiant heat entry</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Ventilation is adequate to avoid moisture build‑up under the barrier</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <XCircle className="h-6 w-6 text-orange-600 mr-3" />
                  Less effective when:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">The climate is cold and heating, rather than cooling, is the primary concern — radiant barriers don&apos;t slow conductive or convective heat loss.</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">The reflective surface becomes dusty — dust or debris drastically reduces effectiveness.</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Ventilation is poor or insulation layers block airflow — may lead to moisture, condensation, or reduced performance over time.</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Because of these limitations, radiant barrier insulation often works best as part of a combined insulation solution rather than as a standalone fix.
              </p>
            </div>

            {/* Benefits for Homeowners */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Benefits for Homeowners, Landlords & Property Owners</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By opting for radiant‑barrier insulation via Loft Insulation Services UK, you can enjoy:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Lower cooling costs and reduced summer energy bills</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Improved indoor comfort — cooler attic/roof spaces, reduced heat gain, more stable room temperatures</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Reduced strain on HVAC / cooling systems, possibly prolonging their lifespan</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Complementary insulation upgrades — boosting overall thermal efficiency when combined with conventional insulation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">A lightweight, low‑disruption solution — suitable for lofts, roofs, or attic renovations without major structural changes</span>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Radiant Barrier Insulation</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>Does a radiant barrier replace traditional insulation?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    No — radiant barriers reflect radiant heat, but do not slow conduction or convection heat transfer. For full thermal protection (heat retention in winter, heat exclusion in summer), we recommend pairing radiant barrier with traditional insulation.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>In which climates does a radiant barrier make most sense?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Radiant barriers are most effective in warm or sunny climates where roof/attic heat gain is high. In colder climates, standard insulation (which slows conductive/convective heat loss) tends to deliver more benefit.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Will a radiant barrier affect ventilation or cause moisture issues?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Not if installed properly. It&apos;s important to maintain airspace and ensure ventilation paths remain clear. Poor installation — e.g., blocking vents or compressing the barrier against solid surfaces — can impair performance or risk condensation/moisture.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>Can I install a radiant barrier myself during renovation?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes — if you follow correct installation guidelines: reflective surface facing an airspace, avoid blocking vents, seal seams, avoid contact with bare wiring, and maintain clearance for airflow. Professional installation is recommended for optimal results.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>How long does a radiant barrier last and does it need maintenance?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Radiant barriers are durable and generally last many years. Periodically check that vents and airspaces remain clear, and that the reflective surface is dust-free and undamaged — as dust or damage reduces effectiveness.
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
                  Ready to Install Radiant Barrier Insulation?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional radiant barrier insulation installation today.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Enhance your home&apos;s thermal performance with our expert radiant barrier solutions.
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
