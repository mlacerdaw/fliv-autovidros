import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-fliv-blue-secondary via-fliv-blue-primary to-blue-400 text-white py-20 md:py-32">
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
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Seu vidro automotivo trincou ou quebrou?
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold text-blue-200 mb-8">
        A FLIV resolve com agilidade, qualidade e segurança!
      </h2>
      <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
        Mais de 25 anos de experiência. Encontre a unidade mais próxima e solicite seu orçamento.
      </p>
    </div>
  </section>
);

export default HeroSection;
  