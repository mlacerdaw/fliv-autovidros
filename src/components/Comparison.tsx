
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

interface ComparisonProps {
  onQuoteClick: () => void;
}

const Comparison = ({ onQuoteClick }: ComparisonProps) => {
  const comparisonData = [
    {
      feature: "Investimento Inicial",
      traditional: { value: "R$ 50.000+", isGood: false },
      rental: { value: "R$ 0", isGood: true }
    },
    {
      feature: "Manutenção",
      traditional: { value: "Por sua conta", isGood: false },
      rental: { value: "Incluída", isGood: true }
    },
    {
      feature: "Atualização",
      traditional: { value: "Cada 3-5 anos", isGood: false },
      rental: { value: "Sempre atual", isGood: true }
    },
    {
      feature: "Suporte Técnico",
      traditional: { value: "Terceirizado", isGood: false },
      rental: { value: "24/7 Incluso", isGood: true }
    },
    {
      feature: "Obsolescência",
      traditional: { value: "Risco alto", isGood: false },
      rental: { value: "Sem risco", isGood: true }
    },
    {
      feature: "Flexibilidade",
      traditional: { value: "Limitada", isGood: false },
      rental: { value: "Total", isGood: true }
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            <span className="text-[#04657D]">Aluguel</span> vs Compra
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Veja por que o aluguel é a melhor opção para sua empresa
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Mobile Layout */}
          <div className="block sm:hidden space-y-4">
            {comparisonData.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3 text-center">{item.feature}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <X className="w-5 h-5 text-red-500" />
                      <span className="text-sm font-medium text-gray-700">Compra</span>
                    </div>
                    <span className="text-sm text-gray-600">{item.traditional.value}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-medium text-gray-700">Aluguel</span>
                    </div>
                    <span className="text-sm text-gray-600">{item.rental.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden sm:block bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-gradient-to-r from-[#04657D] to-[#34ACC4] text-white">
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-center">Recurso</h3>
              </div>
              <div className="p-4 md:p-6 border-l border-white/20">
                <h3 className="text-lg md:text-xl font-bold text-center">Compra Tradicional</h3>
              </div>
              <div className="p-4 md:p-6 border-l border-white/20">
                <h3 className="text-lg md:text-xl font-bold text-center">Aluguel Aluga Xpress</h3>
              </div>
            </div>

            {comparisonData.map((item, index) => (
              <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="p-4 md:p-6 font-semibold text-gray-900">
                  {item.feature}
                </div>
                <div className="p-4 md:p-6 border-l border-gray-200">
                  <div className="flex items-center space-x-2">
                    <X className="w-5 h-5 text-red-500" />
                    <span className="text-gray-600">{item.traditional.value}</span>
                  </div>
                </div>
                <div className="p-4 md:p-6 border-l border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">{item.rental.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button 
              onClick={onQuoteClick}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              Quero Economizar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
