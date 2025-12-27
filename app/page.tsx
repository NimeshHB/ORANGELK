'use client'

import AboutUs from "@/components/about-us"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Globe, ArrowRight, MapPin, Calendar, Users, HeadphonesIcon, Star, Sparkles, Heart, Shield, Award, Compass } from "lucide-react"
import Link from "next/link"
import Philosophy from "@/components/philosophy"
import Header from "@/components/header"
import Image from "next/image"
import { useState } from "react"

export default function Page() {
  const [hoveredTour, setHoveredTour] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Track mouse movement for parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    const x = (clientX / innerWidth - 0.5) * 2
    const y = (clientY / innerHeight - 0.5) * 2
    setMousePosition({ x, y })
  }

  const featuredTours = [
    {
      id: 1,
      image: "/family-on-beach-sri-lanka-sunset.jpg",
      badge: "MOST POPULAR",
      title: "Family Beach Paradise",
      subtitle: "10 Days of Adventure & Relaxation",
      price: "From $1,299",
      rating: 4.9,
      gradient: "from-blue-500 to-cyan-500",
      link: "/tours/summer-vacation-children",
    },
    {
      id: 2,
      image: "/silhouette-couple-sunset-beach-sri-lanka.jpg",
      badge: "ROMANTIC",
      title: "Honeymoon Escape",
      subtitle: "12 Days of Luxury & Romance",
      price: "From $1,899",
      rating: 5.0,
      gradient: "from-pink-500 to-rose-500",
      link: "/tours",
    },
    {
      id: 3,
      image: "/elephants-in-sri-lanka-safari-wildlife.jpg",
      badge: "ADVENTURE",
      title: "Wildlife Safari",
      subtitle: "8 Days in the Wild",
      price: "From $999",
      rating: 4.8,
      gradient: "from-green-500 to-emerald-500",
      link: "/tours",
    },
    {
      id: 4,
      image: "/rolling-green-tea-plantations-sri-lanka-hills.jpg",
      badge: "SCENIC",
      title: "Hill Country Explorer",
      subtitle: "7 Days in Tea Country",
      price: "From $849",
      rating: 4.7,
      gradient: "from-amber-500 to-orange-500",
      link: "/tours",
    },
    {
      id: 5,
      image: "/ancient-ruins-temple-pillars-sri-lanka-historical-.jpg",
      badge: "CULTURAL",
      title: "Cultural Heritage Journey",
      subtitle: "9 Days of Ancient Wonders",
      price: "From $1,099",
      rating: 4.9,
      gradient: "from-purple-500 to-indigo-500",
      link: "/tours",
    },
    {
      id: 6,
      image: "/whale-watching-colorful-boat-sri-lanka-ocean.jpg",
      badge: "MARINE",
      title: "Coastal & Marine Discovery",
      subtitle: "6 Days of Ocean Adventures",
      price: "From $749",
      rating: 4.6,
      gradient: "from-cyan-500 to-blue-500",
      link: "/tours",
    },
  ]

  const destinations = [
    {
      image: "/sigiriya-rock-fortress-sri-lanka-tourist.jpg",
      title: "SIGIRIYA",
      description: "Ancient Rock Fortress",
      gradient: "from-amber-600 to-orange-600",
    },
    {
      image: "/rolling-green-tea-plantations-sri-lanka-hills.jpg",
      title: "ELLA",
      description: "Misty Tea Country",
      gradient: "from-green-600 to-emerald-600",
    },
    {
      image: "/whale-watching-colorful-boat-sri-lanka-ocean.jpg",
      title: "MIRISSA",
      description: "Blue Whale Paradise",
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      image: "/buddhist-temple-ornate-decorations-sri-lanka-cultu.jpg",
      title: "KANDY",
      description: "Cultural Capital",
      gradient: "from-purple-600 to-pink-600",
    },
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Premium Standards",
      description: "Protected by international law with government-registered travel guarantee",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Expert Guides",
      description: "Professional multilingual guides personally selected for you",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Heart,
      title: "Tailor-Made",
      description: "Private tours customized to your preferences and travel style",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: Compass,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your entire journey",
      color: "from-orange-500 to-amber-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Mouse Interaction - Redesigned */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
        onMouseMove={handleMouseMove}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Animated Gradient Orbs */}
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/30 to-pink-500/30 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px)`,
          }}
        />

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-2xl hover:bg-white/10 transition-all">
                <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
                <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  Premium Travel Agency
                </span>
                <span className="text-white/60">•</span>
                <span className="text-white/90">Sri Lanka Specialists</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Your Dream
                  <br />
                  <span className="relative inline-block mt-2">
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 blur-2xl opacity-50" />
                    <span className="relative bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                      Sri Lanka
                    </span>
                  </span>
                  <br />
                  <span className="text-white/90">Adventure Awaits</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl text-white/70 leading-relaxed max-w-xl">
                Experience the magic of Sri Lanka with expertly curated journeys.
                From ancient temples to pristine beaches, we craft unforgettable adventures.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                {[
                  { number: "500+", label: "Happy Travelers" },
                  { number: "50+", label: "Destinations" },
                  { number: "4.9", label: "Average Rating" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center"
                    style={{
                      transform: `translateY(${Math.sin(mousePosition.x * 2 + index) * 3}px)`,
                      transition: 'transform 0.3s ease-out'
                    }}
                  >
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/tours">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all px-8 py-6 text-lg font-bold">
                    Explore Tours
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" className="bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all px-8 py-6 text-lg font-bold">
                    Plan My Trip
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Image Cards */}
            <div className="relative h-[600px] hidden lg:block">
              {/* Main Featured Card */}
              <div
                className="absolute top-0 right-0 w-80 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 hover:scale-105 transition-all duration-500 cursor-pointer"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * -5}deg) rotateX(${mousePosition.y * 5}deg)`,
                }}
              >
                <Image
                  src="/sigiriya-rock-fortress-sri-lanka-tourist.jpg"
                  alt="Sigiriya"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                    FEATURED
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">Sigiriya Rock</h3>
                  <p className="text-white/80 text-sm">Ancient Wonder</p>
                </div>
              </div>

              {/* Secondary Card 1 */}
              <div
                className="absolute bottom-20 left-0 w-64 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 hover:scale-105 transition-all duration-500 cursor-pointer"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 3}deg) rotateX(${mousePosition.y * -3}deg) translateY(${mousePosition.y * -10}px)`,
                }}
              >
                <Image
                  src="/rolling-green-tea-plantations-sri-lanka-hills.jpg"
                  alt="Tea Country"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white mb-1">Tea Country</h3>
                  <p className="text-white/80 text-sm">Misty Hills</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-2xl"
                style={{
                  transform: `translate(-50%, -50%) translateY(${mousePosition.y * -15}px)`,
                }}
              >
                <div className="text-center">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2 fill-yellow-400" />
                  <div className="text-3xl font-bold text-white">4.9</div>
                  <div className="text-sm text-white/60">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 backdrop-blur-md bg-white/5 rounded-full flex items-start justify-center p-2 shadow-xl hover:bg-white/10 transition-all cursor-pointer">
            <div className="w-1.5 h-4 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star className="w-4 h-4" />
              Featured Tours
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Popular Tours</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked experiences that showcase the best of Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <Card
                key={tour.id}
                onMouseEnter={() => setHoveredTour(tour.id)}
                onMouseLeave={() => setHoveredTour(null)}
                className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${tour.gradient} opacity-30 group-hover:opacity-40 transition-opacity`} />

                  <div className="absolute top-4 left-4">
                    <span className={`bg-gradient-to-r ${tour.gradient} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg`}>
                      {tour.badge}
                    </span>
                  </div>

                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg">
                    <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white font-bold">{tour.rating}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{tour.title}</h3>
                    <p className="text-white/90 text-sm mb-3">{tour.subtitle}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-lg">{tour.price}</span>
                      <Link href={tour.link}>
                        <Button className={`bg-white text-gray-900 hover:bg-gray-100 ${hoveredTour === tour.id ? 'translate-x-0' : ''} transition-transform`}>
                          View Tour
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/tours">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-xl transition-all px-8">
                View All Tours
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <AboutUs />

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-orange-500">ORANGELK</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium service meets Sri Lankan hospitality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2 border-none bg-white group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4" />
              Top Destinations
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Sri Lanka</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From ancient kingdoms to pristine beaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <Link key={index} href="/destinations">
                <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer">
                  <div className="relative h-80">
                    <Image
                      src={dest.image}
                      alt={dest.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${dest.gradient} opacity-60 group-hover:opacity-70 transition-opacity`} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <h3 className="text-3xl font-bold text-white mb-2">{dest.title}</h3>
                      <p className="text-white/90 text-lg">{dest.description}</p>
                      <ArrowRight className="w-6 h-6 text-white mt-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/destinations">
              <Button size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8">
                View All Destinations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Philosophy />

      {/* Reviews/Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star className="w-4 h-4 fill-orange-600" />
              Customer Reviews
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Travelers Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from real travelers who explored Sri Lanka with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & Michael",
                location: "Stockholm, Sweden",
                rating: 5,
                review: "Our honeymoon in Sri Lanka was absolutely magical! ORANGELK planned everything perfectly - from the romantic beachside dinners to the breathtaking sunrise at Sigiriya. Every detail was thoughtfully arranged.",
                tour: "Honeymoon Escape",
                image: "👫",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                name: "The Anderson Family",
                location: "Gothenburg, Sweden",
                rating: 5,
                review: "Traveling with kids can be challenging, but ORANGELK made it effortless! The guides were patient and engaging with our children. The wildlife safari was the highlight - our kids still talk about the elephants!",
                tour: "Family Beach Paradise",
                image: "👨‍👩‍👧‍👦",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                name: "Erik Johansson",
                location: "Malmö, Sweden",
                rating: 5,
                review: "The cultural heritage tour exceeded all expectations. Our guide's knowledge of Sri Lankan history was incredible. The ancient temples, local cuisine, and warm hospitality made this trip unforgettable.",
                tour: "Cultural Heritage Journey",
                image: "🧑",
                gradient: "from-purple-500 to-indigo-500",
              },
              {
                name: "Lisa & Johan",
                location: "Uppsala, Sweden",
                rating: 5,
                review: "The tea country experience was like stepping into a dream. Riding the blue train through misty mountains, visiting tea plantations, and staying in colonial-era hotels - pure magic!",
                tour: "Hill Country Explorer",
                image: "👩‍❤️‍👨",
                gradient: "from-amber-500 to-orange-500",
              },
              {
                name: "Marcus Berg",
                location: "Lund, Sweden",
                rating: 5,
                review: "As a wildlife photographer, the safari tour was perfect. We saw leopards, elephants, and countless bird species. The guides knew exactly where to go and when. Highly recommended!",
                tour: "Wildlife Safari",
                image: "📸",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                name: "Anna & Sofia",
                location: "Helsingborg, Sweden",
                rating: 5,
                review: "Whale watching in Mirissa was the experience of a lifetime! Seeing blue whales up close was breathtaking. The coastal tour was perfectly paced with plenty of beach relaxation time.",
                tour: "Coastal Discovery",
                image: "🌊",
                gradient: "from-cyan-500 to-blue-500",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2 border-none bg-white group"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.review}"
                </p>

                {/* Tour Badge */}
                <div className="mb-6">
                  <span className={`inline-block bg-gradient-to-r ${testimonial.gradient} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                    {testimonial.tour}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Overall Rating */}
          <div className="mt-16 text-center">
            <Card className="inline-block p-8 bg-gradient-to-br from-orange-50 to-pink-50 border-none shadow-xl">
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-6xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    4.9
                  </div>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="text-left border-l-2 border-orange-200 pl-6">
                  <p className="text-2xl font-bold text-gray-900">Excellent</p>
                  <p className="text-gray-600">Based on 500+ reviews</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready for Your Sri Lankan Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let us craft your perfect journey. Every detail personalized, every moment unforgettable.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-6 text-lg">
                Start Planning
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/tours">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-lg">
                Browse Tours
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
