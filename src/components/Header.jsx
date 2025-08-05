import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Car } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
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
    <header className="bg-fliv-blue-secondary text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/logo/fliv-branco.png" alt="FLIV Logo" className="h-20 w-auto" />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('sobre')} className="hover:text-fliv-blue-primary transition-colors bg-transparent border-none cursor-pointer text-lg px-4 py-2">Sobre</button>
          <button onClick={() => scrollToSection('servicos')} className="hover:text-fliv-blue-primary transition-colors bg-transparent border-none cursor-pointer text-lg px-4 py-2">Serviços</button>
          <button onClick={() => scrollToSection('lojas')} className="hover:text-fliv-blue-primary transition-colors bg-transparent border-none cursor-pointer text-lg px-4 py-2">Nossas Lojas</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
  