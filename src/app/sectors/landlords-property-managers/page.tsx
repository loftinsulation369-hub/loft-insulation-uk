import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, AlertTriangle, ClipboardCheck, Wrench, TrendingDown, Leaf, Droplets, Trash2, RefreshCw, Building2, Box, Users, Award, Clock, HelpCircle, FileText, ArrowRight, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: "Landlords & Property Managers — Efficient Insulation & Loft Solutions | Loft Insulation Services UK",
  description: "Professional insulation and loft services for landlords and property managers across the UK. Turnkey solutions for rental homes, managed flats, and property portfolios.",
  keywords: ["landlord insulation", "property manager insulation", "rental property insulation", "UK landlord services", "property management insulation", "landlord loft services"],
};

export default function LandlordsPropertyManagersPage() {
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
              Landlords & Property Managers
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Efficient Insulation & Loft Solutions for rental homes, managed flats, and property portfolios
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
                For landlords and property managers, maintaining safe, energy-efficient, compliant properties is essential. At Loft Insulation Services UK, we specialise in delivering turnkey insulation, loft, and energy-efficiency services suited for rental homes, managed flats, multi-unit buildings, and portfolios of properties. Our solutions help reduce running costs, improve tenant comfort, minimise maintenance issues, and enhance property value — all while ensuring compliance with regulations and strengthening your investment&apos;s long-term performance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you manage a single rental unit or a wide portfolio of properties, our flexible services are designed with landlords and property managers in mind.
              </p>
            </div>

            {/* Why Landlords & Property Managers Need Professional Services */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Landlords & Property Managers Need Professional Insulation & Loft Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Rentals and managed properties face unique challenges:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Frequent tenant turnover and the need for quick turnaround between tenancies</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Tenants expecting comfortable, warm, and well-maintained homes</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Regulatory requirements for energy efficiency, insulation levels, and property standards</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Maintenance burden across multiple properties — damp, condensation, cold walls/floors, insulation degradation, etc.</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Pressure to control operating costs (heating, maintenance, repairs) and reduce property downtime</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-semibold">A professional insulation upgrade or loft service provides a cost-effective way to address these challenges by:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Improving thermal efficiency and lowering energy consumption</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Reducing damp, condensation, and associated maintenance problems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Increasing tenant satisfaction and reducing vacancy periods</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Enhancing rental value and property appeal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Ensuring compliance with building and energy-efficiency regulations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Lowering long-term maintenance and repair costs</span>
                </li>
              </ul>
            </div>

            {/* Our Services for Landlords & Property Managers */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Services for Landlords & Property Managers</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We offer a comprehensive set of services tailored for landlords, letting agencies, and property managers — suitable for single properties, multi-unit buildings, or large portfolios.
              </p>

              {/* Insulation Upgrades */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <Home className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Insulation Upgrades & Energy-Efficiency Solutions</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Loft floor insulation to prevent heat loss through ceilings and improve heating efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Roof-rafter insulation for attic conversions, rented loft rooms, or inhabited roof spaces</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Cavity wall insulation to cut heat loss through walls, improving comfort and reducing energy bills</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Floor insulation (for timber or slab floors) to eliminate cold floors and damp from below</span>
                  </li>
                </ul>
              </div>

              {/* Loft Clearance */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 mb-6">
                <div className="flex items-center mb-4">
                  <Trash2 className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Loft Clearance, Preparation & Insulation Replacement</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Safe removal of old, degraded, or contaminated insulation that may affect performance or pose health risks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Clearing old loft contents, debris, or waste before any works — ideal if previous tenants stored items in lofts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Replacement with modern, compliant insulation materials to meet current standards and improve thermal performance</span>
                  </li>
                </ul>
              </div>

              {/* Loft Boarding */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Box className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Loft Boarding, Storage Conversion & Safe Access</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Installation of robust loft boarding to convert lofts into safe storage spaces for tenants (e.g. extra storage, attic rooms)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Reinforced boarding for heavier storage loads — suitcases, boxes, furniture — typical for rented properties</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Installation or upgrade of loft hatches, ladders or safe access points as part of tenant-ready property upgrades</span>
                  </li>
                </ul>
              </div>

              {/* Maintenance & Repairs */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 mb-6">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Maintenance, Repairs & Periodic Inspections</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Damp, condensation, and ventilation checks — helping prevent mould, damp, and tenant complaints</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Regular maintenance services including ventilation checks, insulation audits, and roof/loft inspections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Rapid response for remedial insulation work — ideal between tenancies or after tenant exit</span>
                  </li>
                </ul>
              </div>

              {/* Portfolio-Wide Services */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                <div className="flex items-center mb-4">
                  <Building2 className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Portfolio-Wide Services & Bulk Upgrades</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Multi-property surveying and scheduling — we can handle full estate upgrades or bulk property insulation/loft conversions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Transparent quotations and planning per property — simplifying budget management for landlords/property owners</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Flexible scheduling to minimize vacancy time — work between tenancies, during weekends, or at off-peak times</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Benefits for Landlords, Letting Agents & Property Managers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <TrendingDown className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Lower Running Costs & Controlled Heating Expenses</h3>
                      <p className="text-gray-700">Upgraded insulation reduces heat loss, resulting in lower heating bills — a win for landlords who supply utilities or for tenants, improving rental appeal.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Wrench className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Reduced Maintenance & Repair Issues</h3>
                      <p className="text-gray-700">By tackling insulation, damp, and ventilation proactively, you avoid frequent repairs and complaints — reducing landlord liability and maintenance overhead.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Users className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Tenant Comfort & Retention</h3>
                      <p className="text-gray-700">Warm, well-insulated homes reduce tenant complaints about cold, damp, and energy costs — encouraging longer tenancies and less vacancy.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Award className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Increased Property Value & Marketability</h3>
                      <p className="text-gray-700">Properties with good insulation, safe loft access, storage options, and energy-efficient credentials attract better tenants and command higher rents or sale prices.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Regulatory Compliance & Risk Mitigation</h3>
                      <p className="text-gray-700">Proper insulation, ventilation, and building standards compliance help you meet legal requirements for rental properties — avoiding fines or enforcement issues.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Building2 className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Scalability & Efficient Management of Multiple Properties</h3>
                      <p className="text-gray-700">Our services make it easier to manage large property portfolios: one contractor, standardised delivery, bulk scheduling, and consistent quality across properties.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Work */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">How We Work — Our Process for Landlords & Property Managers</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <div className="flex items-start">
                    <div className="bg-primary-blue rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Property Survey & Condition Assessment</h3>
                      <p className="text-gray-700">We visit each property or schedule bulk inspections, checking loft/roof structure, wall and floor types, existing insulation, ventilation, damp issues, and any needed repairs. Based on findings, we draft a tailored plan per property.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                  <div className="flex items-start">
                    <div className="bg-green-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Planning & Quotation</h3>
                      <p className="text-gray-700">You receive a clear breakdown of works, materials, costs, estimated savings, and timelines for each property — ideal for budgeting and portfolio management.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <div className="flex items-start">
                    <div className="bg-purple-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Coordinated Work Scheduling</h3>
                      <p className="text-gray-700">We plan work to fit between tenancies or during vacant periods. For multiple properties, we coordinate visits to reduce travel times and maximize efficiency — minimizing vacancy periods and disruption.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500">
                  <div className="flex items-start">
                    <div className="bg-orange-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Installation & Quality Assurance</h3>
                      <p className="text-gray-700">All works are undertaken by qualified teams. We ensure insulation standards, ventilation, fire/health & safety compliance, and robust installation of boards, insulation, loft access — ready for occupation.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                  <div className="flex items-start">
                    <div className="bg-teal-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Post-Work Inspection & Documentation</h3>
                      <p className="text-gray-700">Upon completion, we provide a detailed report of works done — insulation type/thickness, ventilation status, installation quality, and maintenance recommendations. Useful for regulatory compliance, tenant handover, or future audits.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500">
                  <div className="flex items-start">
                    <div className="bg-indigo-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">6</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Optional Long-Term Maintenance & Support</h3>
                      <p className="text-gray-700">We offer maintenance plans — periodic checks, ventilation inspections, insulation audits — allowing landlords or property managers to keep properties in top condition over time with minimal effort.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Who Benefits Most */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who Benefits Most from Our Landlords & Property Managers Services?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our services are ideal if you:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Own or manage single rental properties or large portfolios</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Are a letting agent or property management company handling multiple units</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Need quick turnaround between tenants with minimal downtime</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Want to reduce heating costs, maintenance, and tenant complaints</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Plan loft conversions or safe loft storage for tenants</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Aim to meet energy-efficiency regulations for rental properties</span>
                </div>
                <div className="flex items-center md:col-span-2">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Prefer a single contractor for all insulation, loft, and property-maintenance services</span>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Landlords & Property Managers (Top 5)</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>Can insulation and loft upgrades be done between tenants to avoid disruption?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. We specialise in scheduling work during vacant periods, weekends, or off-peak times — ensuring the property is ready before the next tenancy without disturbing existing tenants.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>Will upgraded insulation and loft boarding increase rental value or attract better tenants?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Definitely. Properties that are warm, energy-efficient and offer safe loft storage or habitable attic rooms are more appealing — helping you attract tenants quickly and potentially command higher rent.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Do you handle multiple properties in a portfolio?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. Whether it&apos;s a handful of homes or dozens of units, we offer bulk surveying, scheduled works, and coordinated project management — simplifying upkeep across your portfolio.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>What happens if old insulation is water-damaged or contaminated?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    We provide complete removal and safe disposal of old insulation before replacing with modern, compliant materials. This ensures no damp, mould, or contamination risks remain, and the new installation performs optimally.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>Do you provide documentation or reports after completion?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Absolutely. We deliver a detailed handover report — including insulation specifications, ventilation status, safety checks, and maintenance advice. This can be used for compliance, audits, or tenant handover records.
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
                  Ready to Improve Your Rental Properties?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional insulation and loft services tailored to landlords and property managers.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Let us help you reduce costs, improve tenant satisfaction, and enhance property value.
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
