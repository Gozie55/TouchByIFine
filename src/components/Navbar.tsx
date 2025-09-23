// src/components/Navbar.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = ["Home", "About", "Services", "Gallery", "Pricing", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold text-pink-600 tracking-wide">
          Touch By IFine
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                  href="https://wa.me/2348101900133"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-pink-600 text-white hover:bg-pink-700">
                    Book Now
                  </Button>
                </a>

            </li>
          ))}
        </ul>

        {/* Book Now Button (Desktop) */}
        <div className="hidden md:block">
          <a
                  href="https://wa.me/2348101900133"
                  target="_blank"
                  rel="noopener noreferrer"
                >
          <Button className="bg-pink-600 text-white hover:bg-pink-700">
            Book Now
          </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-lg"
          >
            <ul className="flex flex-col space-y-4 py-6 px-4 text-gray-700 font-medium">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block hover:text-pink-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/2348101900133"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Button className="w-full bg-pink-600 text-white hover:bg-pink-700">
                  Book Now
                </Button>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
