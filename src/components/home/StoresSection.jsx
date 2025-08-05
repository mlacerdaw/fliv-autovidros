
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const stores = [
  { name: 'Araraquara', path: '/araraquara', imgSrc: '/images/loja-araraquara.jpeg' },
  { name: 'Mogi Guaçu', path: '/mogiguacu', imgSrc: '/images/loja-mogiguacu.jpeg' },
  { name: 'Bebedouro', path: '/bebedouro', imgSrc: '/images/loja-bebedouro.jpeg' },
  { name: 'Matão', path: '/matao', imgSrc: '/images/loja-matao.jpeg' },
];

const StoresSection = () => (
  <section id="lojas" className="py-12 md:py-16 lg:py-24 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-fliv-blue-secondary mb-4">Nossas Lojas</h2>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Encontre a unidade FLIV mais perto de você. Estamos prontos para atendê-lo!
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {stores.map((store, index) => (
          <motion.div
            key={store.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <div className="h-40 md:h-48 w-full overflow-hidden">
                <img  
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  alt={`Fachada da loja FLIV em ${store.name}`} 
                  src={store.imgSrc} 
                />
              </div>
              <CardHeader className="pb-2 md:pb-4">
                <CardTitle className="text-fliv-blue-secondary text-lg md:text-xl">{store.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex items-end pt-0">
                <Button asChild className="w-full bg-fliv-blue-primary hover:bg-fliv-blue-secondary text-white text-sm md:text-base py-2 md:py-3">
                  <Link to={store.path}>
                    <MapPin className="mr-2 h-4 w-4" /> Ver detalhes da loja
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StoresSection;
