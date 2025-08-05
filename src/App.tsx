
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useScrollToTop from "./hooks/useScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MonitoresProfissionais from "./pages/MonitoresProfissionais";
import ComputadoresNotebooks from "./pages/ComputadoresNotebooks";

const queryClient = new QueryClient();

const ScrollToTopWrapper = ({ children }: { children: React.ReactNode }) => {
  useScrollToTop();
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <Analytics />
    <BrowserRouter>
      <ScrollToTopWrapper>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/monitores-profissionais" element={<MonitoresProfissionais />} />
          <Route path="/computadores-notebooks" element={<ComputadoresNotebooks />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTopWrapper>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
