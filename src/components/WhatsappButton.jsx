
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const WhatsAppButton = ({ phoneNumber, message, text, className, fixed = false }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const containerClasses = cn(
    fixed ? 'fixed bottom-6 right-6 z-50' : '',
    'inline-block' 
  );

  const buttonClasses = cn(
    'bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 font-semibold shadow-xl',
    className 
  );

  return (
    <motion.div
      className={containerClasses}
      initial={{ opacity: fixed ? 0 : 1, y: fixed ? 20 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: fixed ? 0.2 : 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        asChild
        size="lg"
        className={buttonClasses}
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
          <MessageCircle className="mr-2 h-5 w-5" />
          {text}
        </a>
      </Button>
    </motion.div>
  );
};

export default WhatsAppButton;
  