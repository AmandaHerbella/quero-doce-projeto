
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import CartDrawer from './CartDrawer';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const { getItemCount } = useCart();
  const cartItems = getItemCount();

  return (
    <>
      <header className="bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 
                className="text-2xl font-bold cursor-pointer"
                onClick={() => navigate('/')}
              >
                QueroDoce
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => navigate('/products')}
                className="hover:text-pink-200 transition-colors duration-200"
              >
                Bolos
              </button>
              <button 
                onClick={() => navigate('/products')}
                className="hover:text-pink-200 transition-colors duration-200"
              >
                Tortas
              </button>
              <button 
                onClick={() => navigate('/products')}
                className="hover:text-pink-200 transition-colors duration-200"
              >
                Sorvetes
              </button>
              <button 
                onClick={() => navigate('/products')}
                className="hover:text-pink-200 transition-colors duration-200"
              >
                Fitness
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline text-sm">Sobre nós</span>
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/register')}
                className="hover:bg-pink-500/20 text-sm"
              >
                Cadastre-se
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/login')}
                className="hover:bg-pink-500/20"
              >
                <User className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="relative hover:bg-pink-500/20"
                onClick={() => setIsCartOpen(true)}
              >
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

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
