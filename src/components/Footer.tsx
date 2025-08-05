
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-gradient-to-br from-[#04657D] to-[#34ACC4] text-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <img 
                src="/lovable-uploads/cabf341a-f2f2-4a49-bcfd-d4e04f0414c1.png" 
                alt="Aluga Xpress" 
                className="h-10 sm:h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-blue-200 leading-relaxed text-sm sm:text-base">
              Tecnologia de ponta para sua empresa, sem complicações. 
              Aluguel de equipamentos de TI com suporte completo.
            </p>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Contato</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200 text-sm sm:text-base">(11) 4000-0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200 text-sm sm:text-base break-all">contato@alugaxpress.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200 text-sm sm:text-base">São Paulo, SP</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Horário de Funcionamento</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <div className="text-blue-200 text-sm sm:text-base">
                  <p>Segunda a Sexta</p>
                  <p>8h às 18h</p>
                </div>
              </div>
              <div className="text-blue-200 mt-3 sm:mt-4 text-sm sm:text-base">
                <p><strong>Suporte Técnico:</strong></p>
                <p>24h por dia, 7 dias por semana</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Soluções</h3>
            <ul className="space-y-1 sm:space-y-2 text-blue-200 text-sm sm:text-base">
              <li>Roteadores Cisco</li>
              <li>Switches Cisco</li>
              <li>Servidores Cisco, HP e Dell</li>
              <li>Firewalls e Access Points</li>
              <li>Suporte Técnico 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-300/30 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-blue-200 mb-2 text-sm sm:text-base">
            © 2024 Aluga Xpress. Todos os direitos reservados.
          </p>
          <p className="text-blue-200 text-sm sm:text-base mb-2">
            Transformando tecnologia em resultados desde 1998
          </p>
          <p className="text-blue-200 text-xs sm:text-sm">
            Desenvolvido por{' '}
            <a 
              href="https://agenciadigitalprime.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors underline"
            >
              Agência Digital Prime
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
