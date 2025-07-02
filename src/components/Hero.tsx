
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Hero = () => {
  const navigate = useNavigate();
  const { user, userRole } = useAuth();

  const handleBuyClick = () => {
    if (user && userRole === 'customer') {
      navigate('/products');
    } else {
      navigate('/register-client');
    }
  };

  const handleSellClick = () => {
    if (user && userRole === 'shop_owner') {
      navigate('/shop/dashboard');
    } else {
      navigate('/register-enterprise');
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-pink-400 to-rose-400 text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Sua próxima delícia está a um clique de distância
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={handleBuyClick}
              >
                Quero comprar
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                onClick={handleSellClick}
              >
                Quero vender
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/lovable-uploads/f5086a9f-6b97-4484-af5c-46f3a56ae666.png" 
                alt="Delicious cakes and sweets" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
