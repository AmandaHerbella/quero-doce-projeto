
import React from 'react';
import { Button } from '@/components/ui/button';

const PromotionBanner = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg opacity-90">Use o cupom</p>
                <h2 className="text-4xl md:text-5xl font-bold">PRIMEIRACOMPRA</h2>
                <p className="text-lg opacity-90">Para garantir 10% off na suas compras!</p>
              </div>
              
              <Button 
                size="lg"
                className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Comprar agora
              </Button>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                {/* Gift box illustration */}
                <div className="w-32 h-32 md:w-48 md:h-48 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <div className="text-6xl md:text-8xl">🎁</div>
                </div>
                
                {/* Percentage symbols */}
                <div className="absolute -top-4 -right-4 text-2xl animate-bounce">%</div>
                <div className="absolute -bottom-2 -left-2 text-xl animate-pulse">%</div>
                <div className="absolute top-1/2 -right-8 text-lg animate-bounce delay-300">%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;
