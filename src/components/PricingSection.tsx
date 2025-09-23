// src/components/PricingSection.tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    title: "Haircut & Styling",
    price: "$40",
    description: "Professional haircut, wash, and blow-dry.",
    features: ["Expert stylists", "Personalized styles", "Premium products"],
    popular: false,
  },
  {
    title: "Manicure & Pedicure",
    price: "$60",
    description: "Complete nail care with polish and treatment.",
    features: ["Hand & foot massage", "Wide range of colors", "Relaxing spa"],
    popular: true, // Highlight this one
  },
  {
    title: "Bridal Package",
    price: "$200",
    description: "Full bridal beauty package for your big day.",
    features: ["Bridal makeup", "Hair styling", "Nails & skin care"],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Pricing</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Choose a package that suits your style and occasion. Our services
            are designed to make you shine.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center relative ${
                plan.popular ? "border-2 border-pink-500 bg-pink-50" : "bg-gray-50"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {plan.title}
              </h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <p className="text-4xl font-bold text-pink-600 mb-6">
                {plan.price}
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✓ {f}</li>
                ))}
              </ul>
              <a
                 href={`https://wa.me/2348101900133?text=Hi! I’d like to book an appointment at Touch By IFine Beauty World.`}
              target="_blank"
              rel="noopener noreferrer"
                >
              <Button className="bg-pink-600 text-white hover:bg-pink-700 px-6 py-2 rounded-full">
                Book Now
              </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
