
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';

const MonitoresProfissionais = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const products = [
    {
      id: 1,
      name: "Dell UltraSharp U2722DE",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2067&auto=format&fit=crop",
      description: "Monitor 27\" QHD IPS, USB-C, altura ajustável"
    },
    {
      id: 2,
      name: "LG 34WN80C UltraWide",
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2042&auto=format&fit=crop",
      description: "Monitor ultrawide 34\" WQHD, USB-C, curve"
    },
    {
      id: 3,
      name: "ASUS ProArt PA329C",
      image: "https://images.unsplash.com/photo-1551645120-d70bfe84c826?q=80&w=2070&auto=format&fit=crop",
      description: "Monitor 32\" 4K profissional, calibração de cor"
    },
    {
      id: 4,
      name: "HP E24 G5",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop",
      description: "Monitor 24\" Full HD IPS, ergonômico, baixo consumo"
    },
    {
      id: 5,
      name: "Samsung Odyssey G7",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070&auto=format&fit=crop",
      description: "Monitor gaming 27\" QHD, 144Hz, curvo"
    },
    {
      id: 6,
      name: "BenQ PD3220U DesignVue",
      image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop",
      description: "Monitor 32\" 4K para designers, Thunderbolt 3"
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleQuoteClick = (productName: string) => {
    setSelectedProduct(productName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedProduct('');
  };

  return (
    <div className="min-h-screen">
      <Header onQuoteClick={() => setIsQuoteModalOpen(true)} />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Monitores <span className="text-[#04657D]">Profissionais</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Displays de alta resolução para máxima produtividade
            </p>
          </div>

          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <Button 
                    onClick={() => handleQuoteClick(product.name)}
                    className="w-full bg-[#34ACC4] hover:bg-[#04657D] text-white transition-all duration-300"
                  >
                    Solicitar Cotação
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Nenhum produto encontrado para "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
      
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={handleCloseModal}
        selectedProduct={selectedProduct}
      />
    </div>
  );
};

export default MonitoresProfissionais;
