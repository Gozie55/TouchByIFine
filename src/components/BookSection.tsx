import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    date: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappNumber = "2348101900133";

      const handleWhatsAppBooking = () => {
  // Convert date into "30th September, 2025"
  let formattedDate = formData.date;
  if (formData.date) {
    const dateObj = new Date(formData.date);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("en-US", { month: "long" });
    const year = dateObj.getFullYear();

    // Add suffix: st, nd, rd, th
    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";

    formattedDate = `${day}${suffix} ${month}, ${year}`;
  }

  const message = `Hello! I'd like to book an appointment at Touch By IFine Beauty World.

\u{1F464} Name: ${formData.name}
\u{1F487} Service: ${formData.service}
\u{1F4C5} Date: ${formattedDate}
\u{1F4DD} Additional Details: ${formData.details || "N/A"}`;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
};



  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-lg mx-auto space-y-6 bg-white p-8 rounded-2xl shadow-xl"
    >
      <h3 className="text-2xl font-bold text-center text-pink-600">
        Book Your Appointment
      </h3>

      {/* Input Fields */}
      <motion.input
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-3 w-full text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
      />

      <motion.select
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-3 w-full text-gray-800 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-pink-500"
      >
        <option value="">Select Service</option>
        <option value="Hair Styling">Hair Styling</option>
        <option value="Nails">Nails</option>
        <option value="Makeup">Makeup</option>
      </motion.select>

      <motion.input
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-3 w-full text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
      />

      <motion.textarea
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        name="details"
        placeholder="Additional Details (e.g. preferred time, style requests...)"
        value={formData.details}
        onChange={handleChange}
        rows={4}
        className="border border-gray-300 rounded-lg px-4 py-3 w-full text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
      />

      {/* WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center"
      >
        <Button
          type="button"
          onClick={handleWhatsAppBooking}
          className="bg-green-500 text-white hover:bg-green-600 rounded-full w-full sm:w-auto px-10 py-5 text-lg shadow-md transition-all"
        >
          Book an Appointment
        </Button>
      </motion.div>
    </motion.div>
  );
}
