// src/components/Navbar.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = ["Home", "About", "Services", "Gallery", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const phone = "2348101900133";
  const message =
    "Hi! I’d like to book an appointment at Touch By IFine Beauty World.";
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <header className="fixed top-0 left-0 w-full bg-white backdrop-blur-xl shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo / Brand Name */}
        <div className="flex-1 flex justify-center md:justify-start items-center space-x-3 relative">
          <div className="h-14 w-14 rounded-full flex items-center justify-center shadow-lg">
            <img
              src="images/logo/logo1.png"
              alt="Touch By IFine Logo"
              className="h-24 w-24 object-contain"
            />
          </div>
          <span className="block w-full md:w-auto text-center md:text-left text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold tracking-wide bg-gradient-to-r from-pink-600 via-rose-500 to-yellow-500 bg-clip-text text-transparent font-serif">
            Touch By IFine
          </span>
        </div>

        {/* Desktop Nav + Book Now */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Nav Links */}
          <ul className="flex space-x-6 lg:space-x-8 xl:space-x-10 text-gray-700 font-medium tracking-wide">
            {navLinks.map((link) => (
              <li key={link} className="relative group">
                <a
                  href={`#${link.toLowerCase()}`}
                  className="transition-colors duration-300 hover:text-pink-600 uppercase text-sm font-semibold"
                >
                  {link}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Book Now Button */}
          <a href={waLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-pink-600 to-rose-500 text-white font-semibold rounded-full px-6 py-2 shadow-md hover:shadow-lg hover:from-pink-700 hover:to-yellow-500 transition-all duration-300">
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
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg z-40"
          >
            <ul className="flex flex-col items-center space-y-6 py-8 text-gray-700 font-medium">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block hover:text-pink-600 uppercase text-lg font-semibold transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-rose-500 text-white rounded-full py-3 px-6 text-lg font-semibold shadow-md hover:shadow-lg hover:from-pink-700 hover:to-yellow-500 transition-all duration-300">
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
