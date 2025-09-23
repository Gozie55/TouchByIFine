// src/components/Footer.tsx
import { motion } from "framer-motion";
import { Instagram, Facebook, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 lg:px-20"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">IFine Beauty Salon</h3>
            <p className="text-sm text-gray-400">
              Elegance, style, and beauty redefined.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row gap-6 text-center md:text-left">
            <a
              href="#services"
              className="hover:text-white transition"
            >
              Services
            </a>
            <a
              href="#booking"
              className="hover:text-white transition"
            >
              Booking
            </a>
            <a
              href="#contact"
              className="hover:text-white transition"
            >
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/touch_by_ifine?utm_source=qr&igsh=MWI0NzlhejY5eGl1ZQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-pink-600 transition"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.facebook.com/share/17B81J8SLc/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-pink-600 transition"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.tiktok.com/@touch_by_ifine_beautywrd?_t=ZN-8zyJ4I6lsfe&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-pink-600 transition"
            >
              <Music className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} IFine Beauty Salon. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}
