
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';

const ServidoresInfraestrutura = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const products = [
    {
      id: 1,
      name: "Dell PowerEdge R750",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      description: "Servidor rack 2U, Intel Xeon, 32GB RAM, redundância"
    },
    {
      id: 2,
      name: "HPE ProLiant DL380 Gen10",
      image: "https://images.unsplash.com/photo-1597149962419-0d90ac2e3db4?q=80&w=2070&auto=format&fit=crop",
      description: "Servidor 2U com processador Intel escalável"
    },
    {
      id: 3,
      name: "Lenovo ThinkSystem SR650",
      image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?q=80&w=2081&auto=format&fit=crop",
      description: "Servidor 2U dual-socket para cargas pesadas"
    },
    {
      id: 4,
      name: "Cisco UCS C220 M5",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=2068&auto=format&fit=crop",
      description: "Servidor rack 1U compacto e eficiente"
    },
    {
      id: 5,
      name: "Switch Cisco Catalyst 9300",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
      description: "Switch gerenciável 48 portas PoE+, stackable"
    },
    {
      id: 6,
      name: "Storage NetApp FAS2750",
      image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?q=80&w=2081&auto=format&fit=crop",
      description: "Sistema de armazenamento híbrido, alta disponibilidade"
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
              Servidores e <span className="text-blue-600">Infraestrutura</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções completas de infraestrutura de TI
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
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300"
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

export default ServidoresInfraestrutura;
