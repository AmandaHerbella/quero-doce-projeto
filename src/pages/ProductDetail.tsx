
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Star, MapPin, Clock, Minus, Plus } from 'lucide-react';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [observations, setObservations] = useState('');

  // Mock product data - in real app this would come from API/database
  const product = {
    id: id,
    name: 'Combo Cento de Doces',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=500&fit=crop',
    price: 200,
    rating: 5,
    category: 'Doces',
    description: 'Delicioso combo com 100 doces variados, perfeito para festas e eventos especiais. Inclui brigadeiros, beijinhos, cajuzinhos e muito mais!',
    store: {
      name: 'Doceria Premium',
      rating: 4.8,
      address: 'Rua das Flores, 123 - Centro',
      deliveryTime: '30-45 min'
    }
  };

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const addToCart = () => {
    const orderData = {
      product: product.name,
      quantity,
      observations,
      total: product.price * quantity
    };
    
    console.log('Adding to cart:', orderData);
    toast.success(`${quantity}x ${product.name} adicionado ao carrinho!`);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/products')}
          className="mb-6 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar aos produtos
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </Card>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Store Info */}
            <Card className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">{product.store.name}</h3>
                <div className="flex items-center space-x-1">
                  {renderStars(Math.floor(product.store.rating))}
                  <span className="text-sm text-gray-600 ml-1">({product.store.rating})</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <MapPin className="h-4 w-4 mr-1" />
                {product.store.address}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-1" />
                Entrega em {product.store.deliveryTime}
              </div>
            </Card>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                {renderStars(product.rating)}
                <span className="text-sm text-gray-600 ml-2">(125 avaliações)</span>
              </div>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-3xl font-bold text-pink-600 mb-6">
                R$ {(product.price * quantity).toFixed(2).replace('.', ',')}
              </p>
            </div>

            {/* Quantity Selector */}
            <Card className="p-4">
              <h3 className="font-semibold mb-3">Quantidade</h3>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange('decrease')}
                  disabled={quantity === 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange('increase')}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* Observations */}
            <Card className="p-4">
              <h3 className="font-semibold mb-3">Observações especiais</h3>
              <Textarea
                placeholder="Alguma observação especial para seu pedido? (Ex: sem açúcar, embalagem especial, etc.)"
                value={observations}
                onChange={(e) => setObservations(e.target.value)}
                className="min-h-20"
              />
            </Card>

            {/* Add to Cart Button */}
            <Button 
              onClick={addToCart}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Adicionar à sacola - R$ {(product.price * quantity).toFixed(2).replace('.', ',')}
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
