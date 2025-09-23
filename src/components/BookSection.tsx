// src/components/BookingSection.tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // 👉 Later: hook this to backend or email service
  };

  return (
    <section id="booking" className="py-20 bg-pink-50">
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
            Book an Appointment
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Schedule your next beauty session with us. Fill out the form below
            or reach us directly on WhatsApp.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
          >
            <option value="">Select a Service</option>
            <option value="haircut">Haircut & Styling</option>
            <option value="manicure">Manicure & Pedicure</option>
            <option value="makeup">Makeup Services</option>
            <option value="facial">Facial Treatments</option>
            <option value="bridal">Bridal Package</option>
          </select>

          <textarea
            name="message"
            placeholder="Additional Details"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              type="submit"
              className="bg-pink-600 text-white hover:bg-pink-700 px-8 py-3 rounded-full"
            >
              Submit Booking
            </Button>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/1234567890?text=Hi! I’d like to book an appointment at IFine Beauty Salon.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-center shadow-md"
            >
              Book via WhatsApp
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
