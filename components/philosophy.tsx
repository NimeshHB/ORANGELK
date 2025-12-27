'use client'

import { Card } from "@/components/ui/card"
import { Globe, Eye, Star, Target, Heart, Shield } from "lucide-react"

export default function Philosophy() {
  const philosophyItems = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To build unique, tailor-made journeys that combine genuine connections, responsible travel, and outstanding value.",
      gradient: "from-orange-500 to-pink-500",
      bgColor: "from-orange-50 to-pink-50",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading travel agency for immersive and sustainable Sri Lankan adventures, recognized for quality and authenticity.",
      gradient: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
    },
    {
      icon: Heart,
      title: "Our Promise",
      description: "Exceptional and seamless travel experience with transparency, flexibility, and 24/7 support throughout your journey.",
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-50 to-blue-50",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Star className="w-4 h-4" />
            Our Philosophy
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Drives <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Us Forward</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our core beliefs that shape every journey we create
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophyItems.map((item, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${item.bgColor}`}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                  {item.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: "Protected Travel",
              description: "Government-registered with full legal protection",
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: Globe,
              title: "Local Expertise",
              description: "Deep knowledge of Sri Lankan culture and destinations",
              color: "from-green-500 to-emerald-500",
            },
            {
              icon: Star,
              title: "5-Star Service",
              description: "Rated 4.9/5 by 500+ happy travelers",
              color: "from-amber-500 to-orange-500",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
