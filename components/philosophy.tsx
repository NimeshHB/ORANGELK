'use client'

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Globe, Eye, Star } from "lucide-react"

export default function Philosophy() {
  const [activeTab, setActiveTab] = useState("mission")

  const tabs = [
    { id: "mission", label: "MISSION", icon: Globe },
    { id: "vision", label: "VISION", icon: Eye },
    { id: "promise", label: "PROMISE", icon: Star },
  ]

  const content = {
    mission: {
      title: "Our Mission",
      text: "To build unique, tailor-made journeys that combine genuine connections, responsible travel, and outstanding value. We collaborate with local partners who share our values and are passionate about showcasing Sri Lanka in an authentic, sustainable way. Every trip is personally crafted to match your interests, ensuring you return home with unforgettable memories.",
      icon: Globe,
    },
    vision: {
      title: "Our Vision",
      text: "To be the leading travel agency for immersive and sustainable Sri Lankan adventures, recognized for our commitment to quality, authenticity, and creating positive impacts on local communities. We envision a world where travel enriches both the traveler and the destination.",
      icon: Eye,
    },
    promise: {
      title: "Our Promise",
      text: "We promise to provide you with an exceptional and seamless travel experience. From the moment you contact us to your departure, we are dedicated to your safety, comfort, and satisfaction. We guarantee transparency, flexibility, and 24/7 support throughout your journey.",
      icon: Star,
    },
  }

  const activeContent = content[activeTab]
  const ActiveIcon = activeContent.icon

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-500">OUR PHILOSOPHY</h2>

        <div className="max-w-3xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center gap-8 mb-8 border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-6 font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "text-gray-900 border-b-2 border-blue-500"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <Card className="bg-orange-500 text-white p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <ActiveIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{activeContent.title}</h3>
                <p className="leading-relaxed">{activeContent.text}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
