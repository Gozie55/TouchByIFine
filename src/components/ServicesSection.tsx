// src/components/ServicesSection.tsx
import { motion } from "framer-motion";
// icons
import { Icon as LucideIcon, Brush, Sparkles, GraduationCap } from "lucide-react";
import { scissorsHairComb } from "@lucide/lab";



const services = [
  // Hair Services
  {
    icon: (
      <LucideIcon
        iconNode={scissorsHairComb}
        className="w-10 h-10 text-pink-600"
      />
    ),
    title: "Hair Services",
    description:
      "Wig Installation, Wigging, Revamping, Styling, Skull Cap, Glueless, Stretching, Curling & Colouring, Frontal Installation, Layering",
  },

  // Nail Services
  {
    icon: <Sparkles className="w-10 h-10 text-pink-600" />,
    title: "Nail Services",
    description:
      "Acrylic Nails, Gel Polish Nails, Press-on Nails, Polygel Nails, Nail Art & Design",
  },

  // Manicure & Pedicure
  {
    icon: <Brush className="w-10 h-10 text-pink-600" />,
    title: "Manicure & Pedicure",
    description:
      "Classic Manicure & Pedicure, Spa Pedicure, Gel Pedicure, Exfoliation & Foot Scrub, Cuticle Care, Polish Finish",
  },

  // Training
  {
    icon: <GraduationCap className="w-10 h-10 text-pink-600" />,
    title: "Training",
    description: "Professional training in hair, nail, and beauty services.",
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
            Pamper yourself with our wide range of beauty treatments designed to
            make you feel confident, refreshed, and glowing.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
