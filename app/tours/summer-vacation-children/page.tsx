import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Globe, ArrowRight, Facebook, Twitter, Instagram } from "lucide-react"
import Header from "@/components/header"

export default function TourDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />



      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="/family-on-beach-sri-lanka-sunset.jpg"
          alt="Family on beach"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-balance">
            SUMMER VACATION IN SRI LANKA WITH CHILDREN
          </h1>
          <p className="text-xl md:text-2xl text-pretty">CULTURE, NATURE & LONG BEACH HOLIDAY</p>
        </div>

        <Button size="lg" className="absolute bottom-8 right-8 bg-[#FF5722] hover:bg-[#E64A19] text-white px-8 py-6">
          Contact OrangeLK
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </section>

      {/* Included in Price Section */}
      <section className="py-12 bg-[#B2EBF2]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#00BCD4] text-center mb-12">INCLUDED IN THE PRICE OF THE TRIP</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Accommodation & Meals */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accommodation & Meals</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• All accommodations during the tour</li>
                <li>• Breakfast every morning</li>
                <li>• Selected lunches and dinners</li>
                <li>• Welcome dinner on arrival</li>
                <li>• Farewell dinner on last evening</li>
                <li>• Bottled water in the vehicle</li>
                <li>• Tea and coffee during breaks</li>
                <li>• Snacks and fruits</li>
                <li>• Special dietary requirements catered</li>
                <li>• Vegetarian options available</li>
                <li>• Child-friendly meals</li>
                <li>• Beach resort stay (3 nights)</li>
                <li>• Hill country hotel (2 nights)</li>
                <li>• Cultural triangle hotels (2 nights)</li>
                <li>• Final night in Colombo</li>
              </ul>
            </div>

            {/* Transport & Service */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transport & Service</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Private air-conditioned vehicle</li>
                <li>• Professional multilingual guide</li>
                <li>• English-speaking driver</li>
                <li>• Airport transfers (arrival & departure)</li>
                <li>• All fuel costs</li>
                <li>• Driver accommodation and meals</li>
                <li>• Vehicle insurance</li>
                <li>• Parking fees</li>
                <li>• Road tolls</li>
                <li>• Child seats available</li>
                <li>• Luggage handling</li>
              </ul>
            </div>

            {/* Included entrance fees */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Included entrance fees & Activity fees</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Sigiriya Rock Fortress</li>
                <li>• Dambulla Cave Temple</li>
                <li>• Temple of the Tooth (Kandy)</li>
                <li>• Elephant orphanage visit</li>
                <li>• Spice garden tour</li>
                <li>• Tea plantation and factory</li>
                <li>• Cultural dance performance</li>
                <li>• Turtle hatchery</li>
                <li>• Traditional village experience</li>
                <li>• Colombo city tour</li>
                <li>• National park safari fees</li>
                <li>• Boat ride experiences</li>
                <li>• All government taxes</li>
                <li>• Service charges</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Not Included Section */}
      <section className="py-12 bg-[#E0F7FA]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#00BCD4] text-center mb-8">NOT INCLUDED IN THE PRICE OF THE TRIP</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Flights</li>
              <li>• Visa fee (approximately 50 USD per person, payable online or on arrival)</li>
              <li>• Travel insurance (highly recommended)</li>
              <li>• Personal expenses</li>
              <li>• Souvenirs</li>
              <li>• Additional meals and drinks not mentioned</li>
              <li>• Optional activities</li>
              <li>• Tips (at your discretion)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Good to Know Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/sri-lankan-food-market-spices-colorful-people-smil.jpg"
              alt="Family dining"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#00BCD4] mb-6">GOOD TO KNOW</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                This family-friendly tour is specifically designed for parents traveling with children. We understand
                the unique needs of families and have carefully crafted an itinerary that balances cultural experiences,
                nature adventures, and relaxation time.
              </p>
              <p>
                The pace is leisurely, with plenty of breaks and flexibility built in. All accommodations are
                child-friendly, many with pools and family rooms. Our guides are experienced in working with children
                and can adapt the commentary and activities to suit different age groups.
              </p>
              <p>
                We visit attractions at optimal times to avoid crowds and heat. Beach time is included for kids to play
                and relax. The private vehicle allows for comfort and flexibility, with stops whenever needed. Child
                seats and special meals can be arranged in advance.
              </p>
              <p>
                Safety is our priority - all activities are suitable for children, guides carry first aid kits, and we
                maintain communication with parents throughout. This is truly a memorable adventure the whole family
                will cherish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour in Short Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#00BCD4] mb-6">THE TOUR IN SHORT</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Celebrate your love story with this luxurious 10-day honeymoon journey through Sri Lanka, designed for
                  couples seeking romance, adventure, and unforgettable memories. This carefully curated itinerary
                  blends cultural exploration, breathtaking landscapes, and intimate moments in stunning locations.
                </p>
                <p>
                  Begin in the cultural heart of Kandy, where ancient temples and lush botanical gardens create a
                  romantic backdrop. Journey through misty hill country tea plantations, where you'll stay in charming
                  colonial-era hotels with spectacular mountain views. Experience the thrill of spotting elephants on a
                  private safari in Udawalawe National Park.
                </p>
                <p>
                  Marvel at the architectural wonder of Sigiriya Rock Fortress and explore ancient kingdoms together.
                  Wind through scenic countryside, stopping at spice gardens and traditional villages to immerse
                  yourselves in Sri Lankan culture and craftsmanship.
                </p>
                <p>
                  The tour culminates with four blissful days on pristine southern beaches, where you can relax,
                  snorkel, and enjoy romantic beachfront dinners as the sun sets over the Indian Ocean. This perfect
                  blend of adventure and relaxation creates lasting memories for newlyweds.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/sri-lanka-tour-map-with-illustrated-route-showing-.jpg"
                alt="Tour map of Sri Lanka"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#B2EBF2] to-[#80DEEA] opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Day-by-Day Itinerary Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Day 01 */}
          <div className="bg-[#B2EBF2] rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start">
            <div className="relative w-full md:w-64 h-48 flex-shrink-0 rounded-lg overflow-hidden">
              <Image src="/negombo-beach-resort-hotel-aerial-view.jpg" alt="Negombo resort" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <div className="inline-block bg-[#FF5722] text-white px-4 py-1 rounded text-sm font-bold mb-3">
                DAY 01
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Arrival → Negombo</h3>
              <p className="text-gray-700 mb-4">
                Your tour begins with a warm welcome at Colombo International Airport where your private driver will
                meet you. After a scenic drive, arrive at your beach resort where you can relax and recover from your
                long journey. Free time in the evening as required.
              </p>
              <div className="bg-[#0097A7] text-white rounded-lg p-4">
                <h4 className="font-bold mb-2">Optional Activities</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Swimming at beach resort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Sunset beach walk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Welcome dinner with ocean view</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Day 02 */}
          <div className="bg-[#B2EBF2] rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start">
            <div className="relative w-full md:w-64 h-48 flex-shrink-0 rounded-lg overflow-hidden">
              <Image src="/golden-buddha-statue-dambulla-temple-blue-sky-pal.jpg" alt="Dambulla Cave Temple" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <div className="inline-block bg-[#FF5722] text-white px-4 py-1 rounded text-sm font-bold mb-3">
                DAY 02
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Dambulla Cave Temple → Sigiriya</h3>
              <p className="text-gray-700 mb-4">
                Drive to the Cultural Triangle. Visit the stunning Dambulla Cave Temples, filled with ancient murals and
                Buddha statues. Check into your hotel near Sigiriya and relax.
              </p>
              <div className="bg-[#0097A7] text-white rounded-lg p-4">
                <h4 className="font-bold mb-2">Optional Activities</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Completes 6 tunnels massage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Poolside cocktails at the hotel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Day 03 */}
          <div className="bg-[#B2EBF2] rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start">
            <div className="relative w-full md:w-64 h-48 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src="/sigiriya-rock-fortress-sri-lanka-tourist.jpg"
                alt="Sigiriya Rock Fortress"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="inline-block bg-[#FF5722] text-white px-4 py-1 rounded text-sm font-bold mb-3">
                DAY 03
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sigiriya Rock Fortress</h3>
              <p className="text-gray-700 mb-4">
                Early morning climb of the magnificent Sigiriya Rock Fortress. Marvel at the ancient frescoes, mirror
                wall, and stunning views from the top. Afternoon at leisure to explore local village life.
              </p>
              <div className="bg-[#0097A7] text-white rounded-lg p-4">
                <h4 className="font-bold mb-2">Optional Activities</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Village cycling tour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Cooking class at the hotel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Day 04 */}
          <div className="bg-[#B2EBF2] rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start">
            <div className="relative w-full md:w-64 h-48 flex-shrink-0 rounded-lg overflow-hidden">
              <Image src="/misty-mountain-landscape-sunrise-sri-lanka-hills-t.jpg" alt="Hill country sunrise" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <div className="inline-block bg-[#FF5722] text-white px-4 py-1 rounded text-sm font-bold mb-3">
                DAY 04
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sigiriya → Kandy</h3>
              <p className="text-gray-700 mb-4">
                Journey to Kandy through scenic countryside. En route visit a spice garden to learn about Ceylon's
                famous spices. Arrive in Kandy and check into your hotel with mountain views.
              </p>
              <div className="bg-[#0097A7] text-white rounded-lg p-4">
                <h4 className="font-bold mb-2">Optional Activities</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Evening Kandyan dance show</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Romantic dinner at the hotel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2332] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#FF5722] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="font-bold text-xl">ORANGELK</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                OrangeLK combines premium standards with local expertise, exclusively focused on Sri Lanka travel. Our
                multilingual team crafts personalized experiences showcasing this island's stunning landscapes and rich
                culture.
              </p>
              <div className="space-y-2">
                <p className="text-white font-semibold">+46 765 285 56</p>
                <p className="text-[#00BCD4]">info@orangelk.com</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/tours" className="hover:text-white transition-colors">
                    Tours
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-white transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/offers" className="hover:text-white transition-colors">
                    Offers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Social Media</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors flex items-center gap-2">
                    <Facebook className="w-4 h-4" /> Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors flex items-center gap-2">
                    <Twitter className="w-4 h-4" /> Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors flex items-center gap-2">
                    <Instagram className="w-4 h-4" /> Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© OrangeLK All Rights Reserved</p>
            <Button className="bg-[#FF5722] hover:bg-[#E64A19] rounded-full w-12 h-12 p-0">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
