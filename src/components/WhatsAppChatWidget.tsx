// src/components/WhatsAppChatWidget.tsx
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppChatWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="https://wa.me/1234567890?text=Hi! I’d like to know more about your salon services."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition"
      >
        <MessageCircle className="w-7 h-7" />

        {/* Tooltip */}
        <span className="absolute right-16 bg-gray-900 text-white text-sm rounded-md px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us
        </span>
      </a>
    </motion.div>
  );
}
