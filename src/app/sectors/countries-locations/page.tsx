import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, MapPin, Globe, Users, Award, Clock, Zap, HelpCircle, FileText, ArrowRight, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Countries & Locations – Nationwide Service Coverage | Loft Insulation Services UK",
  description: "Professional insulation and loft services across the UK. Nationwide coverage including England, Scotland, Wales, and Northern Ireland.",
  keywords: ["UK insulation services", "nationwide insulation", "UK coverage", "insulation services UK", "loft insulation UK", "UK locations"],
};

export default function CountriesLocationsPage() {
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
              Countries & Locations
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Nationwide Service Coverage Across the UK
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
                At Loft Insulation Services UK, we believe high‑quality insulation and loft services should be available everywhere — whether you live in a major city, a suburban neighbourhood, or a rural village. That&apos;s why our &quot;Countries & Locations&quot; page outlines the regions and areas we cover across the UK — ensuring you can access certified, professional insulation, loft, and energy‑efficiency services no matter where you are based.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you live in London, Manchester, Glasgow, Cardiff, Belfast or anywhere in between — or in a smaller town or rural location — our network of certified installers and service teams is spread across the United Kingdom, ready to deliver prompt, reliable service.
              </p>
            </div>

            {/* Our Nationwide Coverage */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Nationwide Coverage</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We deliver our services across the entire UK, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border-l-4 border-primary-blue">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-primary-blue mr-3" />
                    <h3 className="text-lg font-bold text-gray-900">England</h3>
                  </div>
                  <p className="text-gray-700">All regions — Greater London, South East, Midlands, North, South West, etc.</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border-l-4 border-green-500">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-green-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-900">Scotland</h3>
                  </div>
                  <p className="text-gray-700">Central belt and beyond</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border-l-4 border-purple-500">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-purple-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-900">Wales</h3>
                  </div>
                  <p className="text-gray-700">South, north, and mid‑regions</p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-5 border-l-4 border-orange-500">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-orange-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-900">Northern Ireland</h3>
                  </div>
                  <p className="text-gray-700">Where feasible</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-semibold">We cater to:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Urban areas — cities and towns</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Suburban and commuter belt areas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Rural locations and villages</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Detached houses, semi‑detached houses, terraced homes, bungalows, flats — old or new</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                No matter where you are located, you can request a survey, quote, or installation from our team.
              </p>
            </div>

            {/* How Our Location-Based Service Works */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">How Our Location-Based Service Works</h2>
              
              {/* Local Installer Network */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Local Installer Network</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>We maintain a network of certified installers across the UK — enabling us to dispatch the closest qualified team to your address.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Local teams understand the regional building types, typical loft/roof construction styles, and local regulations — which helps ensure smooth installation with minimal delays.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>This network ensures reduced travel time, quicker response, and local knowledge for better service delivery.</span>
                  </li>
                </ul>
              </div>

              {/* Simple Coverage Check */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 mb-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Simple Coverage Check</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>On our contact/quote page, just provide your postcode. We check whether you are within our service area.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>If yes — we schedule a free survey and site visit at your convenience.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>If no direct coverage, we evaluate potential subcontractors or refer you to trusted local partners (where feasible) to ensure you still receive quality service.</span>
                  </li>
                </ul>
              </div>

              {/* Flexible Scheduling */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Flexible Scheduling & Service for Remote or Difficult-to-Access Areas</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Even remote or less-accessible properties can be serviced. We plan logistics carefully to reach remote postcodes without compromising on quality.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>For rural homes, we offer flexible scheduling — bundling with nearby jobs to optimize travel, or scheduling during off-peak times for convenience.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Why Broad Coverage Matters */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Broad Coverage Matters for You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <MapPin className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Access to Trusted Installers Wherever You Are</h3>
                      <p className="text-gray-700">You don&apos;t need to hunt for a local insulation contractor — we bring certified professionals to your doorstep, regardless of location.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Award className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Consistent Quality Across All Regions</h3>
                      <p className="text-gray-700">Whether your home is in a big city or a small village, you get the same high standards, materials, installation process, and guarantees.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Zap className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Save Time & Hassle — No Need to Source Locally</h3>
                      <p className="text-gray-700">Avoid searching multiple local contractors, comparing standards, or worrying about compliance. We handle everything from survey to final inspection.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Users className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Ideal for Landlords, Property Managers or Multi‑Property Owners</h3>
                      <p className="text-gray-700">If you manage multiple properties across different regions, our nationwide reach simplifies logistics — one point of contact for consistent service everywhere.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300 md:col-span-2">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Future‑Proof Service — Even for Moving or New Addresses</h3>
                      <p className="text-gray-700">Because of our wide coverage, you can continue to rely on us if you move home, buy a second property, or manage properties in different parts of the country.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Manage Service Logistics */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">How We Manage Service Logistics & Quality at Scale</h2>
              
              {/* Central Coordination */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-primary-blue mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Central Coordination & Quality Control</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>A central office coordinates job scheduling, installer allocation, compliance checks, and follow-up support to ensure consistency across all locations.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Installer certification and regular training ensure that regardless of region, workmanship and service standards remain uniform.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <span>Post‑installation audits and quality checks are standard — we monitor customer feedback, performance, and service outcomes across all serviced regions.</span>
                  </li>
                </ul>
              </div>

              {/* Transparent Service Coverage */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 mb-6">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Transparent Service Coverage & Clear Communication</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Our website — including this page — makes it clear which regions are covered.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>When you request a quote, you receive an immediate confirmation if your address falls within our service area.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>If there are exceptional cases (remote or under‑serviced regions), we communicate clearly about possible delays or logistics — no hidden surprises.</span>
                  </li>
                </ul>
              </div>

              {/* Adaptable to Local Building Types */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <Home className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Adaptable to Local Building Types & Regulations</h3>
                </div>
                <ul className="space-y-2 text-gray-700 ml-9">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Installer teams are familiar with regional building styles — terraced housing common in northern England, detached homes in suburbs, older roofs in rural Wales/Scotland, etc.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Materials, insulation types, and recommended solutions are tailored to local climate, common building fabric, and property type — ensuring optimal performance and compliance.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Who Benefits Most */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who Benefits Most From Our Nationwide Coverage</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Homeowners in any region — city, suburb or rural — who seek professional insulation, loft or roof services.</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Landlords and property managers with portfolios across multiple regions — especially those owning properties in different cities or rural areas.</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Housing associations or organisations managing many properties across the UK — they get a standardised service delivery model and single point of contact.</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Homebuyers or people moving — ensures that your insulation/loft service provider remains the same even if you move location within the UK.</span>
                </div>
                <div className="flex items-center md:col-span-2">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Anyone wanting certified installers, compliance with regulations, and high‑quality installation — regardless of where they are based.</span>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs — Service Coverage, Locations & Accessibility</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>Do you service remote or rural areas as well as cities?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. Our network covers rural, suburban, and urban areas across the entire UK. We plan logistics carefully to reach remote postcodes, sometimes combining with nearby jobs to ensure efficient service.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>What if I live outside your standard coverage area?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    When you request a quote, we verify your postcode. If direct coverage isn&apos;t available, we evaluate whether we can dispatch a subcontractor or trusted partner. If not feasible, we guide you to nearest alternatives while maintaining our service standards.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>How do I check if you cover my area?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Simply enter your postcode on our quote or contact form. We&apos;ll confirm availability and contact you with a free survey date — or advise if we can&apos;t service your location.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>Are the service standards the same across all regions?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes. All our certified installers follow the same training, safety protocols, and installation procedures. We ensure consistent quality, materials, and compliance regardless of location.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>Can you manage multiple properties across different regions (e.g. for landlords or property managers)?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Absolutely. We&apos;re equipped to handle portfolios across cities, towns, and rural areas — offering central coordination, consistent service, bulk scheduling, and standardised reporting/documentation.
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
                  Ready to Get Started?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional insulation and loft services in your area.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Enter your postcode to check coverage and schedule a free survey today.
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
