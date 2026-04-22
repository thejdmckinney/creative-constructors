'use client'

import type { Metadata } from "next";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { seoConfig } from "@/seo.config";

export default function HomeShieldPage() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual'>('annual');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/home-shield-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          plan: selectedPlan
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit sign-up');
      }

      const data = await response.json();
      
      // Redirect to Stripe payment
      if (data.stripePaymentUrl) {
        window.location.href = data.stripePaymentUrl;
      } else {
        setSubmitSuccess(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your sign-up. Please try again or call (817) 470-1889 directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-royal-blue to-navy text-white py-20 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-block bg-orange/20 backdrop-blur-sm border border-orange/30 rounded-full px-6 py-2 mb-6">
              <span className="text-orange font-bold">🛡️ Introducing Home Shield</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black font-barlow-condensed mb-6 leading-tight">
              The Creative Constructors<br />
              <span className="text-orange">Home Shield</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-silver mb-4 font-light italic">
              Your Home. Watched Over. Year Round.
            </p>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Skip the stress of home maintenance. Get expert quarterly inspections, 
              priority service, and direct access to Jeremy—all for one predictable monthly price.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#pricing"
                onClick={() => setSelectedPlan('monthly')}
                className="group bg-white hover:bg-gray-100 text-navy font-bold py-5 px-10 rounded-lg transition-all text-lg shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
              >
                <div className="flex items-center justify-center gap-2">
                  <span>Start Monthly</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="text-sm text-gray-600 mt-1">$249/month</div>
              </a>
              
              <a
                href="#pricing"
                onClick={() => setSelectedPlan('annual')}
                className="group bg-orange hover:bg-orange/90 text-white font-bold py-5 px-10 rounded-lg transition-all text-lg shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto relative"
              >
                <div className="absolute -top-3 -right-3 bg-yellow-400 text-navy text-xs font-black px-3 py-1 rounded-full">
                  SAVE $288
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>Go Annual</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="text-sm text-orange-100 mt-1">$2,688/year</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4 text-center">
            What's Included
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Four comprehensive quarterly visits throughout the year to keep your home in peak condition.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Q1 - Electrical Safety Walk */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-orange p-8 group">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange/20 transition-colors">
                <span className="text-4xl">⚡</span>
              </div>
              <div className="text-sm font-bold text-orange mb-2">Q1 VISIT</div>
              <h3 className="text-xl font-bold text-navy mb-3">Electrical Safety Walk</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✓ Panel inspection</li>
                <li>✓ Outlet & switch check</li>
                <li>✓ GFCI testing</li>
                <li>✓ Safety hazard scan</li>
              </ul>
            </div>

            {/* Q2 - Plumbing Inspection */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-orange p-8 group">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange/20 transition-colors">
                <span className="text-4xl">🚰</span>
              </div>
              <div className="text-sm font-bold text-orange mb-2">Q2 VISIT</div>
              <h3 className="text-xl font-bold text-navy mb-3">Plumbing Inspection</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✓ Leak detection</li>
                <li>✓ Water pressure test</li>
                <li>✓ Drain flow check</li>
                <li>✓ Water heater review</li>
              </ul>
            </div>

            {/* Q3 - HVAC Assessment */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-orange p-8 group">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange/20 transition-colors">
                <span className="text-4xl">❄️</span>
              </div>
              <div className="text-sm font-bold text-orange mb-2">Q3 VISIT</div>
              <h3 className="text-xl font-bold text-navy mb-3">HVAC Assessment</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✓ System performance</li>
                <li>✓ Filter inspection</li>
                <li>✓ Thermostat check</li>
                <li>✓ Efficiency review</li>
              </ul>
            </div>

            {/* Q4 - Crawlspace & Attic Check */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-orange p-8 group">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange/20 transition-colors">
                <span className="text-4xl">🏠</span>
              </div>
              <div className="text-sm font-bold text-orange mb-2">Q4 VISIT</div>
              <h3 className="text-xl font-bold text-navy mb-3">Crawlspace & Attic Check</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✓ Moisture detection</li>
                <li>✓ Insulation review</li>
                <li>✓ Pest inspection</li>
                <li>✓ Structural check</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Every Visit */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4">
              More Than Just Inspections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every quarterly visit includes professional maintenance tasks and on-the-spot small repairs—real value you can count on.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Small Repairs Included */}
            <div className="bg-gradient-to-br from-orange/5 to-white rounded-xl shadow-lg p-8 border-2 border-orange/20">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Small Repairs Included</h3>
              <p className="text-gray-600 mb-4">Fixed on the spot during your visit:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>Outlet & switch replacements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>Minor leak repairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>Toilet adjustments & flapper fixes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>Clogged drain line clearing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>Loose fixture tightening</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>Door & cabinet adjustments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>Caulking touchups</span>
                </li>
              </ul>
            </div>

            {/* Quarterly Maintenance */}
            <div className="bg-gradient-to-br from-orange/5 to-white rounded-xl shadow-lg p-8 border-2 border-orange/20">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Quarterly Maintenance</h3>
              <p className="text-gray-600 mb-4">Done every single visit:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>HVAC filter replacement (provided by us)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>Smoke & CO detector battery replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>Condensate line clearing & treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>Garbage disposal cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>Showerhead & faucet aerator cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>Weather stripping inspection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>Exterior caulking inspection</span>
                </li>
              </ul>
            </div>

            {/* Member Perks */}
            <div className="bg-gradient-to-br from-orange/5 to-white rounded-xl shadow-lg p-8 border-2 border-orange/20">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Exclusive Member Perks</h3>
              <p className="text-gray-600 mb-4">Additional benefits included:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>15% discount on all additional repairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>Preferred scheduling (choose your recurring time)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>Digital maintenance history & records</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>Annual home maintenance calendar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>Seasonal preventive care reminders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span>Year-end comprehensive home assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold mt-1">✓</span>
                  <span className="font-bold">1 FREE Emergency Service Call per year (annual members)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-navy to-royal-blue rounded-2xl p-10 text-center text-white">
            <h3 className="text-3xl font-black font-barlow-condensed mb-4">
              That's Over $150 in Labor & Maintenance Value Every Visit
            </h3>
            <p className="text-xl text-gray-200 mb-6">
              Plus the peace of mind knowing your home is being watched over by a professional who genuinely cares.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                💰 Predictable monthly cost
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                🛡️ Catch problems early
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                ⚡ No surprise repairs
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                📞 Direct access to Jeremy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Shield Image */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/the-home-shield-.png"
              alt="The Creative Constructors Home Shield"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Between Visits Benefit */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange to-orange/90">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
            <span className="text-6xl mb-6 block">📱</span>
            <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed text-white mb-4">
              Between Visits: Direct Access to Jeremy
            </h2>
            <p className="text-xl text-white/90">
              Text or call anytime with questions or concerns. You're not just a customer—you're family.
            </p>
          </div>
        </div>
      </section>

      {/* After Every Visit */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-12 text-center">
            After Every Visit
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Written Report */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📋</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-3">Written Home Health Report</h3>
                  <p className="text-gray-700 mb-4">
                    Detailed report with photos documenting your home's condition, findings, and recommendations.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-orange font-bold mt-1">✓</span>
                      <span>Timestamped photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange font-bold mt-1">✓</span>
                      <span>Issue prioritization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange font-bold mt-1">✓</span>
                      <span>Action items & timeline</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Priority Scheduling */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-3">Priority Scheduling</h3>
                  <p className="text-gray-700 mb-4">
                    Jump to the front of the line for any repairs or services you need.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-orange font-bold mt-1">✓</span>
                      <span>Expedited service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange font-bold mt-1">✓</span>
                      <span>Flexible time slots</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange font-bold mt-1">✓</span>
                      <span>Member-only rates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4 text-center">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Choose the plan that works best for you. No hidden fees. No surprises.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 hover:border-orange transition-all p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-navy mb-2">Monthly</h3>
                <div className="text-5xl font-black text-navy mb-2">
                  $249
                  <span className="text-xl text-gray-600 font-normal">/month</span>
                </div>
                <p className="text-gray-600">Cancel anytime</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl font-bold">✓</span>
                  <span className="text-gray-700">4 comprehensive quarterly visits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl font-bold">✓</span>
                  <span className="text-gray-700">Small repairs fixed on the spot</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl font-bold">✓</span>
                  <span className="text-gray-700">HVAC filters & detector batteries replaced</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl font-bold">✓</span>
                  <span className="text-gray-700">Preventive maintenance tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl font-bold">✓</span>
                  <span className="text-gray-700">Direct access to Jeremy 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl font-bold">✓</span>
                  <span className="text-gray-700">Written reports with photos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl font-bold">✓</span>
                  <span className="text-gray-700">Priority scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange text-xl font-bold">✓</span>
                  <span className="text-gray-700">15% off all additional repairs</span>
                </li>
              </ul>

              <a
                href="#signup"
                onClick={() => setSelectedPlan('monthly')}
                className="block w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-6 rounded-lg transition-colors text-center"
              >
                Choose Monthly
              </a>
            </div>

            {/* Annual Plan - Highlighted */}
            <div className="bg-gradient-to-br from-orange to-orange/90 rounded-2xl shadow-2xl border-2 border-orange p-8 relative transform md:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-400 text-navy px-6 py-2 rounded-full font-black text-sm shadow-lg">
                  ⭐ BEST VALUE
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Annual</h3>
                <div className="text-5xl font-black text-white mb-2">
                  $2,688
                  <span className="text-xl text-orange-100 font-normal">/year</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm text-white font-bold px-4 py-2 rounded-full inline-block">
                  Save $288 vs monthly
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-bold">✓</span>
                  <span className="text-white">4 comprehensive quarterly visits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-bold">✓</span>
                  <span className="text-white">Small repairs fixed on the spot</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-bold">✓</span>
                  <span className="text-white">HVAC filters & detector batteries replaced</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-bold">✓</span>
                  <span className="text-white">Preventive maintenance tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-bold">✓</span>
                  <span className="text-white">Direct access to Jeremy 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-bold">✓</span>
                  <span className="text-white">Written reports with photos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-bold">✓</span>
                  <span className="text-white">Priority scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-bold">✓</span>
                  <span className="text-white">15% off all additional repairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-bold">✓</span>
                  <span className="text-white font-bold">1 FREE Emergency Service Call</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl font-bold">✓</span>
                  <span className="text-white font-bold">2 months FREE</span>
                </li>
              </ul>

              <a
                href="#signup"
                onClick={() => setSelectedPlan('annual')}
                className="block w-full bg-white hover:bg-gray-100 text-orange font-bold py-4 px-6 rounded-lg transition-colors text-center shadow-lg"
              >
                Choose Annual
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment Banner */}
      <section className="py-8 px-4 bg-gradient-to-r from-navy to-royal-blue text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <span className="text-4xl">�️</span>
              <div>
                <div className="font-bold text-xl mb-1">Accepting New Members Now</div>
                <div className="text-blue-100">
                  Membership limited to ensure quality personal service from Jeremy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign-up Form */}
      <section id="signup" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4 text-center">
            Secure Your Spot
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Join the Creative Constructors Home Shield today.
          </p>

          {submitSuccess ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-green-900 mb-4">Welcome to Home Shield!</h3>
              <p className="text-lg text-green-800 mb-6">
                Thank you for signing up. Jeremy will reach out within 24 hours to schedule your first visit.
              </p>
              <button
                onClick={() => {
                  setSubmitSuccess(false);
                  setFormData({ name: '', address: '', email: '', phone: '' });
                }}
                className="text-green-700 font-bold hover:text-green-900 transition-colors"
              >
                ← Submit another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-navy mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-bold text-navy mb-2">
                    Full Home Address (Street, City, State, Zip) *
                  </label>
                  <input
                    type="text"
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none transition-colors"
                    placeholder="123 Main St, University Park, TX 75205"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-navy mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-navy mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none transition-colors"
                    placeholder="(817) 470-1889"
                  />
                </div>

                {/* Plan Selection */}
                <div>
                  <label className="block text-sm font-bold text-navy mb-3">
                    Select Your Plan *
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <label className={`relative cursor-pointer ${selectedPlan === 'monthly' ? 'ring-2 ring-orange' : 'ring-1 ring-gray-300'} rounded-lg p-4 transition-all hover:ring-orange`}>
                      <input
                        type="radio"
                        name="plan"
                        value="monthly"
                        checked={selectedPlan === 'monthly'}
                        onChange={(e) => setSelectedPlan(e.target.value as 'monthly' | 'annual')}
                        className="sr-only"
                      />
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-navy">Monthly</div>
                          <div className="text-2xl font-black text-navy">$249<span className="text-sm font-normal">/mo</span></div>
                        </div>
                        {selectedPlan === 'monthly' && (
                          <div className="w-6 h-6 bg-orange rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </label>

                    <label className={`relative cursor-pointer ${selectedPlan === 'annual' ? 'ring-2 ring-orange' : 'ring-1 ring-gray-300'} rounded-lg p-4 transition-all hover:ring-orange bg-orange/5`}>
                      <input
                        type="radio"
                        name="plan"
                        value="annual"
                        checked={selectedPlan === 'annual'}
                        onChange={(e) => setSelectedPlan(e.target.value as 'monthly' | 'annual')}
                        className="sr-only"
                      />
                      <div className="absolute -top-2 -right-2 bg-yellow-400 text-navy text-xs font-black px-2 py-1 rounded-full">
                        SAVE $288
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-navy">Annual</div>
                          <div className="text-2xl font-black text-navy">$2,688<span className="text-sm font-normal">/yr</span></div>
                        </div>
                        {selectedPlan === 'annual' && (
                          <div className="w-6 h-6 bg-orange rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange hover:bg-orange/90 disabled:bg-gray-400 text-white font-bold py-5 px-8 rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Continue to Payment
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  )}
                </button>

                <p className="text-center text-sm text-gray-600">
                  You'll be redirected to secure Stripe checkout to complete your {selectedPlan === 'monthly' ? '$249/month' : '$2,688/year'} payment.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <section className="bg-navy text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-2">Jeremy McKinney</h3>
          <p className="text-silver mb-4">Creative Constructors LLC</p>
          <a href="tel:817-470-1889" className="text-orange hover:text-orange/80 font-bold text-xl mb-4 block transition-colors">
            📞 (817) 470-1889
          </a>
          <p className="text-gray-400">
            Proudly serving University Park & Highland Park
          </p>
        </div>
      </section>
    </main>
  );
}
