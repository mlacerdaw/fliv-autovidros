import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layouts/MainLayout';
import WhatsAppButton from '@/components/WhatsappButton';
import AboutSection from '@/components/AboutSection';
import MobileServiceSection from '@/components/MobileServiceSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StoreHeroSection from '@/components/store/StoreHeroSection';
import StoreDetailsSection from '@/components/store/StoreDetailsSection';
import StoreFinalCTASection from '@/components/store/StoreFinalCTASection';
import StoresSection from '@/components/home/StoresSection';
import { storeData } from '@/data/storeData';
import { Helmet } from 'react-helmet-async';

const StorePageContent = ({ store }) => {
  return (
    <>
      <Helmet>
        <title>{`Fliv ${store.name} | Serviços automotivos em ${store.city}`}</title>
        <meta name="description" content={`Serviços automotivos na unidade ${store.name} em ${store.city}. Agende seu atendimento ou orçamento pelo WhatsApp!`} />
        <link rel="canonical" href={`https://www.fliv.com.br/${store.city.toLowerCase()}`} />
        <meta property="og:title" content={`Fliv ${store.name} | Serviços automotivos em ${store.city}`} />
        <meta property="og:description" content={`Serviços automotivos na unidade ${store.name} em ${store.city}. Agende seu atendimento ou orçamento pelo WhatsApp!`} />
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content={`https://www.fliv.com.br/${store.city.toLowerCase()}`} />
        <meta property="og:image" content={store.imgSrc} />
        <meta property="og:site_name" content="FLIV Serviços Automotivos" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Fliv ${store.name} | Serviços automotivos em ${store.city}`} />
        <meta name="twitter:description" content={`Serviços automotivos na unidade ${store.name} em ${store.city}. Agende seu atendimento ou orçamento pelo WhatsApp!`} />
        <meta name="twitter:image" content={store.imgSrc} />
        <meta name="twitter:site" content="@flivservicos" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "${store.name}",
            "image": "https://www.fliv.com.br${store.imgSrc}",
            "@id": "https://www.fliv.com.br/${store.city.toLowerCase()}",
            "url": "https://www.fliv.com.br/${store.city.toLowerCase()}",
            "telephone": "${store.whatsappNumber}",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "${store.city}",
              "streetAddress": "${store.address}"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-21.7940000",
              "longitude": "-48.1810387"
            },
            "sameAs": [
              "https://www.facebook.com/flivservicos",
              "https://www.instagram.com/flivservicos/"
            ]
          }
        `}</script>
      </Helmet>
      <StoreHeroSection store={store} />
      <AboutSection showImageAndPoints={false} />
      <MobileServiceSection storePhoneNumber={store.whatsappNumber} storeName={store.name} storeImgSrc={store.imgSrc} />
      <TestimonialsSection storeCity={store.city} />
      <StoreDetailsSection store={store} />
      <StoreFinalCTASection storeName={store.name} storePhoneNumber={store.whatsappNumber} />
      <StoresSection />
    </>
  );
};

const StorePage = () => {
  const { storeId } = useParams();
  const store = storeData[storeId];

  if (!store) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-10 text-center">
          <h1 className="text-3xl font-bold text-red-600">Loja não encontrada</h1>
          <p className="mt-4">A página da loja que você está procurando não existe.</p>
          <Button asChild className="mt-6 bg-fliv-blue-primary hover:bg-fliv-blue-secondary">
            <Link to="/">Voltar para a página inicial</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout
      fixedWhatsAppButton={
        <WhatsAppButton
          phoneNumber={store.whatsappNumber}
          message={`Olá, gostaria de um orçamento para a unidade ${store.name}.`}
          text="Orçamento Agora"
          fixed={true}
          className="text-white"
        />
      }
    >
      <StorePageContent store={store} />
    </MainLayout>
  );
};

export default StorePage;
  