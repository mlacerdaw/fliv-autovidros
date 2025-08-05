import React from 'react';
import WhatsAppButton from '@/components/WhatsappButton';
import { motion } from 'framer-motion';

const FinalCTASection = () => (
  <section className="py-16 md:py-24 bg-fliv-blue-primary text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Está com o vidro danificado? Não espere!
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl mb-8 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Clique no botão abaixo e fale com a unidade mais próxima ou solicite um orçamento geral.
      </motion.p>
      <WhatsAppButton
        phoneNumber="+5519998626087"
        message="Olá! Tenho um vidro danificado e gostaria de um orçamento."
        text="Solicitar Orçamento pelo WhatsApp"
        className="bg-white text-fliv-blue-primary hover:bg-gray-100 text-lg px-8 py-3"
      />
    </div>
  </section>
);

export default FinalCTASection;
  