import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, TrendingDown, Leaf, Shield, Droplets, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Loft Insulation Installation | Loft Insulation Services UK",
  description: "Professional loft insulation installation services across the UK. Expert installers, high-quality materials, and guaranteed workmanship for improved energy efficiency.",
  keywords: ["loft insulation installation", "loft insulation services", "professional loft insulation", "UK loft insulation", "energy efficient insulation"],
};

export default function LoftInsulationInstallationPage() {
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
              Loft Insulation Installation
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Professional, high-quality loft insulation installation designed to keep your home warmer, more comfortable, and more energy-efficient all year round.
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
                Loft insulation is one of the most effective ways to improve your home&apos;s energy efficiency, reduce heat loss, and save money on energy bills. At Loft Insulation Services UK, we specialise in professional, high-quality loft insulation installation designed to keep your home warmer, more comfortable, and more energy-efficient all year round.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you live in a detached house, semi-detached property, bungalow, or converted loft space, our expert installers provide tailored solutions to suit your home&apos;s structure and energy performance needs. This comprehensive guide explains the benefits, installation process, materials, costs, and why we are the UK&apos;s trusted specialists for loft insulation.
              </p>
            </div>

            {/* Why Loft Insulation Matters */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Loft Insulation Matters</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Heat naturally rises — and without insulation, up to 25–30% of your home&apos;s heat escapes through an uninsulated loft. This leads to higher heating bills, colder winters, and unnecessary energy loss.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Loft insulation acts as a thermal barrier that traps warmth inside your home. It prevents heat from escaping through the roof while reducing the need for constant heating. As a result, your home stays warmer for longer using less energy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-semibold">Key reasons loft insulation is essential:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Reduces heat loss and improves temperature consistency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Lowers energy bills significantly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Helps your boiler or heating system work more efficiently</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Improves EPC (Energy Performance Certificate) rating</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Makes your home more environmentally friendly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Adds value to the property and increases buyer appeal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Reduces condensation and helps prevent damp issues</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Provides long-term, maintenance-free energy savings</span>
                </li>
              </ul>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Benefits of Loft Insulation Installation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Upgrading or installing new loft insulation offers a wide range of benefits that homeowners can enjoy almost immediately.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <div className="flex items-start">
                    <TrendingDown className="h-6 w-6 text-primary-blue mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Lower Energy Bills</h3>
                      <p className="text-gray-700">Most UK homes save between £200 and £400 per year on heating costs after installing insulation. Savings vary based on home size, insulation thickness, and energy usage.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <div className="flex items-start">
                    <Home className="h-6 w-6 text-primary-blue mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Improved Home Comfort</h3>
                      <p className="text-gray-700">Insulation keeps the home warmer in winter and cooler in summer, reducing temperature fluctuations and cold spots. You&apos;ll notice fewer drafts and a more comfortable living environment throughout the year.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-primary-blue mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Increased Energy Efficiency</h3>
                      <p className="text-gray-700">A well-insulated home requires less energy to stay warm, improving your EPC rating — a big advantage if you plan to sell or rent your property.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <div className="flex items-start">
                    <Leaf className="h-6 w-6 text-primary-blue mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Living</h3>
                      <p className="text-gray-700">By reducing energy consumption, loft insulation helps cut carbon emissions and supports a more sustainable lifestyle.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-blue mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Installation, Long-Lasting Results</h3>
                      <p className="text-gray-700">Most loft insulation projects can be completed within a few hours. Once installed, insulation typically lasts 30–40 years, requiring little or no maintenance.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <div className="flex items-start">
                    <Droplets className="h-6 w-6 text-primary-blue mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Prevents Damp and Moisture Build-Up</h3>
                      <p className="text-gray-700">Insulation helps regulate loft temperature and reduces condensation, protecting the roof structure and improving air quality.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Service Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Loft Insulation Installation Service</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                As one of the UK&apos;s trusted specialists, we provide a complete loft insulation service from assessment to installation. Our certified team ensures your insulation is fitted safely, correctly, and in compliance with UK Building Regulations.
              </p>
              
              <div className="bg-gradient-to-r from-primary-blue/10 to-secondary-blue/10 rounded-xl p-6 border-l-4 border-primary-blue">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 1 — Professional Home Assessment</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our experts begin with a detailed inspection of your loft area, checking:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">•</span>
                    <span>Current insulation condition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">•</span>
                    <span>Loft accessibility and safety</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">•</span>
                    <span>Ventilation and airflow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">•</span>
                    <span>Joist structure and layout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">•</span>
                    <span>Electrical wiring, pipes, and water tanks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">•</span>
                    <span>Any signs of damp, mould, or condensation</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Based on this assessment, we provide a clear, transparent quote with recommended materials and insulation thickness.
                </p>
              </div>
            </div>

            {/* Step 2 - Choosing the Right Insulation Material */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Step 2 — Choosing the Right Insulation Material</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We offer multiple insulation options to match your home, budget, and efficiency goals.
              </p>
              
              <div className="bg-gradient-to-r from-primary-blue/10 to-secondary-blue/10 rounded-xl p-6 border-l-4 border-primary-blue">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Popular Loft Insulation Materials We Install</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-5 shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">• Mineral Wool Insulation (Roll or Batt Form)</h4>
                    <p className="text-gray-700">The most common and cost-effective option. It provides excellent thermal performance, fire resistance, and long-term durability.</p>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">• Blown-In Fibre Insulation</h4>
                    <p className="text-gray-700">Ideal for irregular or hard-to-reach loft spaces. It fills gaps thoroughly and delivers uniform coverage.</p>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">• Rigid Foam Board Insulation</h4>
                    <p className="text-gray-700">Used for loft conversions or where maximum thermal performance is needed in minimal space.</p>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">• Eco-Friendly Natural Insulation Options</h4>
                    <p className="text-gray-700">Sheep wool, hemp, and recycled materials are available for homeowners who want sustainable solutions.</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                  We help you choose the most efficient and appropriate insulation based on your home&apos;s requirements.
                </p>
              </div>
            </div>

            {/* Step 3 - Expert Installation */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Step 3 — Expert Installation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our installation process is quick, clean, and professional.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-semibold">During installation, our team will:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Lay insulation between and across joists</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Install insulation at the recommended depth (usually 270mm)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Ensure proper ventilation to prevent moisture build-up</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Insulate loft hatches and any cold spots</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Avoid covering downlights, pipes, and electrical components</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Raise loft boarding if storage access is needed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Leave no mess behind — full clean-up included</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We follow all UK industry standards to ensure maximum thermal efficiency and safety.
              </p>
            </div>

            {/* Cost, Payback, and Lifespan */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Cost, Payback, and Lifespan of Loft Insulation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Loft insulation is one of the most cost-effective energy-saving upgrades available.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Factors Affecting Cost</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">•</span>
                    <span>Size of the loft</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">•</span>
                    <span>Type of insulation material</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">•</span>
                    <span>Existing insulation condition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">•</span>
                    <span>Loft accessibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">•</span>
                    <span>Whether boarding or raised platforms are required</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Typical Payback Period</h3>
                  <p className="text-gray-700">Most homeowners recover the cost of installation within 2–4 years thanks to lower heating bills.</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Lifespan</h3>
                  <p className="text-gray-700">High-quality insulation lasts 30–40 years, continuing to provide excellent performance with little to no maintenance.</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Loft Insulation Services UK?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We pride ourselves on delivering professional, customer-focused insulation services across the UK.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-semibold">What Makes Us Different:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Certified Installers</strong> — Fully trained and compliant with UK regulations</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>High-Quality Materials</strong> — Durable, efficient, industry-approved products</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Tailored Solutions</strong> — Custom insulation plans based on your home</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Fast Turnaround</strong> — Most installs completed the same day</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Affordable Pricing</strong> — No hidden charges, transparent quotations</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Guaranteed Workmanship</strong> — Long-term performance and satisfaction</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Eco-Friendly Options</strong> — Sustainable, low-carbon insulation choices</span>
                </div>
              </div>
            </div>

            {/* Who Can Benefit */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who Can Benefit from Our Loft Insulation Installation?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our services cover all types of properties, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Detached and semi-detached homes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Terraced houses</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Bungalows</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Dormer and loft-converted homes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Rental properties</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">New builds and older homes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Commercial and small business spaces</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                Whether your loft needs a simple insulation top-up or a complete upgrade, we have the right solution.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions (Loft Insulation Installation)</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>How long does loft insulation installation take?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Most loft insulation jobs are completed within a few hours for a typical domestic loft. The exact time depends on the size of the loft, the type of insulation material, and whether any preparatory work is required.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>What types of insulation materials do you use?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    We offer a range of insulation materials based on the property and your needs — including mineral wool (batts or rolls), loose-fill or blown-fibre insulation for irregular lofts, rigid foam insulation for high-performance installs or loft conversions, and natural eco-friendly insulation options where suitable.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Will loft insulation reduce my heating bills?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. A properly installed loft insulation significantly reduces heat loss through the roof — leading to lower heating demand and reduced energy bills. Many homeowners see a noticeable drop in heating costs following insulation.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>Do you ensure ventilation and moisture control when installing insulation?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Absolutely. During installation, we ensure proper ventilation is maintained and that insulation does not block cold-water tanks, vents or pipes. This helps prevent condensation, damp problems, and ensures safe long-term performance.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>How long does loft insulation last?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    High-quality loft insulation installed by professionals typically remains effective for decades — often 30 to 40 years — assuming it is not disturbed or compressed. It provides long-term energy efficiency with minimal maintenance needed.
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
                  Book Your Free Loft Insulation Survey Today
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  If you&apos;re ready to reduce your energy bills, increase home comfort, and improve your energy efficiency, our team is here to help.
                </p>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  We offer free surveys, transparent quotes, and professional installation with guaranteed results.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90 font-semibold">
                  👉 Contact Loft Insulation Services UK today to schedule your FREE no-obligation consultation.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Let us help you make your home warmer, greener, and more energy-efficient — with insulation that lasts for decades.
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


