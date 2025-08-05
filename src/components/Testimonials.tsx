
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Juliana Martins",
      position: "Diretora de TI",
      company: "TechSolutions",
      content: "Reduzimos nossos custos em 40% com a locação da Aluga Xpress! O suporte é excepcional e os equipamentos sempre atualizados.",
      rating: 5
    },
    {
      name: "Carlos Silva",
      position: "CEO",
      company: "StartupBrasil",
      content: "A Aluga Xpress nos permitiu escalar rapidamente sem grandes investimentos. Recomendo para qualquer empresa que quer crescer smart.",
      rating: 5
    },
    {
      name: "Ana Costa",
      position: "Gerente Financeiro",
      company: "FinanceGroup",
      content: "O impacto no fluxo de caixa foi impressionante. Conseguimos alocar recursos para outras áreas estratégicas da empresa.",
      rating: 5
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            O que nossos <span className="text-[#04657D]">clientes dizem</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Mais de 1000 empresas confiam na Aluga Xpress para suas necessidades de TI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#04657D] mb-3 sm:mb-4" />
              
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-3 sm:pt-4">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                <p className="text-[#04657D] font-medium text-sm">{testimonial.position}</p>
                <p className="text-gray-600 text-xs sm:text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
