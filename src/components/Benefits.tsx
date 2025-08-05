
import React from 'react';
import { Briefcase, RotateCw, Wrench, DollarSign } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Briefcase,
      title: "Zero Investimento Inicial",
      description: "Comece a usar equipamentos de ponta sem desembolsar capital inicial"
    },
    {
      icon: RotateCw,
      title: "Equipamentos Atualizados",
      description: "Sempre com a tecnologia mais recente, sem se preocupar com obsolescência"
    },
    {
      icon: Wrench,
      title: "Suporte Técnico Incluso",
      description: "Manutenção e suporte especializado inclusos no contrato"
    },
    {
      icon: DollarSign,
      title: "Vantagem Fiscal",
      description: "Economia fiscal e melhoria do fluxo de caixa para sua empresa"
    }
  ];

  return (
    <section id="vantagens" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Por que escolher a 
            <span className="text-[#04657D]"> Aluga Xpress</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Oferecemos soluções completas que transformam a forma como sua empresa gerencia tecnologia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-[#04657D] to-[#34ACC4] w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
