'use client'

export default function WhySriLanka() {
  const whySriLankaItems = [
    { id: 1, src: '/ancient-ruins-temple-pillars-sri-lanka-historical-.jpg', alt: 'Ancient Ruins', title: 'Rich History', description: 'Explore ancient cities and UNESCO World Heritage Sites.' },
    { id: 2, src: '/misty-mountain-landscape-sunrise-sri-lanka-hills-t.jpg', alt: 'Misty Mountains', title: 'Breathtaking Landscapes', description: 'From misty mountains to pristine beaches, nature at its best.' },
    { id: 3, src: '/elephants-in-sri-lanka-safari-wildlife.jpg', alt: 'Elephants Safari', title: 'Abundant Wildlife', description: 'Go on a safari and witness majestic elephants and elusive leopards.' },
    { id: 4, src: '/sri-lankan-food-curry-traditional-meal.jpg', alt: 'Sri Lankan Food', title: 'Delicious Cuisine', description: 'Savor the unique flavors of Sri Lankan spices and curries.' },
    { id: 5, src: '/gemstones-jewelry-craftsmanship-sri-lanka.jpg', alt: 'Gemstones', title: 'Exquisite Gems', description: 'Discover the island\'s famous blue sapphires and other precious stones.' },
    { id: 6, src: '/whale-watching-colorful-boat-sri-lanka-ocean.jpg', alt: 'Whale Watching', title: 'Marine Life', description: 'Go whale watching and see the gentle giants of the ocean.' },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Why Sri Lanka?</h2>
          <p className="text-lg text-gray-600 mt-2">A Land of Wonder and Diversity</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whySriLankaItems.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-lg">
              <img src={item.src} alt={item.alt} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                <p className="text-white/90 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
