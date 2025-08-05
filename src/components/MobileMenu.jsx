
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="text-white hover:bg-fliv-blue-primary p-2"
      >
        <Menu size={24} />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed right-0 top-0 h-full w-64 bg-fliv-blue-secondary shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-fliv-blue-primary">
              <h3 className="text-white font-semibold">Menu</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-fliv-blue-primary p-2"
              >
                <X size={20} />
              </Button>
            </div>
            <nav className="p-4 space-y-4">
              <button
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left text-white hover:text-fliv-blue-primary transition-colors py-2 text-lg"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left text-white hover:text-fliv-blue-primary transition-colors py-2 text-lg"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('lojas')}
                className="block w-full text-left text-white hover:text-fliv-blue-primary transition-colors py-2 text-lg"
              >
                Nossas Lojas
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
