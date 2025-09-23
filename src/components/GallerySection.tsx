// src/components/GallerySection.tsx
import { useState } from "react";
import { motion } from "framer-motion";

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
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Our Gallery
          </h2>
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
