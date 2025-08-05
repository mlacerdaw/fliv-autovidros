
import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppButton from '@/components/WhatsappButton';
import { Truck } from 'lucide-react';

const MobileServiceSection = ({ storePhoneNumber, storeName, storeImgSrc }) => {
  const defaultPhoneNumber = "+5500000000000";
  const phoneNumber = storePhoneNumber || defaultPhoneNumber;
  const message = storeName 
    ? `Olá! Gostaria de um orçamento para o serviço móvel da unidade ${storeName}.`
    : "Olá! Gostaria de um orçamento para o serviço móvel.";
  const imageSrc = storeImgSrc || "/images/ARARAQUARA.jpg";

  return (
    <section id="servico-movel" className="py-12 md:py-16 lg:py-24 bg-fliv-blue-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <img  
              className="rounded-lg shadow-xl w-full h-auto object-cover max-h-64 md:max-h-80 lg:max-h-96" 
              alt="Van de serviço da FLIV equipada para atendimento móvel" 
              src={imageSrc} 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center mb-4 md:mb-6">
              <Truck size={32} className="text-blue-300 mr-3 md:mr-4 md:w-10 md:h-10" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">SE PRECISAR, NÓS VAMOS ATÉ VOCÊ!</h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-3 md:mb-4 leading-relaxed">
              Compreendemos que imprevistos podem acontecer e que a sua rotina não pode parar por causa de um problema com o vidro do seu carro.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-3 md:mb-4 leading-relaxed">
              Por isso, a fim de garantir a maior comodidade aos nossos clientes, oferecemos um serviço de troca de para-brisa onde você se encontra, seja em sua casa, no trabalho, ou em qualquer outro local conveniente para você.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-6 md:mb-8 leading-relaxed">
              Disponibilizamos veículos equipados com todas as ferramentas necessárias para o serviço e equipes treinadas para atender às suas necessidades de forma eficiente e segura, inclusive nas estradas de rodagem.
            </p>
            <WhatsAppButton
              phoneNumber={phoneNumber}
              message={message}
              text="FAÇA SEU ORÇAMENTO"
              className="bg-white text-fliv-blue-primary hover:bg-gray-200 text-base md:text-lg px-4 md:px-6 lg:px-8 py-2 md:py-3"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileServiceSection;
