import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Gallery = () => {
  const galleryImages = [
    {
      src: "/space7.jpg",
      alt: "Vista panorâmica do café",
      className: "lg:col-span-2 lg:row-span-2",
    },
    { src: "/space8.jpg", alt: "Detalhes da decoração", className: "" },
    { src: "/space9.jpg", alt: "Ambiente acolhedor", className: "" },
    {
      src: "/space4.jpg",
      alt: "Espaço interno elegante",
      className: "lg:row-span-2",
    },
    { src: "/space5.jpg", alt: "Mesa preparada", className: "" },
    {
      src: "/space6.jpg",
      alt: "Iluminação cinematográfica",
      className: "",
    },
  ];

  return (
    <section id="galeria" className="py-20 md:py-32 bg-pastel-beige">
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
            Nosso Ambiente
          </h2>
          <p className="text-lg md:text-xl text-pastel-brown max-w-2xl mx-auto">
            Cada canto, uma cena cinematográfica
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <ParallaxImage key={index} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ParallaxImage = ({ image, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-lg shadow-lg group ${image.className}`}
    >
      <motion.img
        style={{ y }}
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pastel-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default Gallery;
