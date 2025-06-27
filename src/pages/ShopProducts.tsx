
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const ShopProducts = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Combo Cento de Doces',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop',
      price: 200,
      rating: 5
    },
    {
      id: 2,
      name: 'Combo Cento de Doces',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop',
      price: 200,
      rating: 5
    },
    {
      id: 3,
      name: 'Combo Cento de Doces',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=300&h=300&fit=crop',
      price: 200,
      rating: 5
    },
    {
      id: 4,
      name: 'Combo Cento de Doces',
      image: 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=300&h=300&fit=crop',
      price: 200,
      rating: 5
    },
    {
      id: 5,
      name: 'Combo Cento de Doces',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop',
      price: 200,
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  const handleEdit = (productId: number) => {
    toast.success('Função de edição será implementada em breve!');
  };

  const handleDelete = (productId: number) => {
    toast.success('Produto removido com sucesso!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/shop/dashboard')}
          className="mb-6 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao painel
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Painel</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">🍰</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-700">Delícias da Joana</h2>
            </div>
            
            <div className="flex space-x-4">
              <Button 
                onClick={() => navigate('/shop/orders')}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold"
              >
                Ver pedidos
              </Button>
              <Button 
                onClick={() => toast.success('Função de adicionar produto será implementada em breve!')}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold"
              >
                Novo produto
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="bg-white border-0 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  {renderStars(product.rating)}
                </div>
                <p className="text-lg font-bold text-gray-800 mb-4">R$ {product.price},00</p>
                
                <div className="flex space-x-2">
                  <Button 
                    size="sm"
                    onClick={() => handleEdit(product.id)}
                    className="flex-1 bg-pink-500 hover:bg-pink-600 text-white rounded-full"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Editar
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(product.id)}
                    className="flex-1 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white rounded-full"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Excluir
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopProducts;
