import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import StorePage from '@/pages/StorePage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from '@/components/ui/toaster';
import { AnimatePresence, motion } from 'framer-motion';

const PageLayout = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};


function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<PageLayout><HomePage /></PageLayout>} />
          <Route path="/:storeId" element={<PageLayout><StorePage /></PageLayout>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
  