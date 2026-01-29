import { menuItems } from "../const/index";
export const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between px-16 py-12">
        {/* Left */}
        <a href="/" className="text-xl font-bold">
          AGBO
        </a>

        {/* Center */}
        <ul className="flex gap-8 text-sm font-medium">
          {menuItems.map((items) => (
            <li key={items.id} className="relative group">
              <a href={items.href}>{items.label}</a>
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Right */}
        <a href="#contact">CONTACT ME</a>
      </nav>
    </header>
  );
};
