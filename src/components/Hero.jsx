import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Cinematic Effect */}
      <div className="absolute inset-0">
        <img
          src="/space4.jpg"
          alt="Interior cinematográfico do Café Del Mar"
          className="w-full h-full object-cover filter brightness-90 contrast-110"
        />
        <div className="absolute inset-0 cinematic-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-pastel-beige mb-6 text-shadow-soft leading-tight"
        >
          Mais que um café.
          <br />
          Uma experiência.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-pastel-cream mb-12 text-shadow-soft font-light"
        >
          Onde cada momento se transforma em memória
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-pastel-olive text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl hover:glow-effect transition-all duration-300 w-full sm:w-auto"
          >
            Ver Menu
          </motion.a>
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-pastel-beige text-pastel-beige rounded-full font-medium text-lg hover:bg-pastel-beige hover:text-pastel-dark transition-all duration-300 w-full sm:w-auto"
          >
            Reservar Mesa
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-pastel-beige rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-3 bg-pastel-beige rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
