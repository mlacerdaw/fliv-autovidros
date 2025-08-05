
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onQuoteClick: () => void;
}

const Header = ({ onQuoteClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteClick = () => {
    setIsMenuOpen(false);
    onQuoteClick();
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/lovable-uploads/cabf341a-f2f2-4a49-bcfd-d4e04f0414c1.png" 
              alt="Aluga Xpress" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation - Centralizado */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => handleMenuItemClick('home')}
                className="text-gray-700 hover:text-[#04657D] transition-colors font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => handleMenuItemClick('vantagens')}
                className="text-gray-700 hover:text-[#04657D] transition-colors font-medium"
              >
                Vantagens
              </button>
              <button 
                onClick={() => handleMenuItemClick('solucoes')}
                className="text-gray-700 hover:text-[#04657D] transition-colors font-medium"
              >
                Soluções
              </button>
              <button 
                onClick={() => handleMenuItemClick('contato')}
                className="text-gray-700 hover:text-[#04657D] transition-colors font-medium"
              >
                Contato
              </button>
            </div>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex flex-shrink-0">
            <Button 
              onClick={onQuoteClick}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#04657D] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="flex flex-col py-4">
              <button 
                onClick={() => handleMenuItemClick('home')}
                className="px-4 py-3 text-left text-gray-700 hover:text-[#04657D] hover:bg-gray-50 transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => handleMenuItemClick('vantagens')}
                className="px-4 py-3 text-left text-gray-700 hover:text-[#04657D] hover:bg-gray-50 transition-colors"
              >
                Vantagens
              </button>
              <button 
                onClick={() => handleMenuItemClick('solucoes')}
                className="px-4 py-3 text-left text-gray-700 hover:text-[#04657D] hover:bg-gray-50 transition-colors"
              >
                Soluções
              </button>
              <button 
                onClick={() => handleMenuItemClick('contato')}
                className="px-4 py-3 text-left text-gray-700 hover:text-[#04657D] hover:bg-gray-50 transition-colors"
              >
                Contato
              </button>
              <div className="px-4 py-3">
                <Button 
                  onClick={handleQuoteClick}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
