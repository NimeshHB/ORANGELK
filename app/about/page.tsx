'use client'

import Header from '@/components/header'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Users, Globe, Award, Shield, Compass, ArrowRight, Sparkles, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Sri Lanka",
      description: "We're deeply in love with Sri Lanka's beauty, culture, and people. Every tour is crafted with genuine passion and local expertise.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Premium Reliability",
      description: "Protected by international law with government-registered travel guarantee. Your safety and satisfaction are our top priorities.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "We're not a faceless corporation. You'll work with real people who care about making your dream trip a reality.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Globe,
      title: "Sustainable Travel",
      description: "We partner with local, ethical businesses and follow sustainable practices to protect Sri Lanka's natural beauty.",
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  const team = [
    {
      name: "Expert Guides",
      role: "Multilingual Professionals",
      description: "Personally selected guides with deep knowledge of Sri Lankan culture and history",
      icon: "👨‍🏫",
    },
    {
      name: "Local Partners",
      role: "Trusted Network",
      description: "Carefully vetted hotels, restaurants, and activity providers across Sri Lanka",
      icon: "🤝",
    },
    {
      name: "Support Team",
      role: "24/7 Assistance",
      description: "Round-the-clock support team ready to help throughout your journey",
      icon: "💬",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header theme="dark" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/buddhist-temple-ornate-decorations-sri-lanka-cultu.jpg"
            alt="About Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-2xl">
            <Sparkles className="w-4 h-4" />
            About ORANGELK
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            We Are <span className="bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">Passionate</span>
          </h1>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            <p className="text-xl md:text-2xl text-white leading-relaxed">
              We are a passionate team dedicated to showcasing the beauty and wonder of Sri Lanka.
              Our mission is to provide unforgettable travel experiences that highlight the rich culture,
              stunning landscapes, and warm hospitality of this incredible island nation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Star className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Expert Service Meets <span className="text-orange-500">Sri Lankan Magic</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  ORANGELK was born from a simple dream: to share the magic of Sri Lanka with travelers
                  while maintaining the highest standards of quality and safety.
                </p>
                <p>
                  We combine international reliability and organizational excellence
                  with deep local knowledge and authentic Sri Lankan hospitality. Every member of our team
                  has personally explored every corner of this beautiful island.
                </p>
                <p>
                  We're not just a travel agency – we're your trusted partner in creating memories that will
                  last a lifetime. From the moment you contact us until you return home with a heart full of
                  stories, we're with you every step of the way.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/family-on-beach-sri-lanka-sunset.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We <span className="text-orange-500">Stand For</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-none bg-white group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The people who make your dreams come true
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2 border-none bg-gradient-to-br from-gray-50 to-white"
              >
                <div className="text-6xl mb-6">{member.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-500 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/sigiriya-rock-fortress-sri-lanka-tourist.jpg"
                alt="Why Choose Us"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-orange-500">ORANGELK</span>?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "Expertise You Can Trust",
                    description: "Years of experience crafting perfect Sri Lankan adventures",
                  },
                  {
                    icon: Compass,
                    title: "Personalized Service",
                    description: "Every tour is customized to your unique preferences and dreams",
                  },
                  {
                    icon: Shield,
                    title: "Complete Peace of Mind",
                    description: "Complete legal protection and 24/7 support throughout your journey",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's create your perfect Sri Lankan adventure together. Contact us today!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-6 text-lg">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/tours">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-lg">
                View Our Tours
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
