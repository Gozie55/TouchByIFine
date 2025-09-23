import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import About from "./components/AboutSection";
import Services from "./components/ServicesSection";
import Gallery from "./components/GallerySection";
import Testimonials from "./components/TestimonialSection";
import Pricing from "./components/PricingSection";
import Booking from "./components/BookSection";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";
import SpecialOffers from "./components/SpecialOffers";
import Newsletter from "./components/NewsletterSignup";
import WhatsAppChat from "./components/WhatsAppChatWidget";

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900">
        {/* Navbar */}
        <Navbar />

        {/* Main Sections */}
        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="services">
            <Services />
          </section>

          <section id="gallery">
            <Gallery />
          </section>

          <section id="testimonials">
            <Testimonials />
          </section>

          <section id="pricing">
            <Pricing />
          </section>

          <section id="booking">
            <Booking />
          </section>

          <section id="contact">
            <Contact />
          </section>

          {/* Extras */}
          <section id="offers">
            <SpecialOffers />
          </section>

          <section id="newsletter">
            <Newsletter />
          </section>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Chat Button */}
        <WhatsAppChat />
      </div>
    </Router>
  );
}

export default App;
