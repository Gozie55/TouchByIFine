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
      name: "Ifeanyi",
      role: "Hair Stylist and Nail Technician",
      images: [
      "/images/ifeanyi/ifeanyi2.jpeg",
      "/images/ifeanyi/shop1.jpeg",
      "/images/ifeanyi/ifeanyi1.jpeg",
      
    ],
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
            At <span className="font-semibold">Touch By IFine</span>, we
            believe beauty is confidence. We combine skill,
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
  <h3 className="text-3xl font-bold mb-12">Meet The Stylist</h3>

  {team.map((member, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      {/* Image Grid */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
        {member.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${member.name} ${idx + 1}`}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-72 md:h-96 lg:h-[28rem] object-cover rounded-2xl shadow-lg"
          />
        ))}
      </div>

      {/* Text */}
      <h4 className="text-2xl font-semibold">{member.name}</h4>
      <p className="text-pink-600">{member.role}</p>
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
}
