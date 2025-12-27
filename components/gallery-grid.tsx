'use client'

export default function GalleryGrid() {
  const galleryItems = [
    { id: 1, src: '/family-on-beach-sri-lanka-sunset.jpg', alt: 'Family on beach', span: 'col-span-2 row-span-2' },
    { id: 2, src: '/sri-lanka-train-on-bridge-through-lush-green-fores.jpg', alt: 'Train on bridge', span: 'col-span-1 row-span-1' },
    { id: 3, src: '/sri-lankan-food-curry-traditional-meal.jpg', alt: 'Traditional meal', span: 'col-span-1 row-span-1' },
    { id: 4, src: '/sri-lanka-lighthouse-at-sunset-palm-trees.jpg', alt: 'Lighthouse at sunset', span: 'col-span-1 row-span-2' },
    { id: 5, src: '/elephants-in-sri-lanka-safari-wildlife.jpg', alt: 'Elephants safari', span: 'col-span-1 row-span-1' },
    { id: 6, src: '/silhouette-couple-sunset-beach-sri-lanka.jpg', alt: 'Couple sunset', span: 'col-span-2 row-span-1' },
    { id: 7, src: '/sigiriya-rock-fortress-sri-lanka-tourist.jpg', alt: 'Sigiriya rock', span: 'col-span-1 row-span-1' },
    { id: 8, src: '/ancient-ruins-temple-pillars-sri-lanka-historical-.jpg', alt: 'Ancient ruins', span: 'col-span-1 row-span-2' },
    { id: 9, src: '/buddhist-temple-ornate-decorations-sri-lanka-cultu.jpg', alt: 'Buddhist temple', span: 'col-span-1 row-span-1' },
    { id: 10, src: '/gemstones-jewelry-craftsmanship-sri-lanka.jpg', alt: 'Gemstones', span: 'col-span-1 row-span-1' },
    { id: 11, src: '/rolling-green-tea-plantations-sri-lanka-hills.jpg', alt: 'Tea plantations', span: 'col-span-2 row-span-2' },
    { id: 12, src: '/whale-watching-colorful-boat-sri-lanka-ocean.jpg', alt: 'Whale watching', span: 'col-span-1 row-span-1' },
    { id: 13, src: '/golden-buddha-statue-dambulla-temple-blue-sky-pal.jpg', alt: 'Golden Buddha', span: 'col-span-1 row-span-1' },
    { id: 14, src: '/misty-mountain-landscape-sunrise-sri-lanka-hills-t.jpg', alt: 'Misty mountains', span: 'col-span-1 row-span-2' },
    { id: 15, src: '/negombo-beach-resort-hotel-aerial-view.jpg', alt: 'Beach resort', span: 'col-span-1 row-span-1' },
    { id: 16, src: '/sri-lankan-food-market-spices-colorful-people-smil.jpg', alt: 'Food market', span: 'col-span-2 row-span-1' },
    { id: 17, src: '/sri-lanka-tour-map-with-illustrated-route-showing-.jpg', alt: 'Tour map', span: 'col-span-1 row-span-1' },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] grid-flow-dense">
      {galleryItems.map((item) => (
        <div
          key={item.id}
          className={`${item.span} relative group overflow-hidden`}
        >
          <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      ))}
    </div>
  )
}