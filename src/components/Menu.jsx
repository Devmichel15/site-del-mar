import { motion } from "framer-motion";

const Menu = () => {
  const menuItems = [
    {
      image: "/product1.jpg",
      title: "Cafés Especiais",
      description:
        "Grãos selecionados de origem única, torrados artesanalmente para realçar notas complexas e aromáticas.",
      label: "Especialidade",
    },
    {
      image: "/product2.jpg",
      title: "Pastelaria Artesanal",
      description:
        "Criações diárias feitas com ingredientes premium, da croissanteria francesa aos doces portugueses tradicionais.",
      label: "Artesanal",
    },
    {
      image: "/product3.jpg",
      title: "Refeições Gourmet",
      description:
        "Menu sazonal com pratos cuidadosamente elaborados, combinando técnicas clássicas e toques contemporâneos.",
      label: "Gourmet",
    },
    {
      image: "/product4.jpg",
      title: "Bebidas Exclusivas",
      description:
        "De chás raros a coquetéis autorais, nossa carta de bebidas surpreende pelos sabores únicos e apresentação impecável.",
      label: "Exclusivo",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="menu" className="py-20 md:py-32 bg-pastel-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-pastel-dark mb-4">
            Nosso Menu
          </h2>
          <p className="text-lg md:text-xl text-pastel-brown max-w-2xl mx-auto">
            Sabores que encantam
          </p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group bg-pastel-beige rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pastel-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="absolute top-4 right-4 bg-pastel-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item.label}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-pastel-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-pastel-brown leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
