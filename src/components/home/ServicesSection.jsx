
import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Settings, ShieldCheck, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <path d="M7 17h10" />
      <path d="M5 17v-2h14v2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}

const services = [
  { name: 'Troca de para-brisa', icon: <ShieldCheck size={48} className="text-fliv-blue-primary" /> },
  { name: 'Reparo de trincas', icon: <Wrench size={48} className="text-fliv-blue-primary" /> },
  { name: 'Vidros laterais', icon: <CarIcon className="text-fliv-blue-primary" /> },
  { name: 'Vidro traseiro', icon: <CarIcon className="text-fliv-blue-primary" /> },
  { name: 'Regulagem de vidros elétricos', icon: <Settings size={48} className="text-fliv-blue-primary" /> },
  { name: 'Outros sob consulta', icon: <CheckCircle size={48} className="text-fliv-blue-primary" /> },
];

const ServicesSection = () => (
  <section id="servicos" className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-fliv-blue-secondary mb-4">Serviços Prestados</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Oferecemos uma gama completa de serviços para vidros automotivos. Confira o que podemos fazer por você:
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="text-center hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle className="text-fliv-blue-secondary mt-4">{service.name}</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
  