
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const ShopDashboard = () => {
  const navigate = useNavigate();

  // Default products data (no authentication required)
  const products = [
    {
      id: 1,
      name: 'Combo Cento de Doces',
      image: '/lovable-uploads/54ec6531-f0c4-4f98-9fb9-078f128cf239.png',
      price: 200,
      rating: 5
    },
    {
      id: 2,
      name: 'Torta de Chocolate Premium',
      image: '/lovable-uploads/f7d5e91a-f251-466c-8925-0c7eb2b43202.png',
      price: 200,
      rating: 5
    },
    {
      id: 3,
      name: 'Macarons Coloridos',
      image: '/lovable-uploads/d6d6a7b3-0c5e-459a-91cf-f006f2e24f72.png',
      price: 200,
      rating: 5
    },
    {
      id: 4,
      name: 'Bolo Três Leites',
      image: '/lovable-uploads/1a583117-1ae4-401c-a3d4-29fb8f0a2d32.png',
      price: 200,
      rating: 5
    },
    {
      id: 5,
      name: 'Combo Cento de Doces',
      image: '/lovable-uploads/54ec6531-f0c4-4f98-9fb9-078f128cf239.png',
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
    <div className="min-h-screen bg-gradient-to-br from-pink-300 to-rose-300">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-pink-600 mb-4">Painel</h1>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">🍰</span>
              </div>
              <h2 className="text-2xl font-semibold text-pink-600">Delícias da Joana</h2>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <Button 
              onClick={() => navigate('/shop/orders')}
              className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-full font-semibold"
            >
              Ver pedidos
            </Button>
            <Button 
              onClick={() => navigate('/shop/add-product')}
              className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-full font-semibold"
            >
              Novo produto
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="bg-white border-0 overflow-hidden shadow-lg">
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
                    className="flex-1 bg-pink-400 hover:bg-pink-500 text-white rounded-full"
                  >
                    Editar
                  </Button>
                  <Button 
                    size="sm"
                    onClick={() => handleDelete(product.id)}
                    className="flex-1 bg-pink-400 hover:bg-pink-500 text-white rounded-full"
                  >
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

export default ShopDashboard;
