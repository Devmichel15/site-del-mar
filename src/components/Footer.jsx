const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-pastel-dark text-pastel-cream py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">
              Café Del Mar
            </h3>
            <p className="text-pastel-brown">
              Mais que um café. Uma experiência.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {["Início", "Sobre", "Menu", "Galeria", "Contato"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      scrollToSection(
                        item === "Início" ? "hero" : item.toLowerCase()
                      )
                    }
                    className="text-pastel-brown hover:text-pastel-gold transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Contato</h4>
            <p className="text-pastel-brown mb-2">Luanda, Angola</p>
            <p className="text-pastel-brown">
              +244 923 456 789
              <br />
              contato@cafedelmar.ao
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-pastel-brown/30 pt-8 text-center">
          <p className="text-pastel-brown text-sm">
            &copy; {new Date().getFullYear()} Café Del Mar. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
