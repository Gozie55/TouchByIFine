// src/components/AboutSection.tsx
import { motion } from "framer-motion";

const values = [
  {
    title: "Personalized Care",
    description: "Every client gets a unique experience tailored to their style.",
  },
  {
    title: "Premium Products",
    description: "We only use high-quality, professional-grade beauty products.",
  },
  {
    title: "Relaxing Atmosphere",
    description: "A soothing space designed to help you unwind and glow.",
  },
];

const team = [
  {
    name: "Isabella Grace",
    role: "Lead Stylist",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sophia Rose",
    role: "Nail Artist",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Olivia Jade",
    role: "Makeup Specialist",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            At <span className="font-semibold">IFine Beauty Salon</span>, we
            believe beauty is confidence. Our team of experts combines skill,
            creativity, and passion to deliver stunning transformations.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl shadow-md bg-pink-50 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-pink-700">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Meet Our Team</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 object-cover rounded-full mx-auto shadow-lg mb-4"
                />
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-pink-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
