// src/components/ContactSection.tsx
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { SiTiktok } from "react-icons/si";

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
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Get in Touch
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We’d love to hear from you! Visit us, call us, or connect with us on
            social media.
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
                  20A, Cemetery Road, Amukoko, Ajeromi-Ifelodun, Lagos.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="text-pink-600 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+2348101900133</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="text-pink-600 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">touchbyifine@gmail.com</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4">
              <Clock className="text-pink-600 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-gray-800">Working Hours</h4>
                <p className="text-gray-600">Mon - Sun: 9:00 AM - 8:00 PM</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/touch_by_ifine?utm_source=qr&igsh=MWI0NzlhejY5eGl1ZQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/17B81J8SLc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@touch_by_ifine_beautywrd?_t=ZN-8zyJ4I6lsfe&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 transition"
              >
                <SiTiktok className="w-5 h-5" />
              </a>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/2348101900133?text=Hi! I’d like to book an appointment at Touch By IFine Beauty World."
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5924064269066!2d3.322779999999997!3d6.446346000000011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8973c1915271%3A0x2e28798d11cd8195!2s20%20Cemetery%20Rd!5e0!3m2!1sen!2sng!4v1758656121174!5m2!1sen!2sng"
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
