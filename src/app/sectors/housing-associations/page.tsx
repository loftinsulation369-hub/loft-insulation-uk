import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, AlertTriangle, ClipboardCheck, Wrench, TrendingDown, Leaf, Droplets, Trash2, RefreshCw, Building2, Box, Users, Award, Clock, HelpCircle, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Housing Associations — Tailored Insulation & Loft Solutions | Loft Insulation Services UK",
  description: "Professional insulation and loft services for housing associations across the UK. Specialised solutions for social housing, multi-unit properties, and housing-association standards.",
  keywords: ["housing association insulation", "social housing insulation", "housing association services", "UK housing association", "multi-unit insulation", "social housing services"],
};

export default function HousingAssociationsPage() {
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
              Housing Associations
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Tailored Insulation & Loft Solutions for social housing, multi-unit properties, and housing-association standards
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
                Maintaining safe, efficient, and comfortable homes for tenants is a core responsibility of any housing association. At Loft Insulation Services UK, we deliver specialised insulation, loft and roof, and energy-efficiency services designed with social housing, multi-unit properties, and housing-association standards in mind. Our comprehensive solutions help housing associations reduce energy costs, meet building regulations, improve tenant comfort, and extend the lifespan of properties — all while keeping maintenance overhead manageable.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you manage a portfolio of detached homes, terraced houses, flats above ground floors, or blocks with multiple units — our services are flexible, scalable, and tailored to meet the unique needs of each property under your care.
              </p>
            </div>

            {/* Why Housing Associations Benefit */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Housing Associations Benefit from Professional Loft & Insulation Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Housing associations face specific challenges, including:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Diverse building types: from older Victorian conversions to newer builds</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>A mix of occupied and vacant properties under management</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Need to comply with energy-efficiency standards and building regulations</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Responsibility for tenant comfort, safety, and long-term property value</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Managing cost-efficiency across multiple dwellings or units</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-semibold">By investing in high-quality insulation and loft/roof solutions, housing associations gain:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Reduced energy bills and heating costs — lowering service charges or costs for tenants</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Better indoor comfort — consistent temperatures, fewer cold spots, less damp</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Lower maintenance costs — fewer repairs, damp issues, or structural damage over time</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Improved property condition and compliance with modern housing standards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span>Enhanced tenant satisfaction and long-term property value</span>
                </li>
              </ul>
            </div>

            {/* Our Housing-Association Services Portfolio */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Housing-Association Services Portfolio</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We offer a broad suite of services tailored for social housing, multi-unit dwellings, and housing-association portfolios. These can be applied individually or bundled as part of an energy-efficiency or renovation project.
              </p>

              {/* Loft & Roof Insulation */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <Home className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Loft & Roof Insulation Services</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Loft floor insulation for unoccupied attic space to reduce heat loss</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Roof-rafter insulation for properties with converted lofts or occupied attic rooms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Insulation upgrades and replacement for older properties with outdated insulation</span>
                  </li>
                </ul>
              </div>

              {/* Cavity Wall & Floor Insulation */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 mb-6">
                <div className="flex items-center mb-4">
                  <Building2 className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Cavity Wall & Floor Insulation</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Filling cavity walls in homes with cavity construction to reduce heat leakage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Floor insulation for houses or flats with cold floors — improving warmth and comfort for tenants</span>
                  </li>
                </ul>
              </div>

              {/* Loft Clearance & Preparation */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Trash2 className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Loft Clearance & Preparation</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Safe clearance of clutter, old storage items, or outdated insulation before upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Cleaning and preparation to ensure loft spaces are safe, accessible, and ready for work</span>
                  </li>
                </ul>
              </div>

              {/* Loft Boarding & Storage */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 mb-6">
                <div className="flex items-center mb-4">
                  <Box className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Loft Boarding & Storage / Loft Conversion Preparation</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Installation of safe, durable loft boarding for added storage or future conversion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Reinforced boarding for heavier usage or storage — suitable for associations that allow tenant use of lofts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Safe access solutions (ladders, hatches) and compliance with safety standards</span>
                  </li>
                </ul>
              </div>

              {/* Insulation Removal & Replacement */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 mb-6">
                <div className="flex items-center mb-4">
                  <RefreshCw className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Insulation Removal & Replacement</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Removal of damaged, damp, or degraded insulation that may pose health risks or reduce thermal efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Replacement with modern, energy-efficient insulation materials compliant with fire and building regulations</span>
                  </li>
                </ul>
              </div>

              {/* Ventilation & Damp Control */}
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500">
                <div className="flex items-center mb-4">
                  <Droplets className="h-6 w-6 text-indigo-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Ventilation, Damp Control & Building Integrity Checks</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Assessment of ventilation, roof vents / soffits to prevent condensation and damp</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Moisture control and prevention measures for older buildings or properties with known damp issues</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Regular inspection and maintenance services to keep insulation and roof integrity intact</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Why Housing Associations Should Partner With Us */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Housing Associations Should Partner With Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Users className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Expertise with Multi-Unit Housing and Social Properties</h3>
                      <p className="text-gray-700">We understand the complexities of housing-association portfolios, including varied building types, occupancy levels, tenant turnover, and regulations. Our services are designed to fit these needs without disrupting tenants.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Compliance with Safety, Quality & Building Standards</h3>
                      <p className="text-gray-700">All materials and installations meet relevant UK building regulations, fire-safety standards, and energy-efficiency guidelines — ensuring long-term compliance and safety.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <TrendingDown className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Cost-Efficient Solutions for Large Portfolios</h3>
                      <p className="text-gray-700">We offer scalable services, bulk scheduling, and professional execution — helping associations manage multiple properties efficiently and economically.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Award className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Tenant Comfort & Satisfaction</h3>
                      <p className="text-gray-700">Improved insulation, better indoor temperatures, lower heating costs, and safer loft spaces — all add to tenant comfort, satisfaction, and retention.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300 md:col-span-2">
                  <div className="flex items-start mb-3">
                    <Clock className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Long-Term Value and Reduced Maintenance Overhead</h3>
                      <p className="text-gray-700">Quality insulation and roof work reduces risk of damp, structural decay, high heating demand, and frequent repairs — offering long-term savings for housing associations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Working Process */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Working Process for Housing Associations</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <div className="flex items-start">
                    <div className="bg-primary-blue rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Initial Bulk or Individual Property Survey</h3>
                      <p className="text-gray-700">We perform detailed inspections — per property or across a portfolio — assessing loft/roof condition, insulation status, wall and floor structure, ventilation, and any hazards (damp, leaks, outdated materials).</p>
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
                      <p className="text-gray-700">Based on the survey, we provide a clear quotation: scope of work, suggested insulation or upgrades, timeframes, cost breakdown, and any follow-up maintenance plans — no hidden fees or surprises.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <div className="flex items-start">
                    <div className="bg-purple-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Installation with Minimal Disruption</h3>
                      <p className="text-gray-700">Our teams schedule work to avoid inconveniencing tenants. We can work in phases, during off-peak hours, or group properties to optimize logistics — ensuring minimal disruption to residents.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500">
                  <div className="flex items-start">
                    <div className="bg-orange-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Post-Work Inspection & Compliance Reporting</h3>
                      <p className="text-gray-700">After work is complete, we perform inspections for ventilation, moisture control, insulation coverage, structural integrity, and submit a compliance report for your records.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                  <div className="flex items-start">
                    <div className="bg-teal-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Optional Long-Term Maintenance & Aftercare</h3>
                      <p className="text-gray-700">We offer maintenance packages — periodic inspections, ventilation checks, roof/hatch maintenance, insulation audits — helping you keep all properties in optimal condition over time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Who Should Use */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who Should Use These Services?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our services are ideally suited to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Housing associations managing mixed housing types (terraced houses, semi-detached, flats, converted loft apartments)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Social housing providers aiming to reduce tenant heating costs and improve comfort</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Landlords with multiple properties wanting efficient, compliant insulation upgrades</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Property managers overseeing refurbishment or renovation programmes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Associations preparing for energy-efficiency audits, compliance reviews, or regulatory inspections</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Organizations seeking long-term maintenance and asset preservation</span>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Housing Associations & Insulation Services (Top 5)</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>Can you work on occupied properties without disturbing tenants?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. We plan carefully to minimize disruption and can schedule work around tenant availability. For larger projects, we can phase installation or work off-hours to ensure tenant convenience.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>Do you provide documentation or compliance certificates for completed work?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Absolutely. After completion, we supply full reports detailing insulation type, thickness, ventilation compliance, and confirmation that all safety and building standards have been met — ideal for audits or record-keeping.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Will insulation upgrades reduce heating costs for tenants?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. Properly installed insulation significantly reduces heat loss through roofs, walls, and floors — leading to lower heating requirements and reduced energy bills, which can benefit tenants directly or reduce cost burdens on the housing association.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>Can you upgrade insulation in older properties with potential damp or structural issues?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. We include inspection for damp, leaks, ventilation, and structural integrity. If problems are detected, we recommend or carry out necessary repairs or ventilation improvements before insulation to ensure long-term safety and effectiveness.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>Is maintenance necessary after installation?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Minimal maintenance is needed. Periodic checks are recommended — particularly ventilation, roof integrity, and damp prevention. With regular maintenance and inspections, insulation can last decades, preserving energy efficiency and structural health.
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
                  Ready to Improve Your Housing Association Properties?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional insulation and loft services tailored to housing associations.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Let us help you reduce energy costs, improve tenant comfort, and ensure regulatory compliance across your portfolio.
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
