import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="sobre" className="py-20 md:py-32 bg-pastel-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-pastel-dark mb-4">
            Nossa História
          </h2>
          <p className="text-lg md:text-xl text-pastel-brown max-w-2xl mx-auto">
            Um refúgio de elegância e sabor
          </p>
        </motion.div>

        {/* First Grid - Image Left */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative overflow-hidden rounded-lg shadow-xl"
          >
            <img
              src="/space5.jpg"
              alt="Espaço acolhedor do Café Del Mar"
              className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              ...fadeInUp,
              visible: {
                ...fadeInUp.visible,
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-serif font-semibold text-pastel-dark">
              Uma Jornada Sensorial
            </h3>
            <p className="text-base md:text-lg text-pastel-brown leading-relaxed">
              No Café Del Mar, cada detalhe foi cuidadosamente pensado para
              proporcionar uma experiência única. Nosso espaço combina a
              nostalgia do cinema clássico com o conforto contemporâneo, criando
              um ambiente onde o tempo parece desacelerar.
            </p>
            <p className="text-base md:text-lg text-pastel-brown leading-relaxed">
              Desde 2020, temos o privilégio de servir não apenas café
              excepcional, mas momentos inesquecíveis. Cada xícara conta uma
              história, cada prato é uma obra de arte.
            </p>
          </motion.div>
        </div>

        {/* Second Grid - Image Right */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              ...fadeInUp,
              visible: {
                ...fadeInUp.visible,
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}
            className="space-y-6 md:order-1"
          >
            <h3 className="text-3xl md:text-4xl font-serif font-semibold text-pastel-dark">
              Ambiente & Experiência
            </h3>
            <p className="text-base md:text-lg text-pastel-brown leading-relaxed">
              Inspirado nos cafés europeus clássicos e na estética
              cinematográfica dos anos dourados, o Café Del Mar é um convite à
              contemplação. Madeira nobre, iluminação suave e uma atmosfera
              acolhedora criam o cenário perfeito para encontros memoráveis.
            </p>
            <p className="text-base md:text-lg text-pastel-brown leading-relaxed">
              Seja para um café matinal tranquilo, um almoço de negócios ou um
              encontro especial, nosso espaço se adapta ao seu momento.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative overflow-hidden rounded-lg shadow-xl md:order-2"
          >
            <img
              src="/space6.jpg"
              alt="Detalhes do ambiente do Café Del Mar"
              className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
