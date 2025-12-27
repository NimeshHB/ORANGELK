
import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">ORANGELK</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              OrangeLK is your gateway to discovering Sri Lanka's beauty, culture, and adventure. We specialize in
              creating personalized, responsible journeys that connect you with the heart of this tropical island.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-semibold">+46 765 285 56</p>
              <p className="text-sm text-cyan-400 hover:underline cursor-pointer">info@orangelk.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Tours</li>
              <li className="hover:text-white cursor-pointer">About us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Gallery</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Facebook</li>
              <li className="hover:text-white cursor-pointer">Twitter</li>
              <li className="hover:text-white cursor-pointer">Instagram</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <Button className="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center">
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          © DFOURLK All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
