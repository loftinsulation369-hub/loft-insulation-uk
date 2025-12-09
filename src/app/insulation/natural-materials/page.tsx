import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, ClipboardCheck, Wrench, TrendingDown, Leaf, Droplets, RefreshCw, Zap, Award, Package, AlertTriangle, Thermometer, Wind, Lock, Layers, Sun, Ruler, Recycle, HelpCircle, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Natural Materials Insulation | Loft Insulation Services UK",
  description: "Professional natural materials insulation installation across the UK. Eco-friendly, sustainable insulation solutions including sheep's wool, wood fibre, hemp, and cellulose.",
  keywords: ["natural insulation", "sheep's wool insulation", "wood fibre insulation", "hemp insulation", "eco-friendly insulation", "sustainable insulation UK"],
};

export default function NaturalMaterialsPage() {
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
              Natural Materials Insulation
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Eco-friendly, sustainable, and health-conscious insulation solutions for your home
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
                Natural‑material insulation offers an eco‑friendly, sustainable, and health‑conscious alternative to synthetic insulation types. At Loft Insulation Services UK, our Natural Materials Insulation service provides a choice of renewable, breathable insulation solutions — ideal for lofts, roofs, walls, floors, and heritage or eco‑conscious homes. Whether you build new, renovate, or upgrade an existing property, natural insulation helps you reduce carbon footprint, improve indoor air quality, and enjoy long‑term comfort and durability.
              </p>
            </div>

            {/* Why Choose Natural Insulation Materials */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Natural Insulation Materials</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Natural insulation stands out because of a number of unique benefits that synthetic alternatives don't always offer. Here's what makes natural materials special:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Leaf className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability & environmental friendliness</h3>
                      <p className="text-gray-700">Natural materials are renewable, often biodegradable or recyclable, and typically have far lower embodied carbon compared to synthetic insulation.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Wind className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Breathability & moisture regulation</h3>
                      <p className="text-gray-700">Many natural fibres (e.g. wool, hemp, wood fibre) naturally absorb and release moisture, helping regulate indoor humidity, reducing condensation risk, and creating a healthier indoor climate.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Thermometer className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Thermal and acoustic performance</h3>
                      <p className="text-gray-700">Natural insulation materials often provide excellent thermal resistance, while also dampening noise — creating a warmer, quieter, and more comfortable home.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Health and safety advantages</h3>
                      <p className="text-gray-700">Natural materials tend to be free from harsh chemicals or synthetic fibres, reducing risk of VOC emissions, fibre irritation, or off‑gassing; safe to handle and better for indoor air quality.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Lock className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Durability and long‑term value</h3>
                      <p className="text-gray-700">Quality natural insulation retains its structure over time, resisting slump or degradation, while maintaining performance and offering low‑maintenance comfort over decades.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Home className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Good for eco-conscious or heritage properties</h3>
                      <p className="text-gray-700">Natural materials integrate well with breathable construction and older/period buildings where damp regulation and moisture‑control are important — offering a balanced, sustainable insulation solution.</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-8">
                Common natural insulation materials include sheep's wool, wood fibre, hemp, cellulose (recycled fibre), flax and other plant‑ or animal‑based insulators — each with their own strengths and suitable applications depending on property needs and local climate.
              </p>
            </div>

            {/* Our Natural Materials Insulation Services */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Natural Materials Insulation Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We offer a comprehensive natural‑material insulation service — from planning and material selection to installation, finishing and after‑care — tailored to your building and sustainability goals.
              </p>

              {/* Step 1: Property Assessment */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <ClipboardCheck className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">1. Property & Suitability Assessment</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Inspect roof, loft, walls, floors or ceilings to assess structure, moisture levels, ventilation, and existing insulation.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Recommend the most suitable natural-insulation option (wool, wood fibre, hemp, cellulose, etc.) based on building type, exposure, and intended use (storage loft, living space, heritage building, etc.).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Determine the correct thickness or density required to ensure desired thermal and acoustic performance while respecting structural or head‑height constraints.</span>
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
                    <span>Clear and clean the installation area; remove debris or old insulation if necessary.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Check that ventilation, loft vents, air‑flow paths are functioning properly — as many natural materials perform best when they can "breathe."</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ensure surfaces are dry and structurally sound before installation to prevent damp or condensation issues.</span>
                  </li>
                </ul>
              </div>

              {/* Step 3: Professional Installation */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">3. Professional Installation of Natural Insulation</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Install natural‑fibre insulation batts, rolls or loose‑fill between joists, rafters, or floor/wall cavities — cutting or shaping as necessary to fit around obstructions (pipes, wiring, tanks, etc.).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>For loft floors — ensure insulation is correctly laid without compression, maintaining loft ventilation and avoiding cold bridges.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>For walls/ceilings — ensure snug fit, seal around edges where needed, and integrate with vapour‑control or breathable membranes when required.</span>
                  </li>
                </ul>
              </div>

              {/* Step 4: Quality Assurance */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 mb-6">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">4. Quality Assurance, Finish & Health Safety Measures</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Check coverage, density, and ensure no gaps or compressed zones — guaranteeing full thermal and acoustic performance.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Maintain ventilation and moisture balance to prevent condensation or damp buildup.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Clean up and ensure safe, fibre‑free work environment, providing guidance for maintenance and regular checks (ventilation, moisture, loft access).</span>
                  </li>
                </ul>
              </div>

              {/* Step 5: Post-Installation Guidance */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">5. Post‑Installation Guidance & Maintenance Advice</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Provide homeowners with advice on maintaining indoor air quality, checking for damp, ventilation maintenance, and periodically inspecting insulation integrity.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Support for future upgrades or modifications — natural insulation remains flexible and often easier to retrofit or adapt than rigid synthetic materials.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Natural Insulation Materials We Work With */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Natural Insulation Materials We Work With</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Sheep's Wool</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                      <span>Highly effective thermal and acoustic insulation.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                      <span>Naturally breathable and able to absorb and release moisture, helping regulate humidity and reduce condensation risk.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                      <span>Low embodied carbon, renewable and biodegradable — making it environmentally responsible.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Wood Fibre</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Good for thermal regulation, especially in walls or roof structures; breathable and vapour‑permeable.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Often used in heritage or passive‑house style builds where breathability, moisture control and sustainability are priorities.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Hemp, Flax, or Plant‑Based Fibre Materials</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Renewable plant‑based insulation; sustainable, breathable, and recyclable.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Suitable for walls, floors, and roofs — used where eco‑credentials and low toxicity are important.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Recycled Fibre & Cellulose‑Based Options</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Often made of recycled paper or textile fibres — lower embodied‑carbon and a sustainable way to insulate older homes or achieve retrofit upgrades.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Provides good insulation and acoustic performance while supporting recycling and circular‑economy goals.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                We select the insulation material best suited to your property type, climate, moisture exposure, and sustainability or health‑related preferences.
              </p>
            </div>

            {/* Benefits for Homeowners */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Benefits of Natural Insulation for Homeowners, Landlords & Eco‑Conscious Builders</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Reduced environmental impact & lower carbon footprint — natural materials store carbon and often require less energy to manufacture than synthetic alternatives.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Better indoor air quality & healthier living environment — fewer chemicals, no synthetic fibres or off‑gassing; helpful for allergy sufferers and people sensitive to synthetic materials.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Thermal comfort and energy savings — effective insulation against heat loss or gain, stable indoor temperatures, reduced heating/cooling costs.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Moisture regulation & condensation prevention — breathable, hygroscopic insulation helps regulate humidity, reducing damp, mould risk, and protecting building fabric.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Acoustic insulation & noise reduction — dense natural fibres absorb sound, reducing noise transmission between floors or rooms — ideal for multi‑storey homes or flats.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Long‑term value & sustainability — natural insulation often remains stable over decades, with minimal maintenance, and can be recycled or safely disposed at end-of-life.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Suitability for retrofit, heritage or eco‑homes — a flexible, breathable solution for older buildings, heritage homes, or projects prioritizing sustainability and building‑health.</span>
                </div>
              </div>
            </div>

            {/* When Natural Insulation Makes Most Sense */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">When Natural Insulation Makes Most Sense — and What to Consider</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  Especially recommended when:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">You want a sustainable, low‑carbon insulation solution.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Indoor air quality, moisture regulation, and healthy living environment are priorities.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Building is older, heritage‑style, or has traditional materials where breathability and moisture control are important.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Acoustic insulation is desired (e.g. multi‑storey homes, apartments).</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">You care about long‑term sustainability, recyclability, and environmental impact of materials.</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mr-3" />
                  Things to consider:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Some natural materials need a slightly greater thickness than high‑density synthetic boards to achieve the same thermal values — which may affect usable space (e.g. in lofts).</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Installation must ensure adequate ventilation and moisture control to prevent damp or condensation problems.</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Natural fibre insulation can be more expensive than basic synthetic alternatives — though long‑term benefits often offset upfront cost.</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Proper installation is important: gaps, compression, or poor sealing will reduce performance; using experienced installers is advisable.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Natural Materials Insulation (Top 5)</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>What kinds of natural insulation materials are available?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Most common natural insulation materials include sheep's wool, wood fibre, hemp or plant‑based fibre panels/rolls, recycled cellulose or textile‑based insulation, and other natural‑fibre based options — suitable for roofs, lofts, walls, floors and ceilings.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>Are natural insulation materials as effective as synthetic ones?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes — many natural materials offer comparable thermal and acoustic performance to synthetic insulation, while also adding benefits like breathability, moisture regulation, and lower environmental impact.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Are natural materials safe and healthy for indoor environments?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Generally yes. Natural fibre insulation is free from synthetic chemicals, plasticisers or VOC‑emitting binders. This leads to better indoor air quality — often safer and healthier for people prone to allergies or chemical sensitivities.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>Will natural insulation help control moisture and dampness?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes — many natural materials are hygroscopic and breathable, meaning they can absorb and release moisture safely, regulating humidity and helping reduce condensation and mould risk when paired with proper ventilation.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>Is it more expensive to use natural insulation? Is it worth it?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Natural insulation can have a higher upfront cost than basic synthetic alternatives. However, the long-term benefits — improved comfort, reduced energy use, better air quality, acoustic performance, sustainability, and potential increased property value — often outweigh the extra cost, making it a worthwhile investment.
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
                  Ready to Install Natural Materials Insulation?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional natural materials insulation installation today.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Choose eco-friendly, sustainable insulation solutions for your home.
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
