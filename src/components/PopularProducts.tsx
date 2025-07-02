import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useCart } from '@/contexts/CartContext';

const PopularProducts = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const products = [
    {
      id: '1',
      name: 'Combo Cento de Doces',
      image: '/lovable-uploads/54ec6531-f0c4-4f98-9fb9-078f128cf239.png',
      price: 200,
      rating: 5,
      category: 'Combo'
    },
    {
      id: '2',
      name: 'Torta de Chocolate Premium',
      image: '/lovable-uploads/f7d5e91a-f251-466c-8925-0c7eb2b43202.png',
      price: 120,
      rating: 5,
      category: 'Tortas'
    },
    {
      id: '3',
      name: 'Macarons Coloridos',
      image: '/lovable-uploads/d6d6a7b3-0c5e-459a-91cf-f006f2e24f72.png',
      price: 80,
      rating: 5,
      category: 'Doces'
    },
    {
      id: '4',
      name: 'Bolo Três Leites',
      image: '/lovable-uploads/1a583117-1ae4-401c-a3d4-29fb8f0a2d32.png',
      price: 90,
      rating: 5,
      category: 'Bolos'
    },
    {
      id: '5',
      name: 'Kit Presente Especial',
      image: '/lovable-uploads/54ec6531-f0c4-4f98-9fb9-078f128cf239.png',
      price: 150,
      rating: 5,
      category: 'Presentes'
    }
  ];

  const addToCart = (product: typeof products[0]) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      store: 'Delícias da Joana'
    };
    
    addItem(cartItem);
    console.log('Adding to cart:', cartItem);
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
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
              <div 
                className="relative overflow-hidden cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-4">
                <h3 
                  className="font-semibold text-gray-800 mb-2 line-clamp-2 cursor-pointer"
                  onClick={() => handleProductClick(product.id)}
                >
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  {renderStars(product.rating)}
                </div>
                <p className="text-xl font-bold text-pink-600 mb-3">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
                <Button 
                  onClick={() => addToCart(product)}
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
              <div 
                className="relative overflow-hidden cursor-pointer"
                onClick={() => handleProductClick(`${product.id}-2`)}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-4">
                <h3 
                  className="font-semibold text-gray-800 mb-2 line-clamp-2 cursor-pointer"
                  onClick={() => handleProductClick(`${product.id}-2`)}
                >
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  {renderStars(product.rating)}
                </div>
                <p className="text-xl font-bold text-pink-600 mb-3">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
                <Button 
                  onClick={() => addToCart({ ...product, id: `${product.id}-2` })}
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
