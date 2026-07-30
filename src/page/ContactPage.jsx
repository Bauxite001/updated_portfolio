import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Contact } from "../components/contact";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const ContactPage = () => {
  const navigate = useNavigate();

  useDocumentMeta(
    "Contact Bauzytech — Hire a Full-Stack Web & Mobile Developer",
    "Get in touch with Bauzytech for your next web or mobile app project. Based in Abuja, Nigeria, available for remote work worldwide. Email, WhatsApp, or use the contact form.",
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 xl:px-16">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-600 hover:text-amber-400 transition-colors duration-200 mt-8 cursor-pointer"
          >
            ← Back to Home
          </motion.button>
        </div>

        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
