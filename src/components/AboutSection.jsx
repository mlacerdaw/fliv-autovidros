import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, ShieldCheck, MessageCircle } from 'lucide-react';

const AboutSection = ({ showImageAndPoints = true }) => {
  const flivDescription = `A FLIV Auto Vidros é uma empresa do grupo União Vidros Automotivos, que tem uma trajetória sólida que se estende por mais de 24 anos no mercado automotivo.

Desde o início, nosso compromisso tem sido oferecer soluções de alta qualidade, sempre priorizando a satisfação e segurança de nossos clientes. Somos movidos pela paixão por automóveis e pelo desejo de proporcionar um atendimento que vai além das expectativas, com uma abordagem personalizada e um foco incansável na melhoria contínua.

Nosso time de especialistas é altamente qualificado e utiliza as melhores práticas do setor, garantindo que cada serviço, desde pequenos reparos até substituições completas, seja executado com precisão e cuidado.

Estamos aqui para atender você com a qualidade e o profissionalismo que só quem tem mais de duas décadas de experiência pode oferecer.`;

  return (
    <section id="sobre" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-fliv-blue-secondary mb-4">Sobre a FLIV</h2>
          <div className="text-lg text-gray-700 max-w-3xl mx-auto space-y-4">
            {flivDescription.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
        {showImageAndPoints && (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                class="rounded-lg shadow-xl w-full h-auto object-cover max-h-96"
                alt="Equipe FLIV em ação ou unidade moderna"
               src="/images/WhatsApp Image 2025-01-29 at 16.53.43.jpeg" />
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-fliv-blue-primary h-8 w-8 mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-fliv-blue-secondary">Mais de 24 anos de mercado</h3>
                  <p className="text-gray-600">Tradição e confiança que você pode contar.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="text-fliv-blue-primary h-8 w-8 mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-fliv-blue-secondary">Equipe Especializada</h3>
                  <p className="text-gray-600">Profissionais treinados para oferecer o melhor serviço.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ShieldCheck className="text-fliv-blue-primary h-8 w-8 mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-fliv-blue-secondary">Qualidade e Agilidade</h3>
                  <p className="text-gray-600">Seu carro pronto rapidamente, com a segurança que merece.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MessageCircle className="text-fliv-blue-primary h-8 w-8 mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-fliv-blue-secondary">Atendimento Humanizado</h3>
                  <p className="text-gray-600">Valorizamos cada cliente, oferecendo um atendimento próximo.</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
  