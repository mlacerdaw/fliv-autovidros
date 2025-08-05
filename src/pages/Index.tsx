
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Solutions from '@/components/Solutions';
import Comparison from '@/components/Comparison';
import Testimonials from '@/components/Testimonials';
import QuoteModal from '@/components/QuoteModal';
import Footer from '@/components/Footer';

const Index = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  const handleQuoteClick = (productName?: string) => {
    if (productName) {
      setSelectedProduct(productName);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedProduct('');
  };

  return (
    <div className="min-h-screen">
      <Header onQuoteClick={() => handleQuoteClick()} />
      
      {/* Adicionar padding-top para compensar o header fixo */}
      <div className="pt-16">
        <Hero onQuoteClick={() => handleQuoteClick()} />
        <Benefits />
        <Solutions onQuoteClick={handleQuoteClick} />
        <Comparison onQuoteClick={() => handleQuoteClick()} />
        <Testimonials />
        <Footer />
      </div>
      
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={handleCloseModal}
        selectedProduct={selectedProduct}
      />
    </div>
  );
};

export default Index;
