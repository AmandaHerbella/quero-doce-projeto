
import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <header className="bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">QueroDoce</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-pink-200 transition-colors duration-200">Bolos</a>
            <a href="#" className="hover:text-pink-200 transition-colors duration-200">Tortas</a>
            <a href="#" className="hover:text-pink-200 transition-colors duration-200">Sorvetes</a>
            <a href="#" className="hover:text-pink-200 transition-colors duration-200">Fitness</a>
          </nav>

          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline text-sm">Sobre nós</span>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
