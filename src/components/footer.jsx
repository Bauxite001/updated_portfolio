import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="px-6 xl:px-16 pt-16 pb-8 relative overflow-hidden">
      {/* Top edge line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Main row */}
        <div className="grid xl:grid-cols-3 gap-px bg-gray-800 mb-px">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black p-8 xl:p-10 flex flex-col gap-3"
          >
            <h3 className="text-2xl font-black text-white tracking-tight">
              Bauzytech<span className="text-amber-400">.</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Building performant, secure, and user-focused web products — from
              Abuja to the world.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-black p-8 xl:p-10 flex flex-col gap-4"
          >
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-gray-600 mb-2">
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Projects", href: "#project" },
                { label: "What I Do", href: "#whatido" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-500 text-sm hover:text-amber-400 transition-colors duration-200 w-fit"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black p-8 xl:p-10 flex flex-col gap-4"
          >
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-gray-600 mb-2">
              Find Me
            </p>
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: <FaGithub />,
                  label: "GitHub",
                  href: "https://github.com/yourusername",
                },
                {
                  icon: <FaLinkedin />,
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/yourusername",
                },
                {
                  icon: <FaTwitter />,
                  label: "Twitter",
                  href: "https://twitter.com/yourusername",
                },
                {
                  icon: <FaInstagram />,
                  label: "Instagram",
                  href: "https://instagram.com/yourusername",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-500 text-sm hover:text-amber-400 transition-colors duration-200 w-fit"
                >
                  <span className="text-base">{social.icon}</span>
                  {social.label} →
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-black px-8 xl:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-gray-700 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Bauzytech. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs tracking-widest uppercase">
            Designed & Built by Moses Agbo
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
