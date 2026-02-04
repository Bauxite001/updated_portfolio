import { menuItems } from "../const/index";

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#8080802d]">
      <nav className="flex items-center justify-between px-6 md:px-16 py-4">
        {/* Left */}
        <a href="/" className="text-xl font-bold text-white">
          AGBO
        </a>

        {/* Center */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-white">
          {menuItems.map((items) => (
            <li key={items.id} className="relative group">
              <a href={items.href} className="hover:text-yellow-400 transition">
                {items.label}
              </a>
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Right */}
        <a
          href="#contact"
          className="text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition"
        >
          CONTACT ME
        </a>
      </nav>
    </header>
  );
};
