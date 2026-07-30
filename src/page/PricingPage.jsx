import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { pricingPlans, pricingNotes, siteInfo } from "../const/index";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const PricingPage = () => {
  const navigate = useNavigate();

  useDocumentMeta(
    "Pricing — Bauzytech | Web & Mobile App Development Rates",
    "Starting price ranges for Bauzytech web app projects, from landing pages to full-stack platforms. Mobile app and combined web+mobile pricing available on request.",
  );
  const whatsappHref = `https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent(
    "Hi Bauzytech, I'd like a custom quote for a project.",
  )}`;

  return (
    <>
      <Navbar />

      <main className="min-h-screen px-6 xl:px-16 pt-32 pb-24 relative overflow-hidden">
        {/* Background watermark */}
        <div className="absolute right-8 top-8 text-[160px] font-black text-white opacity-[0.02] select-none pointer-events-none leading-none">
          06
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Return button */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-600 hover:text-amber-400 transition-colors duration-200 mb-10 cursor-pointer"
          >
            ← Back to Home
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Investment
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Pricing
            </h1>
            <div className="w-16 h-1 bg-amber-400 mt-4" />
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mt-6">
              Straightforward starting ranges for common project types.
              Every project gets scoped properly first — final pricing
              depends on features, timeline, and integrations.
            </p>
          </motion.div>

          {/* Plans */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-px bg-gray-800"
          >
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={fadeUp}
                className={`flex flex-col p-8 xl:p-10 gap-6 relative ${
                  plan.highlighted ? "bg-gray-950" : "bg-black"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute top-0 right-0 bg-amber-400 text-black text-xs font-black tracking-widest uppercase px-4 py-1.5">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-white font-black text-2xl">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {plan.tagline}
                  </p>
                  <span className="inline-block mt-3 text-xs font-bold tracking-widest uppercase text-amber-400 border border-amber-400/40 rounded-full px-3 py-1">
                    {plan.platform}
                  </span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-black text-amber-400">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 text-sm">
                      {plan.period}
                    </span>
                  )}
                </div>

                <div className="w-full h-px bg-gray-800" />

                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-3 items-start text-sm text-gray-400"
                    >
                      <Check
                        size={16}
                        className="text-amber-400 shrink-0 mt-0.5"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={
                    plan.name === "Full-Stack / Custom"
                      ? whatsappHref
                      : "#contact"
                  }
                  target={
                    plan.name === "Full-Stack / Custom" ? "_blank" : undefined
                  }
                  rel={
                    plan.name === "Full-Stack / Custom"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  onClick={(e) => {
                    if (plan.name !== "Full-Stack / Custom") {
                      e.preventDefault();
                      navigate("/");
                      setTimeout(() => {
                        document
                          .querySelector("#contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }
                  }}
                  className={`text-center px-6 py-4 font-black tracking-widest uppercase text-sm transition-all duration-300 cursor-pointer ${
                    plan.highlighted
                      ? "bg-amber-400 text-black hover:bg-amber-300"
                      : "border border-gray-700 text-white hover:border-amber-400 hover:text-amber-400"
                  }`}
                >
                  {plan.name === "Full-Stack / Custom"
                    ? "Get a Quote →"
                    : "Get Started →"}
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Notes — hosting/domain + mobile add-on */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 border border-gray-800 bg-gray-950 p-6 md:p-8 space-y-3"
          >
            {pricingNotes.map((note, i) => (
              <p
                key={i}
                className="text-gray-400 text-sm leading-relaxed flex gap-3 items-start"
              >
                <span className="text-amber-400 mt-0.5 shrink-0">→</span>
                <span>{note}</span>
              </p>
            ))}
            <p className="text-gray-600 text-xs pt-2 border-t border-gray-800 mt-4">
              Prices above are starting estimates in Naira and may vary based
              on project scope. Message me on WhatsApp for an accurate quote.
            </p>
          </motion.div>

          {/* Return button — bottom */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-600 hover:text-amber-400 transition-colors duration-200 mt-16 cursor-pointer mx-auto"
          >
            ← Back to Home
          </motion.button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PricingPage;
