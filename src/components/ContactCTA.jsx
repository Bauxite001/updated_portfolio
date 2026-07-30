import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="px-6 xl:px-16 py-24 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center border border-gray-800 px-8 py-16 md:py-20 relative"
      >
        <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
          Let's Work Together
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
          Have a project in mind?
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Whether it's a web app, a mobile app, or both — I'll help you scope
          it, build it, and ship it.
        </p>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="bg-amber-400 text-black px-10 py-4 rounded font-black hover:bg-amber-300 duration-200 transition-all cursor-pointer tracking-wide"
          >
            Get In Touch →
          </motion.button>
        </Link>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
    </section>
  );
};
