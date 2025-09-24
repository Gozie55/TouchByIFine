// src/components/ServicesSection.tsx
import { motion } from "framer-motion";
import { Scissors, Sparkles, Brush, Hand, Heart } from "lucide-react";

const services = [
  {
    icon: <Scissors className="w-10 h-10 text-pink-600" />,
    title: "Frontal Installation",
    description: "Perfect frontal installs with natural hairline customization and sleek finish.",
    price: "From ₦5,000",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-pink-600" />,
    title: "Wig Installation",
    description: "Seamless wig installs with styling for everyday or special occasions.",
    price: "From ₦5,000",
  },
  {
    icon: <Brush className="w-10 h-10 text-pink-600" />,
    title: "Braids & Cornrows",
    description: "Box braids, knotless, cornrows, twists, and protective styles.",
    price: "From ₦5,000",
  },
  {
    icon: <Hand className="w-10 h-10 text-pink-600" />,
    title: "Manicure & Pedicure",
    description: "Nail extensions, acrylics, gel polish, and luxury pedicures.",
    price: "From ₦5,000",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-pink-600" />,
    title: "Nail Art & Design",
    description: "Custom nail art, Swarovski crystals, ombré, and 3D designs.",
    price: "From ₦5,000",
  },
  {
    icon: <Heart className="w-10 h-10 text-pink-600" />,
    title: "Bridal Glam",
    description: "Complete bridal package — flawless hair styling, nails, and glam.",
    price: "From ₦50,000",
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
