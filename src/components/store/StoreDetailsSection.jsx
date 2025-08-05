import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowLeft, ShieldCheck, Wrench, Settings, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function CarIconStore(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <path d="M7 17h10" />
      <path d="M5 17v-2h14v2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}

const servicesList = [
  { name: 'Troca de para-brisa', icon: <ShieldCheck size={24} className="text-fliv-blue-primary mr-3" /> },
  { name: 'Reparo de trincas', icon: <Wrench size={24} className="text-fliv-blue-primary mr-3" /> },
  { name: 'Vidros laterais', icon: <CarIconStore className="text-fliv-blue-primary mr-3" /> },
  { name: 'Vidro traseiro', icon: <CarIconStore className="text-fliv-blue-primary mr-3" /> },
  { name: 'Regulagem de vidros elétricos', icon: <Settings size={24} className="text-fliv-blue-primary mr-3" /> },
  { name: 'Outros sob consulta', icon: <CheckCircle size={24} className="text-fliv-blue-primary mr-3" /> },
];

const StoreDetailsSection = ({ store }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white">
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button variant="outline" asChild className="border-fliv-blue-primary text-fliv-blue-primary hover:bg-fliv-blue-primary hover:text-white">
          <Link to="/#lojas">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para todas as lojas
          </Link>
        </Button>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <motion.div
          className="md:col-span-2 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-fliv-blue-secondary mb-4">Sobre a Unidade {store.city}</h2>
            <p className="text-gray-700 leading-relaxed">{store.description}</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-fliv-blue-secondary mb-6">Serviços Oferecidos em {store.city}</h2>
            <ul className="space-y-3">
              {servicesList.map(service => (
                <li key={service.name} className="flex items-center text-lg text-gray-700 p-3 bg-gray-50 rounded-md shadow-sm hover:shadow-md transition-shadow">
                  {service.icon}
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-1 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-fliv-blue-secondary mb-4">Localização</h2>
            {store.imgSrc && (
              <img src={store.imgSrc} alt={`Fachada da loja ${store.name}`} className="mb-4 rounded-lg shadow-lg w-full object-cover max-h-64" />
            )}
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src={store.mapEmbedUrl}
                width="100%"
                height="300"
                style={{ border:0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa de ${store.name}`}
              ></iframe>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-fliv-blue-primary hover:text-fliv-blue-secondary font-semibold"
            >
              <MapPin className="mr-2 h-5 w-5" /> {store.address} (Abrir no Google Maps)
            </a>
            {store.hours && (
              <div className="mt-3 text-gray-700 text-base bg-gray-50 rounded-md p-3 border border-gray-200">
                <strong>Horário de funcionamento:</strong><br />
                {store.hours}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StoreDetailsSection;
  