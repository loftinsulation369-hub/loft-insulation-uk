import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, AlertTriangle, ClipboardCheck, Wrench, TrendingDown, Leaf, Droplets, Trash2, RefreshCw, Building2, Box, Users, Award, Clock, FileText, HelpCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Public Sector — Insulation, Loft & Energy Efficiency Solutions | Loft Insulation Services UK",
  description: "Professional insulation and energy efficiency services for public sector buildings across the UK. Solutions for schools, local authority housing, community centres, and public buildings.",
  keywords: ["public sector insulation", "school insulation", "local authority insulation", "UK public sector", "public building insulation", "government building insulation"],
};

export default function PublicSectorPage() {
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
              Public Sector
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Insulation, Loft & Energy Efficiency Solutions for Public Buildings
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
                Public sector buildings — including schools, local authority housing, community centres, care homes, municipal offices, and social housing blocks — have unique demands when it comes to comfort, energy efficiency, maintenance, and compliance. At Loft Insulation Services UK, we understand these demands. Our Public Sector services are designed to help institutions reduce energy costs, improve occupant comfort, meet regulatory standards, and maintain building integrity — with minimal disruption and full compliance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether it's upgrading insulation in old buildings, insulating new builds, preparing lofts for storage or maintenance access, or improving thermal efficiency across multiple properties — our tailored solutions deliver long-term savings, improved comfort, and peace of mind for administrators, trustees, or property managers.
              </p>
            </div>

            {/* Why Public Sector Buildings Need Professional Services */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Public Sector Buildings Need Professional Insulation & Loft Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Public and institutional buildings often face challenges that domestic properties do not:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Multiple occupants, high turnover, and high footfall (e.g. schools, care homes)</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Large or varied building stock — ranging from old heritage buildings to modern construction</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Regulatory and safety compliance requirements (insulation standards, fire safety, energy performance)</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Budget constraints and need for long-term cost savings on heating and maintenance</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Need for consistent comfort — temperature regulation, damp prevention, stable indoor climate for vulnerable groups (children, elderly, tenants)</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Maintenance and upkeep across many buildings — meaning any upgrade must be efficient, scalable and durable</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-semibold">Failing to insulate walls, roofs, lofts, or floors properly can lead to:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>High energy bills for heating or cooling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>Cold spots, draughts, damp and condensation — potentially affecting health and building fabric</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>Under-utilised loft or roof-space — lost opportunity for storage, maintenance access or conversions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>Increased maintenance burden, poor comfort levels, and high occupant dissatisfaction</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                By investing in professional insulation, loft, and related services, public sector organisations can significantly reduce energy consumption, improve occupant well-being, and extend the life span of their facilities.
              </p>
            </div>

            {/* Our Public Sector Services Portfolio */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Public Sector Services Portfolio</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We offer a full suite of services tailored to public sector needs. These can be delivered individually or as part of a comprehensive upgrade across multiple properties.
              </p>

              {/* Building-Wide Insulation Solutions */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <Home className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Building-Wide Insulation Solutions</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Loft floor insulation — to reduce heat loss through ceilings and lower energy consumption for heating.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Roof-rafter insulation — ideal for buildings with attic space used for storage, maintenance access, or potential conversion.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Cavity wall and external wall insulation (where construction allows) — to improve wall thermal performance and reduce draughts.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Floor insulation for buildings with suspended floors, ground-level floors over unheated spaces, or older floor structures requiring thermal upgrade.</span>
                  </li>
                </ul>
              </div>

              {/* Insulation Removal, Replacement & Upgrades */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 mb-6">
                <div className="flex items-center mb-4">
                  <RefreshCw className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Insulation Removal, Replacement & Upgrades</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Safe removal of outdated or damaged insulation — crucial for older public buildings or heritage stock.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Replacement with high-performance, regulation-compliant insulation materials, enhancing energy efficiency and fire safety.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Upgrading insulation standards to meet current regulations and long-term energy targets for public buildings.</span>
                  </li>
                </ul>
              </div>

              {/* Loft & Roof Clearance */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Trash2 className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Loft & Roof Clearance, Preparation, and Boarding</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Clearing old storage, debris, outdated materials or redundant insulation to prepare lofts and roofs for renovation, maintenance access, or storage.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Loft boarding to create safe, usable floor space — ideal for archives, maintenance equipment, or seasonal storage for institutions.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Safe access solutions — loft ladders, staircases or hatch upgrades — ensuring maintenance teams or staff can access lofts safely.</span>
                  </li>
                </ul>
              </div>

              {/* Ventilation & Moisture Control */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 mb-6">
                <div className="flex items-center mb-4">
                  <Droplets className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Ventilation, Moisture Control & Structural Integrity Services</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Roof and loft ventilation checks and upgrades — ensuring proper airflow, preventing condensation, mould, damp, and protecting structural timbers.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Moisture-proofing measures including vapour control layers (VCL) or membranes, especially in old or mixed-use buildings.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Structural inspections, repairs, and upgrades where needed — ensuring buildings are safe, compliant, and future-proofed.</span>
                  </li>
                </ul>
              </div>

              {/* Energy Efficiency Audits */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Energy Efficiency Audits, Consultancy & Compliance Support</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Energy audits to identify heat loss areas (walls, roof, floors) across public estate.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Detailed proposals and upgrade plans to improve energy performance, reduce costs, and meet public-sector sustainability targets.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Full documentation and compliance reports — supporting audits, grants, funding applications, or regulatory reviews.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Benefits for Public Sector Clients</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <TrendingDown className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Lower Energy Bills & Operating Costs</h3>
                      <p className="text-gray-700">Insulating roofs, walls, floors and improving the thermal envelope significantly reduces heating (and often cooling) costs — freeing up budget for core services.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Users className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Improved Occupant Comfort & Health</h3>
                      <p className="text-gray-700">Consistent indoor temperatures, fewer draughts, reduced damp and condensation — improving living, working or care conditions in schools, offices, care homes and other public buildings.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Compliance & Regulatory Peace of Mind</h3>
                      <p className="text-gray-700">All materials and installation methods meet current building regulations, fire safety standards, and energy-efficiency guidelines — crucial for public sector compliance and funding mandates.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Box className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Better Use of Underutilised Space</h3>
                      <p className="text-gray-700">Loft boarding and safe access allow previously wasted attic or roof space to be converted into storage, archives, or maintenance areas — maximizing asset utilization.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Clock className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Long-Term Durability & Low Maintenance</h3>
                      <p className="text-gray-700">High-quality insulation and proper moisture/ventilation control extend the lifespan of buildings, reduce maintenance needs, and protect against structural decay.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Building2 className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Scalability & Efficiency for Large Portfolios</h3>
                      <p className="text-gray-700">We handle multi-building projects — from a single community centre to whole estate upgrades — with scheduling, planning, and execution tailored to institutional needs and timelines.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Approach */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Approach to Working with Public Sector Clients</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <div className="flex items-start">
                    <div className="bg-primary-blue rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Building Survey & Needs Analysis</h3>
                      <p className="text-gray-700">We begin with a detailed inspection of each building — roof, walls, floors, insulation status, moisture, ventilation, structural integrity, and usage patterns. This helps define the appropriate scope of work.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                  <div className="flex items-start">
                    <div className="bg-green-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Planning, Quoting & Scheduling</h3>
                      <p className="text-gray-700">We deliver clear, itemised proposals — detailing required works, materials, timelines, expected energy savings, compliance details, and cost breakdowns.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <div className="flex items-start">
                    <div className="bg-purple-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Phased Work to Minimize Disruption</h3>
                      <p className="text-gray-700">For occupied buildings — e.g. schools, care homes — we schedule work in phases, after-hours, during holidays, or weekends where needed, to avoid disruption to services or occupants.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500">
                  <div className="flex items-start">
                    <div className="bg-orange-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">High-Quality Execution & Compliance Assurance</h3>
                      <p className="text-gray-700">Our certified teams follow safety regulations, use approved materials, maintain fire and building standards, and ensure proper ventilation and moisture control — with full documentation.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                  <div className="flex items-start">
                    <div className="bg-teal-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Post-Installation Audit, Reporting & Maintenance Support</h3>
                      <p className="text-gray-700">After completion, we conduct final inspections, moisture & ventilation checks, and provide comprehensive compliance and maintenance reports. Optional ongoing maintenance plans help ensure long-term performance and compliance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Who Should Use */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who Should Use Our Public Sector Services?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our services suit a variety of public-sector organisations and building types, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Local authorities managing social housing, flats, or council-owned properties</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Schools, colleges, universities — especially older buildings needing insulation upgrades</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Care homes, assisted living residences, sheltered housing facilities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Community centres, village halls, public libraries, municipal buildings</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Social housing estates, multi-unit blocks, or mixed-use properties under public management</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Facilities undergoing refurbishment, energy-efficiency audits, or requiring compliance for public funding or grants</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                If your organisation manages properties with large heating loads, old or inefficient buildings, or multiple sites — our services are tailored to meet your needs cost-effectively and professionally.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Public Sector Building Insulation & Loft Services</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>Can you work on occupied buildings like schools or care homes without disruption?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. We plan carefully to minimise disruption. Work can be scheduled during off-hours, weekends, holidays or in phased blocks — ensuring comfort and safety for occupants.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>Do you meet public-sector compliance, fire safety, and building standards?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Absolutely. All materials, installation methods, ventilation and vapour control systems comply with relevant UK regulations. We also provide full documentation and compliance reports which can be used for audits, maintenance records, or funding applications.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Can you handle multiple buildings or large estates as part of one contract?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. We specialize in bulk upgrades, estate-wide surveys, and coordinated scheduling — delivering efficient, high-quality service across many properties with minimal administrative burden.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>What kind of energy savings or benefits can public buildings expect?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Savings depend on building type, existing insulation, and heating system usage. However, many institutions see significant reductions in heating (and sometimes cooling) costs, improved comfort, fewer maintenance issues, and extended building lifespan, making the investment worthwhile within a few years.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>Is ongoing maintenance or follow-up required after installation?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Insulation and ventilation systems are designed to be low-maintenance. We offer optional maintenance plans — including periodic inspections, ventilation checks, moisture monitoring and remedial services — ensuring long-term performance and building integrity.
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
                  Ready to Improve Your Public Sector Buildings?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional insulation and energy efficiency services tailored to public sector needs.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Let us help you reduce energy costs, improve occupant comfort, and ensure regulatory compliance.
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
