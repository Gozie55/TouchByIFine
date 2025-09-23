// src/components/CallToAction.tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-16 bg-pink-600 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 lg:px-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Shine? Book Your Appointment Today!
        </h2>

        <div className="flex justify-center gap-4 flex-wrap">
          {/* Book Form Button */}
          <a href="#booking">
            <Button className="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 shadow-lg transition">
              Book Now
            </Button>
          </a>

          {/* WhatsApp Quick Button */}
          <a
            href="https://wa.me/1234567890?text=Hi! I’d like to book an appointment at IFine Beauty Salon."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full shadow-md"
          >
            Book via WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
