import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const AboutTeaser = () => {
  return (
    <section
      id="about"
      className="px-6 xl:px-16 py-24 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      <div className="absolute right-8 top-8 text-[160px] font-black text-white opacity-[0.02] select-none pointer-events-none leading-none">
        04
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3"
        >
          The Person
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white leading-tight mb-8"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg leading-relaxed mb-10"
        >
          I'm <span className="text-amber-400 font-black">Bauzytech</span>, a
          self-taught full-stack developer based in{" "}
          <span className="text-white font-black">Abuja, Nigeria</span> —
          building web products, mobile apps, and taking on client projects
          independently, from first commit to production.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border border-gray-700 text-white px-10 py-4 font-black tracking-widest uppercase text-sm hover:border-amber-400 hover:text-amber-400 transition-all duration-300 cursor-pointer"
            >
              Read Full Story →
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
    </section>
  );
};
