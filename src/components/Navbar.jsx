import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-pastel-beige/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl md:text-3xl font-serif font-bold text-pastel-dark cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            Café Del Mar
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {["Início", "Sobre", "Menu", "Galeria", "Contato"].map(
              (item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() =>
                      scrollToSection(
                        item === "Início" ? "hero" : item.toLowerCase()
                      )
                    }
                    className="text-pastel-dark hover:text-pastel-olive transition-colors duration-300 font-medium"
                  >
                    {item}
                  </button>
                </motion.li>
              )
            )}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col space-y-1.5 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-pastel-dark transition-transform ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-pastel-dark transition-opacity ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-pastel-dark transition-transform ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : "100%",
        }}
        className="md:hidden fixed top-0 right-0 bottom-0 w-64 bg-pastel-cream shadow-2xl"
      >
        <ul className="flex flex-col space-y-6 p-8 mt-20">
          {["Início", "Sobre", "Menu", "Galeria", "Contato"].map((item) => (
            <li key={item}>
              <button
                onClick={() =>
                  scrollToSection(
                    item === "Início" ? "hero" : item.toLowerCase()
                  )
                }
                className="text-lg text-pastel-dark hover:text-pastel-olive transition-colors duration-300"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
