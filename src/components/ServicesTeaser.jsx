import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { whatIDoItems } from "../const/index";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export const ServicesTeaser = () => {
  const featured = whatIDoItems.slice(0, 3);

  return (
    <section
      id="whatido"
      className="px-6 xl:px-16 py-24 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      <div className="absolute right-8 top-8 text-[160px] font-black text-white opacity-[0.02] select-none pointer-events-none leading-none">
        02
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Capabilities
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              What I Do
            </h2>
            <div className="w-16 h-1 bg-amber-400 mt-4" />
          </div>
          <Link
            to="/services"
            className="text-gray-400 hover:text-amber-400 font-semibold text-sm tracking-widest uppercase transition-colors duration-200 self-start sm:self-auto"
          >
            All Services →
          </Link>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-px"
        >
          {featured.map((item, i) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="bg-black p-8 flex flex-col gap-4 group hover:bg-gray-950 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="text-gray-700 text-xs font-black tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="text-3xl">{item.icon}</div>
              <h3 className="text-white font-black text-xl leading-snug group-hover:text-amber-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border border-gray-700 text-white px-12 py-4 font-black tracking-widest uppercase text-sm hover:border-amber-400 hover:text-amber-400 transition-all duration-300 cursor-pointer"
            >
              See All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
    </section>
  );
};
