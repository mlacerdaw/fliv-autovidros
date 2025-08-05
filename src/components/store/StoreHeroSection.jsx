import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const StoreHeroSection = ({ store }) => {
  const whatsappUrl = `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento na ${store.name}.`)}`;

  return (
    <section className="relative bg-gradient-to-br from-fliv-blue-secondary via-fliv-blue-primary to-blue-400 text-white py-20 md:py-32">
      <div className="absolute inset-0">
        <img  className="w-full h-full object-cover opacity-20" alt={`Imagem de fundo para ${store.name}`} src={store.heroImage} />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Seu vidro automotivo trincou ou quebrou?
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-4xl font-semibold text-blue-200 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A FLIV resolve com agilidade, qualidade e segurança!
        </motion.h2>
        <motion.h3
          className="text-xl md:text-3xl font-medium text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Bem-vindo à {store.name}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button size="lg" asChild className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Solicitar Orçamento em {store.city}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default StoreHeroSection;
  