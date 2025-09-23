// src/components/TestimonialsSection.tsx
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emily Johnson",
    review:
      "Absolutely loved my experience at IFine Beauty Salon! The staff was so kind, and my haircut was flawless.",
    rating: 5,
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Sophia Martinez",
    review:
      "The manicure and pedicure were so relaxing. I’ll definitely come back. Highly recommend!",
    rating: 4,
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Olivia Smith",
    review:
      "My bridal makeup was stunning! Everyone complimented me the whole night. Thank you, IFine team!",
    rating: 5,
    image:
      "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-pink-50">
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
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Trusted by women who love to look and feel their best.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <p className="text-gray-600 italic mb-4">“{t.review}”</p>

              {/* Star rating */}
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-5 h-5 ${
                      idx < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <h4 className="text-lg font-semibold text-pink-700">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
