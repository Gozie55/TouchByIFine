// src/components/TestimonialsSection.tsx
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Uju",
    review:
      "IFine really understands hair! The way he styled mine, I didn’t even want to take it down. Everywhere I went, people kept asking where I did it. This place is worth it!",
    rating: 5,
    // image: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    name: "Jenny",
    review:
      "My nails came out so beautiful, I couldn’t stop looking at them. The design was neat, classy and it lasted longer than I expected. I’ll definitely be coming back.",
    rating: 5,
    // image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Blessing",
    review:
      "Touch By IFine is honestly the best. They took care of my hair gently, no stress at all. The wash, the setting, everything was done with so much care. I felt so relaxed.",
    rating: 4,
    // image: "https://randomuser.me/api/portraits/women/71.jpg",
  },
  {
    name: "Ngozi",
    review:
      "I just did my gel nails here and I love the results! My nails are shining like glass. From now on, this is my spot.",
    rating: 5,
    // image: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    name: "Kemi",
    review:
      "From the moment I stepped in, I felt at home. They treated me so well, and my braids came out clean and stylish. Even my colleagues noticed the difference immediately.",
    rating: 5,
    // image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Tosin",
    review:
      "Their nail service is top-notch! I wanted something simple but elegant, and they delivered it perfectly. Honestly, IFine pays attention to small details that matter.",
    rating: 5,
    // image: "https://randomuser.me/api/portraits/women/63.jpg",
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
              {/* <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-md"
              /> */}
              <p className="text-gray-600 italic mb-4">“{t.review}”</p>

              {/* Star rating */}
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-5 h-5 ${
                      idx < t.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
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
