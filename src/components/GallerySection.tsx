// src/components/GallerySection.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import { SiTiktok } from "react-icons/si";

const images = [
  "/images/galleryHair/image1.jpeg",
  "/images/galleryHair/image2.jpeg",
  "/images/galleryHair/image3.jpeg",
  "/images/galleryHair/image4.jpeg",
  "/images/galleryHair/image5.jpeg",
  "/images/galleryHair/image6.jpeg",
  "/images/galleryHair/image7.jpeg",
  "/images/galleryHair/image8.jpeg",
  "/images/galleryHair/image9.jpeg",

  "/images/galleryNails/nail2.jpeg",
  "/images/galleryNails/nail12.jpeg",
  "/images/galleryNails/nail4.jpeg",
  "/images/galleryNails/nail7.jpeg",
  "/images/galleryNails/nail8.jpeg",
  "/images/galleryNails/nail5.jpeg",
  "/images/galleryNails/nail3.jpeg",
  "/images/galleryNails/nail10.jpeg",
  "/images/galleryNails/nail11.jpeg",
];

export default function GallerySection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Gallery</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Explore stunning before-and-after transformations and highlights of
            our beauty services.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-24">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl"
              onClick={() => setSelected(img)}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-120 object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Socials CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Click our socials to see more photos & videos of our work
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.tiktok.com/@touch_by_ifine_beautywrd?_t=ZN-8zyJ4I6lsfe&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 transition"
            >
              <SiTiktok className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/touch_by_ifine?utm_source=qr&igsh=MWI0NzlhejY5eGl1ZQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 transition"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/share/17B81J8SLc/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 transition"
            >
              <Facebook className="w-8 h-8" />
            </a>
            
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <motion.img
            src={selected}
            alt="Selected work"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
