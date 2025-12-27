'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Users, Calendar, ArrowRight, Clock, Star, Sparkles, Heart } from "lucide-react"
import Header from "@/components/header"
import { useState } from "react"

export default function ToursPage() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)

  const tours = [
    {
      id: 1,
      image: "/family-on-beach-sri-lanka-sunset.jpg",
      title: "Family Beach Paradise",
      subtitle: "Perfect for families with children",
      badge: "MOST POPULAR",
      duration: "10 Days",
      groupSize: "2-8 People",
      price: "From $1,299",
      rating: 4.9,
      reviews: 127,
      link: "/tours/summer-vacation-children",
      highlights: ["Beach Time", "Wildlife Safari", "Cultural Sites"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      image: "/silhouette-couple-sunset-beach-sri-lanka.jpg",
      title: "Romantic Honeymoon Escape",
      subtitle: "Luxury experience for couples",
      badge: "ROMANTIC",
      duration: "12 Days",
      groupSize: "2 People",
      price: "From $1,899",
      rating: 5.0,
      reviews: 89,
      highlights: ["Private Villas", "Spa Treatments", "Sunset Dinners"],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 3,
      image: "/elephants-in-sri-lanka-safari-wildlife.jpg",
      title: "Wildlife Adventure Tour",
      subtitle: "Explore Sri Lanka's wild side",
      badge: "ADVENTURE",
      duration: "8 Days",
      groupSize: "4-12 People",
      price: "From $999",
      rating: 4.8,
      reviews: 156,
      highlights: ["Safari Drives", "Leopard Spotting", "Elephant Watching"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      image: "/rolling-green-tea-plantations-sri-lanka-hills.jpg",
      title: "Hill Country Explorer",
      subtitle: "Tea plantations & mountain views",
      badge: "SCENIC",
      duration: "7 Days",
      groupSize: "2-10 People",
      price: "From $849",
      rating: 4.7,
      reviews: 94,
      highlights: ["Train Rides", "Tea Tasting", "Hiking Trails"],
      gradient: "from-amber-500 to-orange-500",
    },
    {
      id: 5,
      image: "/ancient-ruins-temple-pillars-sri-lanka-historical-.jpg",
      title: "Cultural Heritage Journey",
      subtitle: "Ancient kingdoms & sacred sites",
      badge: "CULTURAL",
      duration: "9 Days",
      groupSize: "2-15 People",
      price: "From $1,099",
      rating: 4.9,
      reviews: 112,
      highlights: ["UNESCO Sites", "Temple Tours", "Local Traditions"],
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      id: 6,
      image: "/whale-watching-colorful-boat-sri-lanka-ocean.jpg",
      title: "Coastal & Marine Discovery",
      subtitle: "Beaches, whales & water sports",
      badge: "MARINE",
      duration: "6 Days",
      groupSize: "2-8 People",
      price: "From $749",
      rating: 4.6,
      reviews: 78,
      highlights: ["Whale Watching", "Snorkeling", "Beach Relaxation"],
      gradient: "from-cyan-500 to-blue-500",
    },
  ]

  const filters = [
    { icon: Calendar, label: "When to Travel", value: "when" },
    { icon: Clock, label: "Duration", value: "duration" },
    { icon: Users, label: "Group Size", value: "group" },
    { icon: MapPin, label: "Destinations", value: "destinations" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header theme="dark" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-cyan-50 to-purple-50 opacity-70" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            Curated Sri Lanka Tours
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Choose Your Perfect
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Sri Lanka Adventure
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Handcrafted tours designed by travel experts. Every journey is personalized,
            sustainable, and unforgettable.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value === selectedFilter ? null : filter.value)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${selectedFilter === filter.value
                  ? 'bg-orange-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                  }`}
              >
                <filter.icon className="w-4 h-4" />
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <Card
                key={tour.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-none"
              >
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${tour.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`bg-gradient-to-r ${tour.gradient} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg`}>
                      {tour.badge}
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg">
                    <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
                  </button>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <p className="text-sm font-bold text-gray-900">{tour.price}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-gray-900">{tour.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({tour.reviews} reviews)</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{tour.subtitle}</p>

                  {/* Details */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tour.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  {tour.link ? (
                    <Link href={tour.link}>
                      <Button className={`w-full bg-gradient-to-r ${tour.gradient} text-white hover:shadow-lg transition-all group/btn`}>
                        Explore Tour
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  ) : (
                    <Button className={`w-full bg-gradient-to-r ${tour.gradient} text-white hover:shadow-lg transition-all group/btn`}>
                      Explore Tour
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Can't Find Your Perfect Tour?
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Let us create a custom itinerary just for you. Tell us your dreams, and we'll make them reality.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8">
                Design Custom Tour
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "FAQ",
                description: "Find answers to frequently asked questions about your trip to Sri Lanka.",
                icon: "❓",
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Terms & Conditions",
                description: "Read our terms, cancellation policy, and booking information.",
                icon: "📋",
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Privacy Policy",
                description: "Learn how we protect and use your personal information.",
                icon: "🔒",
                color: "from-green-500 to-emerald-500",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 border-none bg-white"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
