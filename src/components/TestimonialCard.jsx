
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, testimonial, avatarText, city, avatarImage }) => {
  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full flex flex-col bg-gray-50/50 hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-xl">
        <CardHeader className="flex-row items-center space-x-3 md:space-x-4 pb-3 md:pb-4">
          <Avatar className="h-10 w-10 md:h-12 md:w-12 shrink-0">
            {avatarImage ? <AvatarImage src={avatarImage} alt={name} /> : null}
            <AvatarFallback className="bg-fliv-blue-primary text-white font-bold text-sm md:text-base">
              {avatarText || name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <CardTitle className="text-base md:text-lg font-semibold text-fliv-blue-secondary truncate">{name}</CardTitle>
            <p className="text-xs md:text-sm text-fliv-blue-primary">{city}</p>
          </div>
        </CardHeader>
        <CardContent className="flex-grow pt-0 px-4 md:px-6">
          <div className="relative">
            <Quote className="absolute -top-1 md:-top-2 -left-2 md:-left-3 text-fliv-blue-primary/20 h-6 w-6 md:h-8 md:w-8" />
            <p className="text-sm md:text-base text-gray-700 italic leading-relaxed z-10 relative pl-4 md:pl-6">
              {testimonial}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
