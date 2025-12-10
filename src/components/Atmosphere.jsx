import { motion } from "framer-motion";

const Atmosphere = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ),
      title: "Café de Excelência",
      description: "Grãos premium de fazendas selecionadas",
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
          />
        </svg>
      ),
      title: "Estética Cinematográfica",
      description: "Ambiente inspirado no cinema clássico",
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      title: "Ingredientes Naturais",
      description: "Frescor e qualidade em cada prato",
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      title: "Experiência Premium",
      description: "Atendimento personalizado e acolhedor",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-pastel-cream">
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
            Atmosfera & Lifestyle
          </h2>
          <p className="text-lg md:text-xl text-pastel-brown max-w-2xl mx-auto">
            Viva o momento
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-serif font-semibold text-pastel-dark">
              Detalhes que Fazem a Diferença
            </h3>
            <p className="text-base md:text-lg text-pastel-brown leading-relaxed">
              Cada elemento do Café Del Mar foi escolhido para criar uma
              experiência sensorial completa. Da textura das madeiras nobres ao
              aroma do café recém-moído, da iluminação suave que acaricia cada
              superfície ao som ambiente cuidadosamente selecionado.
            </p>
            <p className="text-base md:text-lg text-pastel-brown leading-relaxed">
              Aqui, o tempo ganha outro ritmo. É um convite para desacelerar,
              apreciar e conectar-se com o momento presente.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-pastel-beige p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-pastel-olive mb-4">{feature.icon}</div>
                <h4 className="text-xl font-serif font-semibold text-pastel-dark mb-2">
                  {feature.title}
                </h4>
                <p className="text-pastel-brown">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Atmosphere;
