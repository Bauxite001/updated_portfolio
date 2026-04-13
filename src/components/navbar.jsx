import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "../const/index";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileOpen(false);
      if (isHome) {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black border-b border-gray-800" : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 xl:px-16 py-4">
          {/* Logo */}
          <a
            href="/"
            className="text-xl font-black text-white tracking-tight hover:text-amber-400 transition-colors duration-200"
          >
            AGBO<span className="text-amber-400">.</span>
          </a>

          {/* Desktop center links */}
          <ul className="hidden md:flex gap-10 text-xs font-bold tracking-widest uppercase text-gray-400">
            {menuItems.map((item) => (
              <li key={item.id} className="relative group">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  {item.label}
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* Desktop right CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden md:block text-xs font-black tracking-widest uppercase text-amber-400 border border-amber-400 px-5 py-2 hover:bg-amber-400 hover:text-black transition-all duration-200"
          >
            Contact Me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-white"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-white"
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
              }
              className="block w-6 h-px bg-white"
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {menuItems.map((item, i) => (
              <motion.a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-4xl font-black text-white hover:text-amber-400 transition-colors duration-200 tracking-tight"
              >
                {item.label}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: menuItems.length * 0.08 }}
              className="text-4xl font-black text-amber-400 hover:text-amber-300 transition-colors duration-200 tracking-tight"
            >
              Contact Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
