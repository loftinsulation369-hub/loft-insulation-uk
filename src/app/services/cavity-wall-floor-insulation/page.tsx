import type { Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, Quote, Phone, Home, Shield, Sparkles, AlertTriangle, ClipboardCheck, Wrench, TrendingDown, Leaf, Droplets, Award, Building2, Thermometer, Zap, HelpCircle, Package, DollarSign, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: "Cavity Wall & Floor Insulation | Loft Insulation Services UK",
  description: "Professional cavity wall and floor insulation services across the UK. Improve heat retention, reduce energy bills, and create a warmer, more efficient home.",
  keywords: ["cavity wall insulation", "floor insulation", "wall insulation", "UK insulation services", "cavity wall", "floor insulation UK"],
};

export default function CavityWallFloorInsulationPage() {
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
              Cavity Wall & Floor Insulation Services
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Improve heat retention, reduce your energy bills, and create a warmer, more efficient home with our expert insulation services.
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
                We offer a comprehensive package for cavity wall and floor insulation — from assessment to installation, finishing, and after-care. Our goal is to deliver effective, safe, and long-lasting insulation tailored to your home's structure.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Improve heat retention, reduce your energy bills, and create a warmer, more efficient home with our expert cavity wall and floor insulation services. Whether you are a homeowner, landlord, or property developer, high-quality insulation is one of the most effective upgrades you can make to any property.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                At Loft Insulation Services UK, we specialise in safe, compliant, and high-performance insulation solutions that deliver long-term savings and enhanced comfort.
              </p>
            </div>

            {/* What Is Cavity Wall Insulation */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-6">
                <Building2 className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Is Cavity Wall Insulation?</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cavity wall insulation is designed for properties built with a hollow cavity between the inner and outer walls. The insulation material is injected into this gap to prevent heat from escaping your building.
              </p>
            </div>

            {/* Key Benefits of Cavity Wall Insulation */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Key Benefits of Cavity Wall Insulation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <TrendingDown className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Reduces heat loss by up to 35%</span>
                </div>
                <div className="flex items-start">
                  <Zap className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Lowers monthly energy bills</span>
                </div>
                <div className="flex items-start">
                  <Thermometer className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Maintains consistent indoor temperature</span>
                </div>
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Improves property EPC rating</span>
                </div>
                <div className="flex items-start">
                  <Droplets className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Reduces condensation and damp</span>
                </div>
                <div className="flex items-start">
                  <Leaf className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Environmentally friendly and long-lasting</span>
                </div>
              </div>
            </div>

            {/* Signs Your Home Needs Cavity Wall Insulation */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Signs Your Home Needs Cavity Wall Insulation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">You may need new or upgraded insulation if you notice:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Cold rooms even when heating is on</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>High energy bills</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Cold spots on interior walls</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Condensation or mould patches</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Difficulty maintaining consistent warmth</span>
                </li>
              </ul>
            </div>

            {/* How Our Cavity Wall Insulation Works */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">How Our Cavity Wall Insulation Works</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We follow a professional and highly controlled installation process:
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Installation</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-5 shadow-md">
                    <div className="flex items-start">
                      <div className="bg-primary-blue rounded-full p-2 mr-4 flex-shrink-0">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Property Survey & Thermal Assessment</h4>
                        <p className="text-gray-700">Our specialists inspect wall structure, cavity depth, ventilation, and existing insulation if present.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-md">
                    <div className="flex items-start">
                      <div className="bg-primary-blue rounded-full p-2 mr-4 flex-shrink-0">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Drilling Micro-Holes</h4>
                        <p className="text-gray-700">Small, unnoticeable holes are created along the wall.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-md">
                    <div className="flex items-start">
                      <div className="bg-primary-blue rounded-full p-2 mr-4 flex-shrink-0">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Injecting Insulation Material</h4>
                        <p className="text-gray-700">Using specialist equipment, insulation is blown into the cavity evenly.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-md">
                    <div className="flex items-start">
                      <div className="bg-primary-blue rounded-full p-2 mr-4 flex-shrink-0">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Sealing & Cleaning</h4>
                        <p className="text-gray-700">The holes are sealed with colour-matched mortar for a clean look.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-md">
                    <div className="flex items-start">
                      <div className="bg-primary-blue rounded-full p-2 mr-4 flex-shrink-0">
                        <span className="text-white font-bold">5</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality & Safety Inspection</h4>
                        <p className="text-gray-700">Final checks ensure your insulation meets UK safety and performance standards.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What Is Floor Insulation */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-6">
                <Home className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Is Floor Insulation?</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Floor insulation prevents heat loss through suspended floors, ground floors, or concrete slabs. It creates a thermal barrier that keeps warm air inside and cold air out.
              </p>
            </div>

            {/* Benefits of Floor Insulation */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Benefits of Floor Insulation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Reduced heat loss through floors</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Warmer rooms and improved comfort</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Lower heating bills</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Reduced draughts</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Noise reduction between floors</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Suitable for houses, bungalows, and new builds</span>
                </div>
              </div>
            </div>

            {/* Types of Floor Insulation */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Types of Floor Insulation We Install</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Suspended Timber Floors</h3>
                  <p className="text-gray-700 mb-3">Ideal for older UK homes:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                      <span>Mineral wool rolls</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                      <span>Rigid insulation boards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                      <span>Breathable membrane protection</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Solid Concrete Floors</h3>
                  <p className="text-gray-700 mb-3">For modern homes:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Rigid foam boards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Insulated overlays</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Under-screed thermal boards</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Underfloor Insulation for Extensions</h3>
                  <p className="text-gray-700">Perfect for new construction or refurbishments.</p>
                </div>
              </div>
            </div>

            {/* Our Floor Insulation Installation Process */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Floor Insulation Installation Process</h2>
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Inspect sub-floor structure</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Remove floorboards if required</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Install breathable membranes</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Fit insulation material securely</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Seal edges and reduce air leakage</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Refit boards for a clean finish</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Choose Us for Insulation?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We provide a full-service, professional, and certified solution:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Award className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Qualified & Accredited Installers</h3>
                      <p className="text-gray-700">Our team is certified and trained to the highest standards.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Sparkles className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Latest Insulation Materials</h3>
                      <p className="text-gray-700">We use only the most advanced, high-performance insulation products.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Shield className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Guaranteed Workmanship</h3>
                      <p className="text-gray-700">All our work comes with comprehensive guarantees for your peace of mind.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Zap className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Installation with Minimal Disruption</h3>
                      <p className="text-gray-700">We complete installations quickly and efficiently, minimizing disruption to your daily life.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <Home className="h-6 w-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Tailored Solutions for Every Property</h3>
                      <p className="text-gray-700">Each installation is customized to your specific property and needs.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-3">
                    <TrendingDown className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Clear Pricing & No Hidden Charges</h3>
                      <p className="text-gray-700">Transparent quotes with no surprises — you know exactly what you're paying for.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-gradient-to-r from-primary-blue/10 to-secondary-blue/10 rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-gray-900">Thousands of UK homes upgraded</p>
              </div>
            </div>

            {/* Materials We Use */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-6">
                <Package className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Cavity Wall & Floor Insulation Materials We Use</h2>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">We Work With Premium Materials</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Mineral wool</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Blown-fibre insulation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                    <span className="text-gray-700">EPS bead insulation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                    <span className="text-gray-700">PIR foam boards</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Natural eco-friendly materials (on request)</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">All materials comply with:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                      <span>UK building regulations</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                      <span>Fire safety standards</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                      <span>Energy efficiency guidelines</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cost, Savings & Payback Period */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-6">
                <DollarSign className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Cost, Savings & Payback Period</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Typical Benefits</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <TrendingDown className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Save up to 30–40% on heating bills</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Payback period usually 2–4 years</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Increased property value</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Better EPC rating</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Costs vary depending on:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                      <span>Floor type</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                      <span>Wall cavity width</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                      <span>Material selection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                      <span>Property size</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Long-Term Performance */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Long-Term Performance & Maintenance</h2>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Once installed, insulation lasts 30–50+ years. It requires almost no maintenance and continues performing effectively for decades.
                </p>
              </div>
            </div>

            {/* Get a Free Survey */}
            <div className="bg-gradient-to-r from-primary-blue/10 to-secondary-blue/10 rounded-3xl p-8 md:p-12 border-2 border-primary-blue/20">
              <div className="flex items-center mb-6">
                <ClipboardCheck className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get a Free Survey & Quote Today</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">Our experts provide:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Free thermal assessment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Free property inspection</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Free insulation recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Fast installation booking</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                Contact us today and upgrade your home with high-quality cavity wall and floor insulation.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <HelpCircle className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs – Cavity Wall & Floor Insulation</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">1.</span>
                    <span>Is cavity wall insulation suitable for all homes?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    No. It is recommended mainly for homes built after 1920 with unfilled wall cavities. We carry out a pre-survey to confirm suitability.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">2.</span>
                    <span>How long does installation take?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Most cavity wall insulation jobs take 2–3 hours. Floor insulation may take 1 day depending on access.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">3.</span>
                    <span>Will insulation reduce damp or condensation?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes, properly installed insulation helps reduce cold spots that cause condensation. However, if your property has structural damp, it must be treated first.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">4.</span>
                    <span>Does floor insulation help with noise?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    Yes, mineral wool floor insulation significantly reduces sound transfer between floors.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">5.</span>
                    <span>How long does insulation last?</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-8">
                    High-quality insulation typically lasts over 30–50 years with no maintenance.
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
                  Ready to Improve Your Home's Insulation?
                </h3>
                <p className="text-xl md:text-2xl mb-4 opacity-95">
                  Get a free, no-obligation quote for professional cavity wall and floor insulation services today.
                </p>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                  Let us help you reduce energy bills and create a warmer, more comfortable home.
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
