'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import GalleryGrid from '@/components/gallery-grid'
import Image from 'next/image'
import Header from '@/components/header'


export default function GalleryPage() {

  return (
    <div className="min-h-screen bg-white">
      <Header theme="dark" />

      {/* Header */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            SRI LANKA IN <span className="text-orange-500">PORTRAITS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto italic">
            Discover the beauty and magic of Sri Lanka through our curated collection of photographs. Each image tells
            a story of adventure, culture, and unforgettable moments captured in paradise.
          </p>

        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-50 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Create Your Own Story?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Let's design your perfect Sri Lanka adventure. Our personalized tours ensure you experience the moments
            that will take your breath away.
          </p>
          <Link
            href="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Start Your Journey
          </Link>
        </div>
      </section>

    </div>
  );
}
