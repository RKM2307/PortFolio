import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Move logo to the leftmost side */}
          <div className="flex-1">
            <a href="#home" className="font-mono text-xl font-bold text-white">
              Raja <span className="text-blue-500">Kesava Madhavan</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="w-7 h-5 relative cursor-pointer z-50 md:hidden text-white text-2xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✖" : "☰"}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-gray-300 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-gray-300 transition-colors">About Me</a>
            <a href="#projects" className="text-white hover:text-gray-300 transition-colors">Projects</a>
            <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-black transition-all duration-300 flex flex-col items-center justify-center space-y-8 md:hidden ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <a href="#home" className="text-white text-2xl font-bold" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" className="text-white text-2xl font-bold" onClick={() => setMenuOpen(false)}>About Me</a>
        <a href="#projects" className="text-white text-2xl font-bold" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" className="text-white text-2xl font-bold" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};
