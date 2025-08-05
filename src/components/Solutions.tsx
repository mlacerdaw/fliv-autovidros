import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Wifi, Shield, Monitor, Zap, Settings, Router } from 'lucide-react';

interface SolutionsProps {
  onQuoteClick: (productName: string) => void;
}

const Solutions = ({ onQuoteClick }: SolutionsProps) => {
  const solutions = [
    {
      title: "Servidores Empresariais",
      description: "Servidores de alta performance para todas as necessidades empresariais",
      icon: Server,
      features: ["Alta performance", "Redundância", "Suporte 24/7"],
      image: "/lovable-uploads/deffcae0-ec44-4de9-867a-910253280b80.png"
    },
    {
      title: "Roteadores Empresariais", 
      description: "Conectividade empresarial com roteadores de alta qualidade",
      icon: Wifi,
      features: ["Conexão estável", "Segurança avançada", "Gerenciamento remoto"],
      image: "/lovable-uploads/57b7d25e-d24e-4045-ab28-2b753c68ab70.png"
    },
    {
      title: "Firewall",
      description: "Proteja sua rede com firewalls de última geração",
      icon: Shield,
      features: ["Segurança avançada contra ameaças", "Configuração personalizada", "Suporte especializado", "Redundância de links (SD-WAN)"],
      image: "/lovable-uploads/df01cee1-1445-4f90-bb0b-48e2de1f0aed.png"
    },
    {
      title: "Switch",
      description: "Mantenha sua rede corporativa rápida e confiável",
      icon: Router,
      features: ["Alta performance para conexões cabeadas", "Suporte a VLANs, PoE e empilhamento", "Equipamentos gerenciáveis"],
      image: "/lovable-uploads/a7adc1c6-dcb9-4273-875f-07f89d4ed256.png"
    },
    {
      title: "Workstations",
      description: "Estações de trabalho de alta performance",
      icon: Monitor,
      features: ["Processamento rápido", "Gráficos avançados", "Multitarefa"],
      image: "/lovable-uploads/ac8cd83e-5fef-4fb0-8e09-74c0850b34d3.png"
    },
    {
      title: "Access Points",
      description: "Wi-Fi corporativo de última geração",
      icon: Zap,
      features: ["Cobertura ampla", "Velocidade máxima", "Gerenciamento central"],
      image: "/lovable-uploads/58cd54c8-d295-4ee9-b0d4-d1d59395908b.png"
    },
    {
      title: "Suporte Técnico",
      description: "Equipe especializada 24/7 para sua tranquilidade",
      icon: Settings,
      features: ["Disponibilidade total", "Técnicos certificados", "Resposta rápida"],
      image: "/lovable-uploads/2a75d9a7-3649-4c3a-a71e-6510d7a267b3.png"
    }
  ];

  return (
    <section id="solucoes" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Nossas <span className="text-[#04657D]">Soluções</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Equipamentos de ponta com suporte completo para sua empresa crescer
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <div className="bg-gradient-to-br from-[#04657D] to-[#34ACC4] w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center">
                    <solution.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="aspect-video mb-3 sm:mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-lg sm:text-xl text-center text-gray-900 mb-2">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-center text-sm sm:text-base text-gray-600">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-2 mb-4 sm:mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#04657D] rounded-full"></div>
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={() => onQuoteClick(solution.title)}
                  className="w-full bg-gradient-to-r from-[#04657D] to-[#34ACC4] hover:from-[#34ACC4] hover:to-[#04657D] text-white font-semibold py-2 sm:py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
