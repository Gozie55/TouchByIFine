// src/components/HeroSection.tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-no-repeat bg-center bg-black"
      style={{
        backgroundImage: "url('/images/ifeanyi/shop1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl sm:text-6xl font-extrabold mb-12 text-white "
        >
          Touch By IFine Beauty World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-2xl mb-12 max-w-2xl mx-auto text-white  font-story font-light"
        >
          Redefining elegance with expert care for your hair and nails.
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
            <Button className="bg-white text-pink-600 text-lg px-12 py-6 rounded-full shadow-lg hover:bg-pink-700 hover:text-white  transition font-bold">
              Book Now
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
