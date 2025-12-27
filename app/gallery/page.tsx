'use client'

import { useState } from 'react'
import { ArrowRight, Camera, MapPin, Heart, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState('all')

  const galleryItems = [
    { id: 1, src: '/family-on-beach-sri-lanka-sunset.jpg', alt: 'Family on beach', category: 'beaches', location: 'Mirissa Beach' },
    { id: 2, src: '/sri-lanka-train-on-bridge-through-lush-green-fores.jpg', alt: 'Train on bridge', category: 'landscapes', location: 'Ella' },
    { id: 3, src: '/sri-lankan-food-curry-traditional-meal.jpg', alt: 'Traditional meal', category: 'culture', location: 'Colombo' },
    { id: 4, src: '/sri-lanka-lighthouse-at-sunset-palm-trees.jpg', alt: 'Lighthouse at sunset', category: 'beaches', location: 'Galle' },
    { id: 5, src: '/elephants-in-sri-lanka-safari-wildlife.jpg', alt: 'Elephants safari', category: 'wildlife', location: 'Yala National Park' },
    { id: 6, src: '/silhouette-couple-sunset-beach-sri-lanka.jpg', alt: 'Couple sunset', category: 'beaches', location: 'Unawatuna' },
    { id: 7, src: '/sigiriya-rock-fortress-sri-lanka-tourist.jpg', alt: 'Sigiriya rock', category: 'landmarks', location: 'Sigiriya' },
    { id: 8, src: '/ancient-ruins-temple-pillars-sri-lanka-historical-.jpg', alt: 'Ancient ruins', category: 'culture', location: 'Polonnaruwa' },
    { id: 9, src: '/buddhist-temple-ornate-decorations-sri-lanka-cultu.jpg', alt: 'Buddhist temple', category: 'culture', location: 'Kandy' },
    { id: 10, src: '/gemstones-jewelry-craftsmanship-sri-lanka.jpg', alt: 'Gemstones', category: 'culture', location: 'Ratnapura' },
    { id: 11, src: '/rolling-green-tea-plantations-sri-lanka-hills.jpg', alt: 'Tea plantations', category: 'landscapes', location: 'Nuwara Eliya' },
    { id: 12, src: '/whale-watching-colorful-boat-sri-lanka-ocean.jpg', alt: 'Whale watching', category: 'wildlife', location: 'Mirissa' },
    { id: 13, src: '/golden-buddha-statue-dambulla-temple-blue-sky-pal.jpg', alt: 'Golden Buddha', category: 'landmarks', location: 'Dambulla' },
    { id: 14, src: '/misty-mountain-landscape-sunrise-sri-lanka-hills-t.jpg', alt: 'Misty mountains', category: 'landscapes', location: 'Horton Plains' },
    { id: 15, src: '/negombo-beach-resort-hotel-aerial-view.jpg', alt: 'Beach resort', category: 'beaches', location: 'Negombo' },
    { id: 16, src: '/sri-lankan-food-market-spices-colorful-people-smil.jpg', alt: 'Food market', category: 'culture', location: 'Pettah Market' },

  ]

  const categories = [
    { id: 'all', label: 'All Photos', icon: Camera },
    { id: 'beaches', label: 'Beaches', icon: '🏖️' },
    { id: 'landscapes', label: 'Landscapes', icon: '🏔️' },
    { id: 'culture', label: 'Culture', icon: '🏛️' },
    { id: 'wildlife', label: 'Wildlife', icon: '🐘' },
    { id: 'landmarks', label: 'Landmarks', icon: '🗿' },
  ]

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header theme="dark" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-pink-50 opacity-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Camera className="w-4 h-4" />
            Photo Gallery
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Sri Lanka in <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Portraits</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover the beauty and magic of Sri Lanka through our curated collection.
            Each image tells a story of adventure, culture, and unforgettable moments.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all ${filter === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                  }`}
              >
                {typeof category.icon === 'string' ? (
                  <span className="text-lg">{category.icon}</span>
                ) : (
                  <category.icon className="w-4 h-4" />
                )}
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="relative h-80">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Location Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-orange-500" />
                      <span className="text-xs font-semibold text-gray-900">{item.location}</span>
                    </div>
                  </div>

                  {/* Like Button */}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110">
                    <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
                  </button>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-bold text-lg">{item.alt}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No photos found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500">
        <div className="max-w-4xl mx-auto text-center">
          <Camera className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Your Own Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's design your perfect Sri Lanka adventure. Experience the moments that will take your breath away.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/tours">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-6 text-lg">
                Explore Tours
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="relative max-w-6xl max-h-[90vh]">
            <Image
              src={galleryItems.find(item => item.id === selectedImage)?.src || ''}
              alt={galleryItems.find(item => item.id === selectedImage)?.alt || ''}
              width={1200}
              height={800}
              className="object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </div>
  )
}
