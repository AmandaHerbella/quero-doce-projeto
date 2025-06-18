
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const PopularProducts = () => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const products = [
    {
      id: '1',
      name: 'Combo Cento de Doces',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop',
      price: 'R$ 200,00',
      rating: 5,
      category: 'Combo'
    },
    {
      id: '2',
      name: 'Torta de Chocolate Premium',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop',
      price: 'R$ 120,00',
      rating: 5,
      category: 'Tortas'
    },
    {
      id: '3',
      name: 'Macarons Coloridos',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=300&h=300&fit=crop',
      price: 'R$ 80,00',
      rating: 5,
      category: 'Doces'
    },
    {
      id: '4',
      name: 'Bolo Três Leites',
      image: 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=300&h=300&fit=crop',
      price: 'R$ 90,00',
      rating: 5,
      category: 'Bolos'
    },
    {
      id: '5',
      name: 'Kit Presente Especial',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop',
      price: 'R$ 150,00',
      rating: 5,
      category: 'Presentes'
    }
  ];

  const addToCart = (productId: string, productName: string) => {
    setCartItems(prev => [...prev, productId]);
    toast.success(`${productName} adicionado ao carrinho!`);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Os mais populares
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  {renderStars(product.rating)}
                </div>
                <p className="text-xl font-bold text-pink-600 mb-3">{product.price}</p>
                <Button 
                  onClick={() => addToCart(product.id, product.name)}
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Adicionar à sacola
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <Card key={`${product.id}-2`} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  {renderStars(product.rating)}
                </div>
                <p className="text-xl font-bold text-pink-600 mb-3">{product.price}</p>
                <Button 
                  onClick={() => addToCart(`${product.id}-2`, product.name)}
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Adicionar à sacola
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
