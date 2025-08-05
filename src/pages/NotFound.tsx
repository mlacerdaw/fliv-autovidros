
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center px-4 max-w-2xl mx-auto">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format&fit=crop"
            alt="Computador"
            className="w-64 h-48 object-cover mx-auto rounded-2xl shadow-lg"
          />
        </div>
        
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Página não encontrada
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Oops! A página que você está procurando não existe.
          </p>
          <p className="text-gray-500">
            Ela pode ter sido movida, removida ou você digitou o endereço incorretamente.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          
          <Button 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <Home className="w-4 h-4" />
            Ir para Home
          </Button>
        </div>

        <div className="mt-12 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Precisa de ajuda?
          </h3>
          <p className="text-gray-600">
            Entre em contato conosco ou explore nossas soluções de aluguel de equipamentos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
