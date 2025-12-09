import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, AlertTriangle, ClipboardCheck, Wrench, TrendingDown, Leaf, Droplets, Trash2, RefreshCw, Building2, Box, Factory, Zap, HelpCircle, FileText, ArrowRight, Award, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: "Commercial & Industrial – Loft Insulation Services UK",
  description: "Professional insulation services for commercial and industrial buildings across the UK. Tailored solutions for warehouses, offices, retail premises, and industrial facilities.",
  keywords: ["commercial insulation", "industrial insulation", "commercial loft services", "UK commercial insulation", "warehouse insulation", "office insulation"],
};

export default function CommercialIndustrialPage() {
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
              Commercial & Industrial
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Tailored insulation, roofing and loft-related services for commercial and industrial properties across the UK
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
                In large-scale commercial or industrial buildings — warehouses, workshops, factories, retail premises, offices, or multi-unit housing managed commercially — efficient thermal control and proper insulation are essential for energy efficiency, comfort, and cost savings. At Loft Insulation Services UK, our Commercial & Industrial sector offers tailored insulation, roofing and loft-related services designed to meet the unique demands of non-domestic properties. Our solutions help businesses reduce energy costs, improve working conditions, comply with regulations, and protect building integrity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you manage a retail premises, a block of flats, a manufacturing facility, or a commercial warehouse — our services are scalable, compliant and adaptable to suit your building's structure, usage, and energy-efficiency goals.
              </p>
            </div>

            {/* Why Commercial & Industrial Properties Need Professional Insulation Services */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Commercial & Industrial Properties Need Professional Insulation Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Commercial and industrial properties face challenges different from domestic homes:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Larger volume of space to heat or cool</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Higher energy consumption and more significant utility costs</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Varied roof and loft structures — often older, large-span roofs, pitched or flat roofs, mezzanine levels, structural joists</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Diverse usage patterns — storage, workspaces, offices, production areas</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Regulatory requirements for building insulation, energy performance, workplace comfort, and safety</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Need for durable, long-lasting materials and professional installation to withstand heavier foot traffic, storage loads, or industrial conditions</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-semibold">Without proper insulation, these properties are vulnerable to:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>High heating or cooling costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>Uneven temperature distribution — cold spots, draughts, overheating</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>Condensation, damp, or thermal stress on roof/floor structures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>Poor employee comfort, reduced productivity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>Environmental inefficiency and non-compliance with energy regulations</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                That's why professional, commercial-grade insulation is a smart investment — delivering savings, comfort, compliance, and long-term durability.
              </p>
            </div>

            {/* Our Commercial & Industrial Services Overview */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Commercial & Industrial Services Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We offer a comprehensive suite of services tailored to commercial and industrial properties. Each service can be deployed standalone or combined into an integrated retrofit or refurbishment project.
              </p>

              {/* Insulation Solutions */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <Factory className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Insulation Solutions (Loft, Roof, Wall, Floor)</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Loft floor insulation for storage areas, overhead walkways, attic storage — reducing heat loss and improving thermal efficiency.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Roof-rafter insulation for pitched roofs, mezzanine areas, roof-space offices or any spaces under the roof — creating a continuous thermal barrier.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Cavity wall (where applicable) and external wall insulation — reducing heat loss through walls; especially useful for office blocks or multi-unit buildings.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Floor insulation for warehouse mezzanines, suspended floors, ground level offices above unheated basements or storage areas.</span>
                  </li>
                </ul>
              </div>

              {/* Loft & Roof Clearance */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 mb-6">
                <div className="flex items-center mb-4">
                  <Trash2 className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Loft & Roof Clearance, Preparation & Replacement Services</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Safe removal of old, damaged or degraded insulation — particularly vital in older industrial roofs or converted properties where materials may be outdated or unsafe.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Roof / loft clearance and cleaning — essential for preparing lofts for new insulation, boarding, or storage use.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Insulation replacement — installing modern, high-performance materials that meet current safety, thermal, and fire standards.</span>
                  </li>
                </ul>
              </div>

              {/* Loft Boarding & Storage Conversion */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Box className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Loft Boarding, Storage Conversion & Mezzanine Support</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Strong boarding installation over joists — to create storage platforms, archive rooms, or storage mezzanines.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Reinforced boarding or structural floor installation — designed to withstand heavier loads typical of commercial storage (boxes, equipment, archived files, inventory).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Safe access solutions — loft ladders, stairs, handrails where needed; also safe walkways or access routes across loft/roof spaces.</span>
                  </li>
                </ul>
              </div>

              {/* Ventilation & Moisture Control */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 mb-6">
                <div className="flex items-center mb-4">
                  <Droplets className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Ventilation, Moisture Control & Building Integrity Maintenance</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ventilation assessment and installation — ensuring soffit vents, ridge vents, or mechanical ventilation to avoid condensation, damp or moisture accumulation.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Vapour control layers (VCL) or membranes under insulation — critical in industrial buildings where temperature fluctuations, condensation risk, or storage of goods may be involved.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Roof integrity checks, repairs, and sealing — to prevent leaks, draughts, or structural damage.</span>
                  </li>
                </ul>
              </div>

              {/* Compliance & Energy Efficiency */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Compliance, Energy Efficiency Upgrades & Consultancy</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Energy-efficiency assessments for entire premises — identifying heat loss points, insulation gaps, energy wastage.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Recommendations and installation to meet commercial building regulations, health & safety standards, and energy performance requirements.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Post-installation reporting, maintenance advice, and long-term support to ensure insulation continues to perform optimally.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Benefits of Choosing Our Commercial & Industrial Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <TrendingDown className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Significant Energy Cost Reduction</h3>
                      <p className="text-gray-700">Large spaces mean high heating or cooling demand. Efficient insulation dramatically cuts energy usage — leading to substantial cost savings.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Users className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Improved Working Conditions & Staff Comfort</h3>
                      <p className="text-gray-700">Consistent indoor temperatures, absence of cold zones or draughts, and better air-quality contribute to healthier, more productive workplaces.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Building Lifespan & Structural Protection</h3>
                      <p className="text-gray-700">Insulation helps prevent condensation, moisture damage, and temperature-driven stress on roof, walls, and floor structures — protecting building integrity over decades.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Box className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Storage & Space Utilisation</h3>
                      <p className="text-gray-700">Boarded lofts or insulated mezzanines turn wasted attic or roof space into valuable storage or usable areas — ideal for inventory, archives, seasonal stock, or equipment storage.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Award className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Compliance & Energy Performance Upgrades</h3>
                      <p className="text-gray-700">Our installations help meet energy regulations, fire safety standards, and building codes relevant to commercial/industrial buildings — reducing liability and enhancing building value.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Clock className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Reduced Maintenance and Long-Term Return on Investment</h3>
                      <p className="text-gray-700">High-quality materials and professional work ensure insulation lasts decades; lower energy costs and reduced structural maintenance make this a cost-effective long-term investment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Approach */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Approach: How We Work for Commercial & Industrial Clients</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <div className="flex items-start">
                    <div className="bg-primary-blue rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Site Survey & Building Assessment</h3>
                      <p className="text-gray-700">We carry out a full inspection of your premises: roof structure, wall composition, existing insulation, ventilation, building usage, and heating/cooling systems. We then propose a tailored plan of action with clear cost, timeline, and materials specified.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                  <div className="flex items-start">
                    <div className="bg-green-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Risk Assessment & Safety Planning</h3>
                      <p className="text-gray-700">Given the larger scale and complexity of commercial roofs and lofts (height, spans, equipment), we assess safety — access routes, protective gear, debris handling, scaffolding if required — and plan work to meet health and safety regulations.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <div className="flex items-start">
                    <div className="bg-purple-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Installation & Upgrades with Minimal Disruption</h3>
                      <p className="text-gray-700">We schedule work intelligently to minimize disruption to normal business operations. Night-time or weekend work can be arranged if required, especially for retail, office, or warehouse environments.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500">
                  <div className="flex items-start">
                    <div className="bg-orange-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance & Compliance Checks</h3>
                      <p className="text-gray-700">After installation, we conduct thorough inspections — moisture checks, ventilation, structural integrity, coverage, safety compliance — and provide reports and maintenance advice to property managers.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                  <div className="flex items-start">
                    <div className="bg-teal-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Long-Term Support & Maintenance Services</h3>
                      <p className="text-gray-700">We offer periodic inspections, maintenance services, and retrofit support — ensuring insulation and building integrity remain high over time, even as building usage changes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Who Should Use */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who Should Use Our Commercial & Industrial Services?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our services suit a wide range of commercial and industrial clients, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Warehouses, storage facilities, logistics centres</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Manufacturing units, workshops, light-industrial buildings</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Office buildings, business parks, and multi-unit residential blocks managed commercially</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Retail premises — shops, showrooms, large retail floors with attic/roof storage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Property developers, landlords, or estate managers managing multiple units or blocks</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Facilities undergoing renovation, refurbishment, or planned energy efficiency upgrades</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                If your building is large, used intensively, or subject to high wear and thermal demand — our specialist services ensure it remains efficient, safe, and cost-effective.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Commercial & Industrial Sector Services (Top 5)</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>Can you insulate very large roofs or warehouses?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes — we regularly work on large-span roofs, industrial warehouses, and commercial premises. Our team is equipped to handle large-scale insulation, roofing structures, mezzanine flooring, and ensures adequate structural support and ventilation.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>Will insulation work disrupt business operations?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    We plan installations to minimize disruption. Work can often be scheduled outside business hours — evenings, weekends, or shutdown periods — especially for warehouses or retail premises. We also use protective coverings and clean-up protocols to keep work areas safe and tidy.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Is roof insulation suitable if the building stores temperature-sensitive goods?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Absolutely. Proper insulation, combined with adequate ventilation and moisture control, helps maintain stable internal temperatures — reducing the risk of condensation and protecting stored goods or materials. We tailor insulation methods (VCL, membranes, breathable materials) according to storage requirements.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>Do you provide insulation solutions that comply with commercial building regulations and fire safety standards?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes — we only use certified, high-quality insulation materials that meet current commercial building regulations, fire safety codes, and energy efficiency standards. Post-installation compliance checks are part of our service.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>How long does commercial insulation last and what maintenance is needed?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    With professional installation and correct ventilation, insulation can last several decades. Maintenance involves periodic inspections — checking for moisture ingress, ventilation blockages, structural integrity, and ensuring insulation remains intact. We also offer long-term maintenance contracts for commercial clients.
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
                  Ready to Improve Your Commercial Property's Energy Efficiency?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional commercial and industrial insulation services today.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Let us help you reduce energy costs, improve working conditions, and ensure regulatory compliance.
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
