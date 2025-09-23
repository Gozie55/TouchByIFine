// src/components/HeroSection.tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold mb-4"
        >
          Touch By IFine Beauty World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Redefining elegance with expert care for your hair, nails, and skin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
                 href={`https://wa.me/2348101900133?text=Hi! I’d like to book an appointment at Touch By IFine Beauty World.`}
              target="_blank"
              rel="noopener noreferrer"
                >
          <Button className="bg-pink-600 text-white text-lg px-8 py-3 rounded-full shadow-lg hover:bg-pink-700 transition">
            Book Now
          </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
