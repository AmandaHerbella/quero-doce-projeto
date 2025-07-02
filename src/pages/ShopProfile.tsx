import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Search, Heart } from 'lucide-react';
import { toast } from 'sonner';

const ShopProfile = () => {
  const { shopId } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Por mais vendidos');
  const [isFavorited, setIsFavorited] = useState(false);

  // Mock shop data - in real app this would come from API based on shopId
  const shop = {
    id: shopId,
    name: 'Delícias da Joana',
    logo: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=80&h=80&fit=crop&crop=face',
    address: 'Casa da Mãe Joana 123, Honrado Maneiro',
    rating: 5,
    reviewCount: 1294
  };

  const products = [
    {
      id: '1',
      name: 'Combo Cento de Doces',
      image: '/lovable-uploads/54ec6531-f0c4-4f98-9fb9-078f128cf239.png',
      price: 200,
      rating: 5
    },
    {
      id: '2',
      name: 'Torta de Chocolate Premium',
      image: '/lovable-uploads/f7d5e91a-f251-466c-8925-0c7eb2b43202.png',
      price: 200,
      rating: 5
    },
    {
      id: '3',
      name: 'Macarons Coloridos',
      image: '/lovable-uploads/d6d6a7b3-0c5e-459a-91cf-f006f2e24f72.png',
      price: 200,
      rating: 5
    },
    {
      id: '4',
      name: 'Bolo Três Leites',
      image: '/lovable-uploads/1a583117-1ae4-401c-a3d4-29fb8f0a2d32.png',
      price: 200,
      rating: 5
    },
    {
      id: '5',
      name: 'Combo Cento de Doces',
      image: '/lovable-uploads/54ec6531-f0c4-4f98-9fb9-078f128cf239.png',
      price: 200,
      rating: 5
    },
    {
      id: '6',
      name: 'Torta de Chocolate Premium',
      image: '/lovable-uploads/f7d5e91a-f251-466c-8925-0c7eb2b43202.png',
      price: 200,
      rating: 5
    },
    {
      id: '7',
      name: 'Macarons Coloridos',
      image: '/lovable-uploads/d6d6a7b3-0c5e-459a-91cf-f006f2e24f72.png',
      price: 200,
      rating: 5
    },
    {
      id: '8',
      name: 'Bolo Três Leites',
      image: '/lovable-uploads/1a583117-1ae4-401c-a3d4-29fb8f0a2d32.png',
      price: 200,
      rating: 5
    },
    {
      id: '9',
      name: 'Combo Cento de Doces',
      image: '/lovable-uploads/54ec6531-f0c4-4f98-9fb9-078f128cf239.png',
      price: 200,
      rating: 5
    },
    {
      id: '10',
      name: 'Torta de Chocolate Premium',
      image: '/lovable-uploads/f7d5e91a-f251-466c-8925-0c7eb2b43202.png',
      price: 200,
      rating: 5
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    toast.success(isFavorited ? 'Loja removida dos favoritos!' : 'Loja adicionada aos favoritos!');
  };

  const addToCart = (productId: string, productName: string) => {
    toast.success(`${productName} adicionado ao carrinho!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 to-rose-300">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/products')}
          className="mb-6 text-white hover:text-gray-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>

        {/* Shop Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-white">
              <img 
                src={shop.logo} 
                alt={shop.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">{shop.name}</h1>
              <p className="text-white/80 mb-2">{shop.address}</p>
              <div className="flex items-center space-x-2">
                {renderStars(shop.rating)}
                <span className="text-white font-medium">{shop.reviewCount.toLocaleString()} avaliações</span>
              </div>
            </div>
          </div>
          
          <Button
            onClick={handleFavorite}
            variant="ghost"
            size="lg"
            className="text-white hover:bg-white/20 p-3"
          >
            <Heart className={`h-8 w-8 ${isFavorited ? 'fill-current text-red-500' : ''}`} />
          </Button>
        </div>

        {/* Search and Sort */}
        <div className="bg-white rounded-lg p-4 mb-6 flex items-center justify-between">
          <div className="relative flex-1 mr-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Pesquisar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-gray-300"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option>Por mais vendidos</option>
            <option>Menor preço</option>
            <option>Maior preço</option>
            <option>Mais avaliados</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 overflow-hidden cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  {renderStars(product.rating)}
                </div>
                <p className="text-lg font-bold text-gray-800 mb-4">R$ {product.price},00</p>
                
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product.id, product.name);
                  }}
                  className="w-full bg-pink-400 hover:bg-pink-500 text-white rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Adicionar à sacola
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopProfile;
