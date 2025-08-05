
import React from 'react';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials as allTestimonialsData } from '@/data/testimonials';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const TestimonialsSection = ({ storeCity }) => {
  const testimonialsToDisplay = storeCity
    ? allTestimonialsData.filter(t => t.city === storeCity)
    : allTestimonialsData;

  if (testimonialsToDisplay.length === 0 && storeCity) {
    return (
      <section id="depoimentos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users size={48} className="text-fliv-blue-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-fliv-blue-secondary mb-4">Depoimentos de Clientes em {storeCity}</h2>
          <p className="text-lg text-gray-600">Ainda não temos depoimentos para esta unidade. Seja o primeiro!</p>
        </div>
      </section>
    );
  }
  
  if (testimonialsToDisplay.length === 0) {
    return null; 
  }


  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Users size={48} className="text-fliv-blue-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-fliv-blue-secondary mb-4">
            O que nossos clientes dizem
            {storeCity && ` em ${storeCity}`}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A satisfação de quem confia na FLIV é nossa maior recompensa. Veja alguns depoimentos:
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsToDisplay.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard
                name={testimonial.name}
                city={testimonial.city}
                testimonial={testimonial.testimonial}
                avatarText={testimonial.avatarText}
                avatarImage={testimonial.avatarImage}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
  