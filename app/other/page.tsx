'use client'

import Header from '@/components/header'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sparkles, ArrowRight, Train, Leaf, Waves, Coffee } from 'lucide-react'
import Link from 'next/link'

export default function OtherPage() {
    const experiences = [
        {
            title: 'The Scenic Train Ride',
            description: 'Board the blue train from Kandy to Ella for one of the world\'s most scenic rail journeys. Wind through misty tea plantations, cross colonial-era bridges, and witness the lush green heart of Sri Lanka unfold outside your window.',
            image: '/sri-lanka-train-on-bridge-through-lush-green-fores.jpg',
            icon: Train,
            gradient: 'from-blue-500 via-cyan-500 to-teal-500',
            bgColor: 'bg-blue-50',
        },
        {
            title: 'Ayurvedic Wellness',
            description: 'Rejuvenate your mind and body with ancient healing traditions. Experience authentic Ayurvedic treatments, yoga retreats, and herbal baths that have been practiced on the island for thousands of years.',
            image: '/misty-mountain-landscape-sunrise-sri-lanka-hills-t.jpg',
            icon: Leaf,
            gradient: 'from-green-500 via-emerald-500 to-teal-500',
            bgColor: 'bg-green-50',
        },
        {
            title: 'Whale & Dolphin Watching',
            description: 'Set sail into the deep blue off the coasts of Mirissa or Trincomalee. Witness the awe-inspiring sight of Blue Whales, Sperm Whales, and playful pods of Spinner Dolphins in their natural habitat.',
            image: '/whale-watching-colorful-boat-sri-lanka-ocean.jpg',
            icon: Waves,
            gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
            bgColor: 'bg-cyan-50',
        },
        {
            title: 'Ceylon Tea Trails',
            description: 'Step into the world of world-famous Ceylon tea. Visit a colonial-era tea factory, learn the art of tea plucking, and savor a fresh cup of BOPF while overlooking the rolling emerald hills of Nuwara Eliya.',
            image: '/rolling-green-tea-plantations-sri-lanka-hills.jpg',
            icon: Coffee,
            gradient: 'from-amber-500 via-orange-500 to-yellow-500',
            bgColor: 'bg-amber-50',
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header theme="dark" />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-cyan-50 to-purple-50 opacity-60" />
                <div className="relative max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                        <Sparkles className="w-4 h-4" />
                        Unforgettable Experiences
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        More Than Just a <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Destination</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Curated experiences designed to immerse you in the island life.
                    </p>
                </div>
            </section>

            {/* Experiences Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {experiences.map((experience, index) => (
                            <Card
                                key={index}
                                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Image with Overlay */}
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={experience.image}
                                        alt={experience.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${experience.gradient} opacity-40 group-hover:opacity-50 transition-opacity`} />

                                    {/* Floating Icon */}
                                    <div className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-br ${experience.gradient} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500`}>
                                        <experience.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Title Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                                            {experience.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`p-8 ${experience.bgColor}`}>
                                    <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                                        {experience.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        <Button className={`bg-gradient-to-r ${experience.gradient} text-white hover:shadow-lg transition-all group/btn`}>
                                            Book This Experience
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                        <Button variant="outline" className="border-gray-300 hover:bg-white">
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Experiences Teaser */}
            <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                        And So Much <span className="text-orange-500">More...</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: '🏄', title: 'Surfing & Water Sports', desc: 'Ride the waves in Arugam Bay' },
                            { icon: '🎭', title: 'Cultural Festivals', desc: 'Experience vibrant traditions' },
                            { icon: '🍛', title: 'Cooking Classes', desc: 'Master Sri Lankan cuisine' },
                            { icon: '🧘', title: 'Yoga Retreats', desc: 'Find your inner peace' },
                        ].map((item, index) => (
                            <Card
                                key={index}
                                className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 bg-white"
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
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
                        Create Your Perfect Experience
                    </h2>
                    <p className="text-lg text-white/90 mb-8 leading-relaxed">
                        Mix and match these unforgettable experiences to design your dream Sri Lankan adventure. Every journey is unique, just like you.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/">
                            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8">
                                Start Planning
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold px-8">
                                Get in Touch
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
