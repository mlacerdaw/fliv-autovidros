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
    <section id="servico-movel" className="py-16 md:py-24 bg-fliv-blue-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img  className="rounded-lg shadow-xl w-full h-auto object-cover max-h-96" alt="Van de serviço da FLIV equipada para atendimento móvel" src={imageSrc} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <Truck size={40} className="text-blue-300 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">SE PRECISAR, NÓS VAMOS ATÉ VOCÊ!</h2>
            </div>
            <p className="text-lg text-blue-100 mb-4 leading-relaxed">
              Compreendemos que imprevistos podem acontecer e que a sua rotina não pode parar por causa de um problema com o vidro do seu carro.
            </p>
            <p className="text-lg text-blue-100 mb-4 leading-relaxed">
              Por isso, a fim de garantir a maior comodidade aos nossos clientes, oferecemos um serviço de troca de para-brisa onde você se encontra, seja em sua casa, no trabalho, ou em qualquer outro local conveniente para você.
            </p>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Disponibilizamos veículos equipados com todas as ferramentas necessárias para o serviço e equipes treinadas para atender às suas necessidades de forma eficiente e segura, inclusive nas estradas de rodagem.
            </p>
            <WhatsAppButton
              phoneNumber={phoneNumber}
              message={message}
              text="FAÇA SEU ORÇAMENTO"
              className="bg-white text-fliv-blue-primary hover:bg-gray-200 text-lg px-8 py-3"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileServiceSection;
  