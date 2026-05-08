import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-red-900/30">
      
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          Ahmed<span className="text-red-500">.dev</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          {links.map((link, i) => (
            <li
              key={i}
              onClick={() => scrollTo(link.id)}
              className="cursor-pointer hover:text-red-500 transition"
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-black border-t border-red-900/30">
          {links.map((link, i) => (
            <div
              key={i}
              onClick={() => scrollTo(link.id)}
              className="text-gray-300 hover:text-red-500 cursor-pointer transition"
            >
              {link.name}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}