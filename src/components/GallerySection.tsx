import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import { SiTiktok } from "react-icons/si";

// Data
const hairImages = [
  "/images/galleryHair/image1.jpeg",
  "/images/galleryHair/image2.jpeg",
  "/images/galleryHair/image3.jpeg",
  "/images/galleryHair/image4.jpeg",
  "/images/galleryHair/image5.jpeg",
  "/images/galleryHair/image6.jpeg",
  "/images/galleryHair/image7.jpeg",
  "/images/galleryHair/image8.jpeg",
  "/images/galleryHair/image9.jpeg",
  "/images/galleryHair/image10.jpeg",
  "/images/galleryHair/image11.jpeg",
  "/images/galleryHair/image12.jpeg",
  "/images/galleryHair/image13.jpeg",
  "/images/galleryHair/image14.jpeg",
];
const nailImages = [
  "/images/galleryNails/nail1.jpeg",
  "/images/galleryNails/nail2.jpeg",
  "/images/galleryNails/nail4.jpeg",
  "/images/galleryNails/nail5.jpeg",
  "/images/galleryNails/nail6.jpeg",
  "/images/galleryNails/nail7.jpeg",
  "/images/galleryNails/nail9.jpeg",
  "/images/galleryNails/nail10.jpeg",
  "/images/galleryNails/nail11.jpeg",
  "/images/galleryNails/nail12.jpeg",
  "/images/galleryNails/nail13.jpeg",
  "/images/galleryNails/nail14.jpeg",
  "/images/galleryNails/nail15.jpeg",
  "/images/galleryNails/nail3.jpeg",
  "/images/galleryNails/nail16.jpeg",
  "/images/galleryNails/nail17.jpeg",
  "/images/galleryNails/nail18.jpeg",
  "/images/galleryNails/nail19.jpeg",
  "/images/galleryNails/nail20.jpeg",
  "/images/galleryNails/nail21.jpeg",
];
const hairVideos = [
  "/videos/hairVideos/video1.mp4",
  "/videos/hairVideos/video2.mp4",
  "/videos/hairVideos/video3.mp4",
  "/videos/hairVideos/video4.mp4",
  "/videos/hairVideos/video5.mp4",
  "/videos/hairVideos/video6.mp4",
  "/videos/hairVideos/video7.mp4",
  "/videos/hairVideos/video8.mp4",
  "/videos/hairVideos/video9.mp4",
  "/videos/hairVideos/video10.mp4",
  "/videos/hairVideos/video11.mp4",
  "/videos/hairVideos/video12.mp4",
  "/videos/hairVideos/video13.mp4",
  "/videos/hairVideos/video14.mp4",
  "/videos/hairVideos/video15.mp4",
  "/videos/hairVideos/video16.mp4",
  "/videos/hairVideos/video17.mp4",
  "/videos/hairVideos/video18.mp4",
  "/videos/hairVideos/video19.mp4",
  "/videos/hairVideos/video20.mp4",
  "/videos/hairVideos/video21.mp4",
  "/videos/hairVideos/video22.mp4",
  "/videos/hairVideos/video23.mp4",
  "/videos/hairVideos/video24.mp4",
  "/videos/hairVideos/video25.mp4",
  "/videos/hairVideos/video26.mp4",
  "/videos/hairVideos/video27.mp4",
  "/videos/hairVideos/video28.mp4",
];
const nailVideos = [
  "/videos/nailVideos/video2.mp4",
  "/videos/nailVideos/video3.mp4",
  "/videos/nailVideos/video5.mp4",
  "/videos/nailVideos/video6.mp4",
  "/videos/nailVideos/video1.mp4",
  "/videos/nailVideos/video7.mp4",
  "/videos/nailVideos/video8.mp4",
  "/videos/nailVideos/video9.mp4",
  "/videos/nailVideos/video10.mp4",
  "/videos/nailVideos/video11.mp4",
  "/videos/nailVideos/video12.mp4",
  "/videos/nailVideos/video13.mp4",
  "/videos/nailVideos/video14.mp4",
  "/videos/nailVideos/video15.mp4",
  "/videos/nailVideos/video16.mp4",
  "/videos/nailVideos/video17.mp4",
  "/videos/nailVideos/video4.mp4",
];

// Tab structure
const tabs = [
  { label: "Hair Photos", items: hairImages, type: "image" },
  { label: "Nail Photos", items: nailImages, type: "image" },
  { label: "Hair Videos", items: hairVideos, type: "video" },
  { label: "Nail Videos", items: nailVideos, type: "video" },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const currentTab = tabs[activeTab];
  const displayedItems = expanded
    ? currentTab.items
    : currentTab.items.slice(0, 3);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % currentTab.items.length);
  }, [selectedIndex, currentTab.items.length]);

  const showPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (prev) => (prev! - 1 + currentTab.items.length) % currentTab.items.length
    );
  }, [selectedIndex, currentTab.items.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, showNext, showPrev]);

  const renderGrid = () => (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
      {displayedItems.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05, duration: 0.4 }}
          viewport={{ once: true }}
          className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl relative"
          onClick={() => openLightbox(i)}
        >
          {currentTab.type === "image" ? (
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              loading="lazy"
              className="w-full h-[600px] object-cover hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <>
              <video
                src={src}
                preload="metadata"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">▶</span>
              </div>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );

  // Create a ref for the gallery section
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const scrollToGalleryTop = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="gallery" ref={galleryRef} className="py-20 bg-white">
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

        {/* Tabs */}
        <div
          className={`flex justify-center mb-8 flex-wrap gap-4 transition-all duration-300 ${
            expanded
              ? "sticky top-20 z-40 bg-white shadow-md py-3" // stick under navbar with margin
              : ""
          }`}
        >
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveTab(idx);
                setExpanded(false); // collapse back
                scrollToGalleryTop(); // scroll to top of gallery
              }}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeTab === idx
                  ? "bg-pink-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {renderGrid()}

        {/* View All / Show Less button */}
        {currentTab.items.length > 6 && (
          <div className="text-center mt-6">
            <button
              onClick={() => {
                setExpanded((prev) => {
                  const newState = !prev;
                  if (prev) {
                    // If collapsing (Show Less), scroll to gallery top
                    scrollToGalleryTop();
                  }
                  return newState;
                });
              }}
              className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
            >
              {expanded ? "Show Less" : "View All"}
            </button>
          </div>
        )}

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

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div
            className="relative flex items-center justify-center w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev */}
            <button
              onClick={showPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full"
            >
              ◀
            </button>

            {/* Media */}
            {currentTab.type === "video" ? (
              <motion.video
                src={currentTab.items[selectedIndex]}
                controls
                autoPlay
                className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              />
            ) : (
              <motion.img
                src={currentTab.items[selectedIndex]}
                alt="Selected work"
                className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              />
            )}

            {/* Next */}
            <button
              onClick={showNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full"
            >
              ▶
            </button>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
