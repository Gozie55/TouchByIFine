// src/components/SpecialOffers.tsx
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SpecialOffers() {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-600 to-pink-400 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 lg:px-20 text-center"
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <Gift className="w-10 h-10 text-white" />
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">Special Offer</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          🎉 Get <span className="font-semibold">20% OFF</span> your first appointment at Touch By IFine Beauty World. 
          Experience elegance, style, and beauty like never before!
        </p>

        {/* CTA Button */}
        <a href="#booking">
          <Button className="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 shadow-lg transition">
            Claim Offer
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
