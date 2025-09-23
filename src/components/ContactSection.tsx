// src/components/ContactSection.tsx
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Music } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Get in Touch</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We’d love to hear from you! Visit us, call us, or connect with us on social media.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="text-pink-600 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">
                  123 Beauty Street, Glamour City, Country
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="text-pink-600 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+123 456 7890</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="text-pink-600 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">info@ifinesalon.com</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4">
              <Clock className="text-pink-600 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-gray-800">Working Hours</h4>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 transition"
              >
                <Music className="w-5 h-5" />
              </a>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-md"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <iframe
              title="Salon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509084!2d144.95373531531865!3d-37.816279979751634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f0f0df%3A0xfb4c1b59d0d9f0e7!2sYour%20Salon%20Address!5e0!3m2!1sen!2s!4v1633028400000!5m2!1sen!2s"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-2xl shadow-md"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
