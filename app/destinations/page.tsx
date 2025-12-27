'use client'

import Header from '@/components/header'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, ArrowRight, Camera, Mountain, Palmtree, Castle } from 'lucide-react'
import Link from 'next/link'

export default function DestinationsPage() {
    const destinations = [
        {
            name: 'Sigiriya',
            tagline: 'The Eighth Wonder of the World',
            description: 'Rise above the jungle canopy at the ancient rock fortress of Sigiriya. Climb the dramatic steps between the giant lion paws to witness preserved frescoes and 5th-century ruins suspended in the sky. It is a masterpiece of ancient urban planning and a UNESCO World Heritage site that offers breathtaking panoramic views.',
            image: '/sigiriya-rock-fortress-sri-lanka-tourist.jpg',
            icon: Castle,
            color: 'from-amber-500 to-orange-600',
        },
        {
            name: 'Ella',
            tagline: 'The Heart of the Hill Country',
            description: 'Escape to the cool, misty mountains of Ella, a haven for hikers and nature lovers. Famous for the iconic Nine Arch Bridge and the scenic blue train journey, this laid-back village offers stunning viewpoints like Little Adam\'s Peak and cascading waterfalls, surrounded by endless tea plantations.',
            image: '/rolling-green-tea-plantations-sri-lanka-hills.jpg',
            icon: Mountain,
            color: 'from-green-500 to-emerald-600',
        },
        {
            name: 'Yala National Park',
            tagline: 'Into the Wild',
            description: 'Embark on a thrilling safari in Yala, the island\'s premier wildlife destination. Home to one of the highest densities of leopards in the world, Yala offers a chance to spot majestic elephants, sloth bears, and crocodiles in their natural habitat, where the jungle meets the ocean.',
            image: '/elephants-in-sri-lanka-safari-wildlife.jpg',
            icon: Camera,
            color: 'from-yellow-500 to-amber-600',
        },
        {
            name: 'Galle Fort',
            tagline: 'Where History Meets the Sea',
            description: 'Walk through time in the cobblestone streets of Galle Fort. This UNESCO World Heritage site is a living monument to colonial history, blending Portuguese, Dutch, and British architecture with a vibrant local culture. Explore boutique shops, art galleries, and the iconic lighthouse standing guard over the Indian Ocean.',
            image: '/sri-lanka-lighthouse-at-sunset-palm-trees.jpg',
            icon: Castle,
            color: 'from-blue-500 to-cyan-600',
        },
        {
            name: 'Mirissa',
            tagline: 'Tropical Paradise & Blue Whales',
            description: 'Relax on the golden sands of Mirissa, famous for its laid-back vibe and stunning sunsets. By day, set sail on a whale-watching expedition to see the mighty Blue Whale; by night, enjoy fresh seafood and lively beach parties under the palms.',
            image: '/whale-watching-colorful-boat-sri-lanka-ocean.jpg',
            icon: Palmtree,
            color: 'from-cyan-500 to-blue-600',
        },
        {
            name: 'Kandy',
            tagline: 'The Cultural Capital',
            description: 'Immerse yourself in tradition in Kandy, the last kingdom of Sri Lanka. Visit the sacred Temple of the Tooth Relic, stroll around the serene Kandy Lake, and explore the Royal Botanical Gardens. It is a city of spiritual significance and vibrant cultural festivals.',
            image: '/buddhist-temple-ornate-decorations-sri-lanka-cultu.jpg',
            icon: Castle,
            color: 'from-purple-500 to-pink-600',
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header theme="dark" />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-orange-50 via-white to-cyan-50">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        Top Destinations
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Explore the <span className="text-orange-500">Pearl of the Indian Ocean</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        From misty mountains and ancient ruins to golden beaches and wild safaris, discover the places that make Sri Lanka unforgettable.
                    </p>
                </div>
            </section>

            {/* Destinations Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-16">
                        {destinations.map((destination, index) => (
                            <Card
                                key={index}
                                className={`overflow-hidden hover:shadow-2xl transition-all duration-500 ${index % 2 === 0 ? '' : ''
                                    }`}
                            >
                                <div
                                    className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
                                        } gap-0`}
                                >
                                    {/* Image Section */}
                                    <div
                                        className={`relative h-[400px] lg:h-auto ${index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'
                                            }`}
                                    >
                                        <img
                                            src={destination.image}
                                            alt={destination.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                        {/* Floating Icon */}
                                        <div className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${destination.color} rounded-full flex items-center justify-center shadow-lg`}>
                                            <destination.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div
                                        className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'
                                            }`}
                                    >
                                        <div className="inline-flex items-center gap-2 text-orange-500 font-semibold mb-3">
                                            <MapPin className="w-5 h-5" />
                                            <span className="text-sm uppercase tracking-wide">Destination {index + 1}</span>
                                        </div>

                                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                            {destination.name}
                                        </h2>

                                        <h3 className={`text-xl md:text-2xl font-semibold bg-gradient-to-r ${destination.color} bg-clip-text text-transparent mb-6`}>
                                            {destination.tagline}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
                                            {destination.description}
                                        </p>

                                        <div className="flex flex-wrap gap-4">
                                            <Button className={`bg-gradient-to-r ${destination.color} text-white hover:shadow-lg transition-all group`}>
                                                Explore {destination.name}
                                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                            <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                                                View Tours
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-orange-500 to-orange-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Discover Sri Lanka?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 leading-relaxed">
                        Let us craft a personalized journey that takes you to these incredible destinations and beyond. Your adventure awaits!
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/">
                            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8">
                                Design My Trip
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold px-8">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
