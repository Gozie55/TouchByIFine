// src/components/NewsletterSignup.tsx
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
    // 👉 Hook this to Mailchimp, Brevo, or backend later
  };

  return (
    <section className="py-20 bg-pink-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 lg:px-20 text-center"
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <Mail className="w-10 h-10 text-pink-600" />
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Get Beauty Tips & Offers
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Join our newsletter to receive exclusive beauty tips, special promotions, and updates from IFine Beauty Salon.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 border border-gray-300 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-pink-500"
          />
          <Button
            type="submit"
            className="bg-pink-600 text-white px-8 py-8 rounded-full hover:bg-pink-700 transition"
          >
            Subscribe
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
