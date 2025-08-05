
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-fliv-blue-secondary via-fliv-blue-primary to-blue-400 text-white py-16 md:py-20 lg:py-32">
    <div className="absolute inset-0">
      <img 
        className="w-full h-full object-cover opacity-20"
        alt="Fundo com imagem de vidro automotivo ou serviço em andamento"
        src="https://images.unsplash.com/photo-1541366920463-4934a0bfa9cb"
        loading="eager"
        width="1920"
        height="1080"
      />
    </div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Seu vidro automotivo trincou ou quebrou?
      </motion.h1>
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-200 mb-6 md:mb-8 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        A FLIV resolve com agilidade, qualidade e segurança!
      </motion.h2>
      <motion.p
        className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto px-4 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Mais de 25 anos de experiência. Encontre a unidade mais próxima e solicite seu orçamento.
      </motion.p>
    </div>
  </section>
);

export default HeroSection;
