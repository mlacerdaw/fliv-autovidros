
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-fliv-blue-secondary text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} FLIV Vidros Automotivos. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Desenvolvido com ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
  