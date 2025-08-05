import React from 'react';
import Header from '@/components/Header';

const MainLayout = ({ children, fixedWhatsAppButton }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {fixedWhatsAppButton}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
  