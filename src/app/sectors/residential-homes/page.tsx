import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, AlertTriangle, ClipboardCheck, Wrench, TrendingDown, Leaf, Droplets, Trash2, RefreshCw, Building2, Box, HelpCircle, FileText, ArrowRight, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: "Residential Homes — Tailored Insulation & Loft Services | Loft Insulation Services UK",
  description: "Professional insulation and loft services for residential homes across the UK. Tailored solutions for homeowners and landlords to improve comfort, energy efficiency, and safety.",
  keywords: ["residential insulation", "home insulation", "residential loft services", "UK home insulation", "residential insulation services", "home loft insulation"],
};

export default function ResidentialHomesPage() {
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
              Residential Homes
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Tailored Insulation & Loft Services for homeowners and landlords across the UK
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
                Whether you own a family home, a semi-detached house, a bungalow, or a larger property, maintaining comfort, energy efficiency, and safety should be a top priority. At Loft Insulation Services UK, our Residential Homes sector is dedicated to serving homeowners and landlords with a complete suite of insulation, loft-boarding, clearance, and roof services — designed to meet the unique needs of residential properties across the UK.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand that no two homes are identical. That&apos;s why our solutions are bespoke: we evaluate each home&apos;s structure, age, layout and heating requirements to recommend the most effective combination of insulation, ventilation, and loft conversion services.
              </p>
            </div>

            {/* Why Residential Homes Benefit */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Residential Homes Benefit from Professional Loft & Insulation Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Many residential properties — old and new — suffer from issues such as poor insulation, heat loss, cold drafts, damp, inefficient heating systems, or under-utilised loft space. Our services help address these problems and deliver long-term improvements:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Better temperature regulation throughout the year — warm in winters and more stable in summers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Lower heating bills and energy consumption</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Increased comfort and improved living conditions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Reduced damp, condensation and associated health risks</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Well-insulated, energy-efficient homes that meet modern building standards</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Safe, clean loft spaces ready for storage or conversion</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                We offer specialist solutions whether you&apos;re updating an older home, renovating, or simply want to increase efficiency and comfort without major structural changes.
              </p>
            </div>

            {/* Our Residential Services Overview */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Residential Services Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Within the Residential Homes sector, we provide a wide range of services tailored to meet homeowners needs — all under one roof.
              </p>

              {/* Loft Insulation & Roof Services */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <Home className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Loft Insulation & Roof Services</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Loft floor insulation to reduce heat loss through ceilings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Roof-rafter insulation for insulated roof structures — ideal for loft conversions or occupied attic spaces</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Insulation upgrades and replacement for old or degraded insulation</span>
                  </li>
                </ul>
              </div>

              {/* Loft Clearance & Preparation */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 mb-6">
                <div className="flex items-center mb-4">
                  <Trash2 className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Loft Clearance & Preparation</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Safe removal of storage, old insulation or debris</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Clearance of rubbish, unused items, or damaged materials</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Loft cleaning and preparation before insulation or boarding begins</span>
                  </li>
                </ul>
              </div>

              {/* Loft Boarding & Storage Conversion */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
                <div className="flex items-center mb-4">
                  <Box className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Loft Boarding & Storage Conversion</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Installation of strong, safe floor boarding to create usable storage area</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Optional loft ladder or stair installation for easy access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Loft storage solutions for seasonal items, luggage, documents, or household goods</span>
                  </li>
                </ul>
              </div>

              {/* Cavity Wall & Floor Insulation */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 mb-6">
                <div className="flex items-center mb-4">
                  <Building2 className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Cavity Wall & Floor Insulation</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Filling cavity walls to reduce heat loss through walls</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Floor insulation for suspended timber floors, concrete slabs or ground floors — improving warmth and comfort underfoot</span>
                  </li>
                </ul>
              </div>

              {/* Insulation Removal & Replacement */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                <div className="flex items-center mb-4">
                  <RefreshCw className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Insulation Removal & Replacement</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Removal of damp, degraded, or damaged insulation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Safe disposal of old materials and debris</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Replacement with modern, high-performance insulation solutions</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mt-8">
                Each of these services can be delivered singly — or combined into a comprehensive renovation package tailored to your home&apos;s needs and your energy-efficiency goals.
              </p>
            </div>

            {/* Benefits for Homeowners and Landlords */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Benefits for Homeowners and Landlords</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Investing in professional loft and insulation services offers a broad array of advantages for those living in or managing residential properties.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <TrendingDown className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Reduced energy bills and heating costs</strong> — Lower heating demand thanks to effective insulation.</span>
                </div>
                <div className="flex items-start">
                  <Home className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Improved home comfort</strong> — Even, stable indoor temperatures, fewer cold spots, reduced draughts.</span>
                </div>
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Enhanced property value and market appeal</strong> — Well-insulated and efficient homes are more attractive to buyers and renters.</span>
                </div>
                <div className="flex items-start">
                  <Droplets className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Healthier indoor environment</strong> — Reduced risk of damp, mould, and condensation; better air quality.</span>
                </div>
                <div className="flex items-start">
                  <Box className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Unlocking loft space</strong> — Storage or converted attic floors can reclaim square footage for practical use, improving living space or storage capacity.</span>
                </div>
                <div className="flex items-start">
                  <Leaf className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Sustainability and lower carbon footprint</strong> — Reduced energy consumption helps with environmental responsibility.</span>
                </div>
                <div className="flex items-start md:col-span-2">
                  <Shield className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Compliance with modern building regulations</strong> — Meets energy-efficiency and safety standards required for contemporary homes.</span>
                </div>
              </div>
            </div>

            {/* Our Approach */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Approach: How We Work with Residential Clients</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <div className="flex items-start">
                    <div className="bg-primary-blue rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Detailed Home Survey & Assessment</h3>
                      <p className="text-gray-700">Every project begins with a thorough inspection of your home — from loft structure to wall types, existing insulation, ventilation, and heating system. This helps us tailor our recommendations to your home&apos;s specific needs.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                  <div className="flex items-start">
                    <div className="bg-green-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Quotation & Planning</h3>
                      <p className="text-gray-700">You receive a clear quote outlining recommended works, materials, cost breakdown, expected energy savings, and timelines — with no hidden fees.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <div className="flex items-start">
                    <div className="bg-purple-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Professional, Certified Installation</h3>
                      <p className="text-gray-700">All work is carried out by qualified, experienced installers who follow safety protocols, building regulations, and best practices in insulation, ventilation, and loft conversion.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500">
                  <div className="flex items-start">
                    <div className="bg-orange-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Integrated, Multi-Service Delivery</h3>
                      <p className="text-gray-700">We coordinate multiple services — insulation, boarding, clearance, roof work — so your home upgrade is seamless, efficient, and cost-effective.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                  <div className="flex items-start">
                    <div className="bg-teal-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Post-Installation Inspection & Customer Support</h3>
                      <p className="text-gray-700">Once work is done, we complete a final inspection, provide guidance on maintenance, and ensure you understand how to get the most benefit from your upgraded, insulated home.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Who Should Consider */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who Should Consider Our Residential Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Homeowners living in older houses or properties with outdated insulation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Families seeking to reduce heating costs and improve indoor comfort</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Landlords who want to increase the value and marketability of their rental properties</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Owners planning loft conversions, attic storage, or roof repairs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Anyone looking for a cost-effective, long-term way to improve home energy efficiency</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">People aiming to reduce damp, condensation, or cold-spot issues in their homes</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you live in a Victorian-era semi-detached house, post-war bungalow, modern build, or converted loft apartment — our services can be tailored to match your home&apos;s design and requirements.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Residential Homes Services (Top 5)</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>How quickly can you upgrade a home&apos;s insulation and loft services?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Depending on the type and scale of work, most standard upgrades (insulation, loft boarding, basic clear-out) can be completed within one to two days. More extensive work — such as full insulation, loft conversion readiness or multiple service combination — may take several days.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>Do you handle both small homes and large properties?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. We work with all types of residential properties — from small cottages and terraced houses to large detached homes and bungalows. Our solutions are scaled to suit your home&apos;s size and structure.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Will insulation and boarding disrupt living during installation?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    We strive to minimise disruption. Most jobs cause little to no disturbance beyond some noise and minor dust. We use protective coverings where necessary and clean up thoroughly after the work is done.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>Can loft insulation and boarding increase property value?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Absolutely. Improved insulation, usable loft space, better energy efficiency, and overall comfort make homes more attractive to buyers and renters. Many see higher resale value and quicker rentals once upgrades are complete.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>What kind of energy savings can I expect?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Savings depend on the property type, existing insulation levels, heating use, and insulation materials chosen. Many homeowners see noticeable reductions in heating bills and more consistent indoor temperatures — often paying back the cost of installation within a few years.
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
                  Ready to Improve Your Home&apos;s Energy Efficiency?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional residential insulation and loft services today.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Let us help you create a more comfortable, energy-efficient home with tailored insulation solutions.
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
