import { motion } from "framer-motion";
import { whatIDoItems } from "../const/index";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export const WhatIDo = () => {
  return (
    <section
      id="whatido"
      className="px-6 xl:px-16 py-24 relative overflow-hidden"
    >
      {/* Top edge line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      {/* Background number watermark */}
      <div className="absolute right-8 top-8 text-[160px] font-black text-white opacity-[0.02] select-none pointer-events-none leading-none">
        02
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header — left aligned, not centered */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Capabilities
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            What I Do
          </h2>
          <div className="w-16 h-1 bg-amber-400 mt-4" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-px "
        >
          {whatIDoItems.map((item, i) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="bg-black p-8 flex flex-col gap-5 group hover:bg-gray-950 transition-all duration-300 relative overflow-hidden cursor-default"
            >
              {/* Hover amber line on top */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Number */}
              <span className="text-gray-700 text-xs font-black tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="text-3xl">{item.icon}</div>

              {/* Title */}
              <h3 className="text-white font-black text-xl leading-snug group-hover:text-amber-400 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-gray-700 group-hover:bg-amber-400 group-hover:w-16 transition-all duration-300" />

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-500 border border-gray-800 group-hover:border-gray-600 px-3 py-1 rounded-sm transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
    </section>
  );
};
