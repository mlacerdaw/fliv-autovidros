
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const WhatsAppButton = ({ phoneNumber, message, text, className, fixed = false }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const containerClasses = cn(
    fixed ? 'fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50' : '',
    'inline-block' 
  );

  const buttonClasses = cn(
    'bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 font-semibold shadow-xl transition-all duration-300',
    fixed ? 'text-sm md:text-base px-3 py-2 md:px-4 md:py-3' : '',
    className 
  );

  return (
    <motion.div
      className={containerClasses}
      initial={{ opacity: fixed ? 0 : 1, y: fixed ? 20 : 0, scale: fixed ? 0.9 : 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: fixed ? 0.2 : 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        asChild
        size={fixed ? "default" : "lg"}
        className={buttonClasses}
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
          <MessageCircle className={cn("mr-2", fixed ? "h-4 w-4 md:h-5 md:w-5" : "h-5 w-5")} />
          <span className={fixed ? "hidden sm:inline" : ""}>{text}</span>
          {fixed && <span className="sm:hidden">WhatsApp</span>}
        </a>
      </Button>
    </motion.div>
  );
};

export default WhatsAppButton;
