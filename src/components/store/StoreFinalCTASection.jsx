
import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppButton from '@/components/WhatsappButton';

const StoreFinalCTASection = ({ storeName, storePhoneNumber }) => {
  const message = `Olá! Gostaria de um orçamento na ${storeName}. Tenho uma urgência com o vidro do meu carro.`;

  return (
    <section className="bg-gradient-to-r from-fliv-blue-primary to-fliv-blue-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Está com o vidro danificado? Não espere!
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-blue-200 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Clique no botão abaixo e fale com a unidade {storeName} ou solicite um orçamento geral.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <WhatsAppButton
            phoneNumber={storePhoneNumber}
            message={message}
            text="Solicitar Orçamento pelo WhatsApp"
            className="text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 py-3 px-8"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default StoreFinalCTASection;
  