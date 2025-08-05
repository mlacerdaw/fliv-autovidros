import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import MobileServiceSection from '@/components/MobileServiceSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StoresSection from '@/components/home/StoresSection';
import FinalCTASection from '@/components/home/FinalCTASection';
import WhatsAppButton from '@/components/WhatsappButton';
import { Helmet } from 'react-helmet-async';

const HomePageContent = () => {
  return (
    <>
      <Helmet>
        <title>Fliv Serviços Automotivos | Seu carro em boas mãos</title>
        <meta name="description" content="Serviços automotivos de qualidade, agende seu atendimento ou orçamento pelo WhatsApp. Atendimento em diversas cidades." />
        <link rel="canonical" href="https://www.fliv.com.br/" />
        <meta property="og:title" content="Fliv Serviços Automotivos" />
        <meta property="og:description" content="Serviços automotivos de qualidade, agende seu atendimento ou orçamento pelo WhatsApp." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fliv.com.br/" />
        <meta property="og:image" content="/images/logo/ms-icon-144x144 (3).png" />
        <meta property="og:site_name" content="FLIV Serviços Automotivos" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fliv Serviços Automotivos" />
        <meta name="twitter:description" content="Serviços automotivos de qualidade, agende seu atendimento ou orçamento pelo WhatsApp." />
        <meta name="twitter:image" content="/images/logo/ms-icon-144x144 (3).png" />
        <meta name="twitter:site" content="@flivservicos" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FLIV Serviços Automotivos",
            "url": "https://www.fliv.com.br/",
            "logo": "https://www.fliv.com.br/images/logo/ms-icon-144x144 (3).png",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+55-16-3319-1865",
              "contactType": "customer service",
              "areaServed": "BR",
              "availableLanguage": ["Portuguese", "Spanish"]
            }],
            "sameAs": [
              "https://www.facebook.com/flivservicos",
              "https://www.instagram.com/flivservicos/"
            ]
          }
        `}</script>
      </Helmet>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MobileServiceSection 
        storePhoneNumber="+5519998626087" 
        message="Olá! Gostaria de um orçamento para o serviço móvel."
      />
      <TestimonialsSection />
      <StoresSection />
      <FinalCTASection />
    </>
  );
};

const HomePage = () => {
  return (
    <MainLayout
      fixedWhatsAppButton={
        <WhatsAppButton
          phoneNumber="+5519998626087" 
          message="Olá! Gostaria de solicitar um orçamento."
          text="Solicite seu orçamento no WhatsApp"
          fixed={true}
        />
      }
    >
      <HomePageContent />
    </MainLayout>
  );
};

export default HomePage;
  