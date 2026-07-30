import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="px-6 xl:px-16 py-24 relative overflow-hidden"
    >
      {/* Top edge line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      {/* Background watermark */}
      <div className="absolute right-8 top-8 text-[160px] font-black text-white opacity-[0.02] select-none pointer-events-none leading-none">
        04
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
            The Person
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-amber-400 mt-4" />
        </motion.div>

        {/* Two column layout */}
        <div className="grid xl:grid-cols-2 gap-px bg-gray-800">
          {/* Left — main bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black p-10 xl:p-14 space-y-6"
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm <span className="text-amber-400 font-black">Bauzytech</span>
              , a self-taught full-stack developer based in{" "}
              <span className="text-white font-black">Abuja, Nigeria</span> —
              building web products, mobile apps, and taking on client
              projects independently.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              My core stack is{" "}
              <span className="text-white font-semibold">
                React, Node.js, Tailwind CSS, Supabase, and PostgreSQL
              </span>
              . I build full-stack applications end to end — from responsive
              interfaces to backend APIs and database design. I've shipped real
              products including an NGO platform with a live Paystack donation
              flow, a PWA weather app, and a service marketplace.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              I'm actively building, learning, and taking on remote
              opportunities that challenge me. If you need someone who can own a
              project from first commit to production —{" "}
              <span className="text-amber-400 font-black">let's talk</span>.
            </p>

            <div className="pt-4">
              <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-gray-700 text-white px-10 py-4 font-black tracking-widest uppercase text-sm hover:border-amber-400 hover:text-amber-400 transition-all duration-300 cursor-pointer"
                >
                  Get In Touch →
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Right — capabilities breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-black p-10 xl:p-14 flex flex-col gap-8"
          >
            {[
              {
                label: "Security-Aware Development",
                description:
                  "OWASP principles, auth design, and input validation baked into every project — not added as an afterthought.",
              },
              {
                label: "QA Thinking",
                description:
                  "Testing edge cases, writing test plans, and catching bugs before users do across browsers and devices.",
              },
              {
                label: "AI & Data Work",
                description:
                  "Model evaluation, data labeling, SQL-based analysis. I understand the data layer, not just the UI.",
              },
              {
                label: "Full Lifecycle Ownership",
                description:
                  "From first commit to production deployment — I own the whole thing, no handoffs needed.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex gap-5 items-start border-b border-gray-900 pb-8 last:border-0 last:pb-0"
              >
                {/* Number */}
                <span className="text-gray-700 text-xs font-black tracking-widest mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="space-y-1">
                  <h4 className="text-white font-black text-base">
                    {item.label}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
    </section>
  );
};
