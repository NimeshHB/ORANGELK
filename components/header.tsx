'use client'

import { Button } from "@/components/ui/button"
import { Globe, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

type HeaderProps = {
  theme?: "dark" | "light";
}

export default function Header({ theme = "light" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const linkClasses = theme === 'light' ? 'text-white' : 'text-black';
  const buttonClasses = theme === 'light'
    ? "bg-white/10 border-white text-white hover:bg-white hover:text-gray-900"
    : "border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-white";

  const navBgClass = theme === 'light'
    ? 'bg-gradient-to-r from-black/60 to-black/60 backdrop-blur-sm'
    : 'bg-white shadow-md';

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tours", label: "Tours" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/destinations", label: "Destinations" },
    { href: "/other", label: "Other" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 ${navBgClass}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <span className={`text-xl font-bold ${linkClasses}`}>ORANGELK</span>
        </Link>

        {/* Desktop Navigation */}
        <div className={`hidden lg:flex items-center gap-6 xl:gap-8 text-sm ${linkClasses}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-orange-500 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Language Button */}
        <Button variant="outline" className={`hidden lg:flex ${buttonClasses}`}>
          <Globe className="w-4 h-4 mr-2" />
          English
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 ${linkClasses}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Slide-in */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ORANGELK</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-900"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-900 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              <Globe className="w-4 h-4 mr-2" />
              English
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}