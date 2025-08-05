
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
        <CardHeader className="flex-row items-center space-x-4 pb-4">
          <Avatar className="h-12 w-12">
            {avatarImage ? <AvatarImage src={avatarImage} alt={name} /> : null}
            <AvatarFallback className="bg-fliv-blue-primary text-white font-bold">
              {avatarText || name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg font-semibold text-fliv-blue-secondary">{name}</CardTitle>
            <p className="text-sm text-fliv-blue-primary">{city}</p>
          </div>
        </CardHeader>
        <CardContent className="flex-grow pt-0">
          <div className="relative">
            <Quote className="absolute -top-2 -left-3 text-fliv-blue-primary/20 h-8 w-8" />
            <p className="text-gray-700 italic leading-relaxed z-10 relative">
              {testimonial}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
  