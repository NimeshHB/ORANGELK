import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Twitter, Instagram, Youtube, Pin, Phone, Mail } from 'lucide-react';
import Header from "@/components/header";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/sri-lanka-lighthouse-at-sunset-palm-trees.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-sm text-white/90">Home / Contact Us</p>
        </div>
      </section>

      {/* Contact Form and Details Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <div>
            <h2 className="text-orange-500 font-semibold">CONTACT US</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you! Whether you have a question about our tours, need help planning your trip, or just want to say hello, please don't hesitate to reach out.
            </p>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 p-2 rounded-full">
                  <Pin className="text-white w-5 h-5" />
                </div>
                <span>Gothenburg, Sweden</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 p-2 rounded-full">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <span>+46 765 285 56</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 p-2 rounded-full">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <span>info@orangelk.com</span>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-orange-500 border border-orange-500 rounded-full p-2 hover:bg-orange-500 hover:text-white transition-colors"><Facebook /></a>
              <a href="#" className="text-orange-500 border border-orange-500 rounded-full p-2 hover:bg-orange-500 hover:text-white transition-colors"><Twitter /></a>
              <a href="#" className="text-orange-500 border border-orange-500 rounded-full p-2 hover:bg-orange-500 hover:text-white transition-colors"><Instagram /></a>
              <a href="#" className="text-orange-500 border border-orange-500 rounded-full p-2 hover:bg-orange-500 hover:text-white transition-colors"><Youtube /></a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Write Us a Message</h3>
            <form className="space-y-6">
              <div>
                <Input type="text" placeholder="Name" className="w-full" />
              </div>
              <div>
                <Input type="email" placeholder="Email" className="w-full" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="w-full" rows={5} />
              </div>
              <Button type="submit" size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d404743.3328492058!2d79.9242903619143!3d7.873053982869905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2sus!4v1647303323487!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          className="filter grayscale(1)"
        ></iframe>
      </section>
    </div>
  );
}