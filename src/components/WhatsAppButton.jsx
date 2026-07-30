import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { siteInfo } from "../const/index";

export const WhatsAppButton = () => {
  const message = encodeURIComponent(
    "Hi Bauzytech, I found your portfolio and I'd like to talk about a project.",
  );
  const href = `https://wa.me/${siteInfo.whatsapp}?text=${message}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-black/40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <FaWhatsapp className="relative text-black text-3xl" />

      {/* Tooltip on hover — desktop only */}
      <span className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 border border-gray-700 text-white text-xs font-semibold px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
};
