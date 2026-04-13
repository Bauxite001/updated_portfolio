import { motion } from "framer-motion";
import { icons } from "../const/index";

const Icons = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Top edge line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-xs font-bold tracking-[0.3em] uppercase text-gray-600 mb-10"
      >
        Tools & Technologies
      </motion.p>

      {/* Scrolling strip */}
      <div
        className="w-screen overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div className="scroll-icons flex gap-4 md:gap-6 w-max items-center py-2">
          {icons.map((icon, i) => (
            <div
              key={i}
              className="group flex items-center justify-center shrink-0 bg-gray-900 border border-gray-800 rounded-xl p-3 hover:border-amber-400 transition-all duration-300"
            >
              <img
                src={icon.imagePath}
                alt={`icon-${i}`}
                className="size-8 md:size-10 object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
          {icons.map((icon, i) => (
            <div
              key={`dup-${i}`}
              className="group flex items-center justify-center shrink-0 bg-gray-900 border border-gray-800 rounded-xl p-3 hover:border-amber-400 transition-all duration-300"
            >
              <img
                src={icon.imagePath}
                alt={`icon-dup-${i}`}
                className="size-8 md:size-10 object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
    </section>
  );
};

export default Icons;
