// src/components/ServicesSection.tsx
import { motion } from "framer-motion";
import { Scissors, Sparkles, Brush, Hand, Heart } from "lucide-react";

const services = [
  {
    icon: <Scissors className="w-10 h-10 text-pink-600" />,
    title: "Haircut & Styling",
    description: "Professional cuts, blow-drys, and styling for every occasion.",
    price: "From $40",
  },
  {
    icon: <Hand className="w-10 h-10 text-pink-600" />,
    title: "Manicure & Pedicure",
    description: "Relaxing nail care with premium polish and treatments.",
    price: "From $25",
  },
  {
    icon: <Brush className="w-10 h-10 text-pink-600" />,
    title: "Makeup Services",
    description: "Flawless looks for weddings, parties, and special events.",
    price: "From $60",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-pink-600" />,
    title: "Facial Treatments",
    description: "Revitalize your skin with our range of soothing facials.",
    price: "From $50",
  },
  {
    icon: <Heart className="w-10 h-10 text-pink-600" />,
    title: "Bridal Packages",
    description: "Complete hair, nails, and makeup package for your big day.",
    price: "From $200",
  },
  {
    icon: <Brush className="w-10 h-10 text-pink-600" />,
    title: "Makeup Services",
    description: "Flawless looks for weddings, parties, and special events.",
    price: "From $60",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-pink-50">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Pamper yourself with our wide range of beauty treatments designed
            to make you feel confident, refreshed, and glowing.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-3">{service.description}</p>
              {service.price && (
                <p className="text-pink-600 font-medium">{service.price}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
