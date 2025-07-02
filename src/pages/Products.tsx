
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Search, Filter } from 'lucide-react';
import { toast } from 'sonner';

const Products = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [sortBy, setSortBy] = useState('Mais vendidos');

  const categories = ['Todos', 'Bolos', 'Tortas', 'Sorvetes', 'Fitness', 'Doces'];

  const products = [
    {
      id: '1',
      name: 'Combo Cento de Doces',
      image: '/lovable-uploads/54ec6531-f0c4-4f98-9fb9-078f128cf239.png',
      price: 200,
      rating: 5,
      category: 'Doces',
      store: 'Doceria Premium',
      storeId: '1'
    },
    {
      id: '2',
      name: 'Torta de Chocolate Premium',
      image: '/lovable-uploads/f7d5e91a-f251-466c-8925-0c7eb2b43202.png',
      price: 120,
      rating: 5,
      category: 'Tortas',
      store: 'Confeitaria Artesanal',
      storeId: '2'
    },
    {
      id: '3',
      name: 'Macarons Coloridos',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=300&h=300&fit=crop',
      price: 80,
      rating: 5,
      category: 'Doces',
      store: 'Patisserie Francesa',
      storeId: '3'
    },
    {
      id: '4',
      name: 'Bolo Três Leites',
      image: 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=300&h=300&fit=crop',
      price: 90,
      rating: 5,
      category: 'Bolos',
      store: 'Confeitaria da Vovó',
      storeId: '4'
    },
    {
      id: '5',
      name: 'Sorvete Artesanal Chocolate',
      image: '/lovable-uploads/54ec6531-f0c4-4f98-9fb9-078f128cf239.png',
      price: 45,
      rating: 4,
      category: 'Sorvetes',
      store: 'Gelateria Italiana',
      storeId: '5'
    },
    {
      id: '6',
      name: 'Bolo Fitness Proteico',
      image: 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=300&h=300&fit=crop',
      price: 75,
      rating: 4,
      category: 'Fitness',
      store: 'Healthy Cakes',
      storeId: '6'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const addToCart = (productId: string, productName: string) => {
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full bg-white rounded-full border-2 border-pink-200 focus:border-pink-400"
            />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 space-y-6">
            {/* Categories */}
            <Card className="p-4">
              <h3 className="font-semibold text-gray-800 mb-4">Categorias</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-pink-500 text-white'
                        : 'hover:bg-pink-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Card>

            {/* Price Filter */}
            <Card className="p-4">
              <h3 className="font-semibold text-gray-800 mb-4">Faixa de Preço</h3>
              <div className="space-y-4">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={300}
                  min={0}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>R$ {priceRange[0]}</span>
                  <span>R$ {priceRange[1]}</span>
                </div>
              </div>
            </Card>

            {/* Sort */}
            <Card className="p-4">
              <h3 className="font-semibold text-gray-800 mb-4">Ordenar por</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option>Mais vendidos</option>
                <option>Menor preço</option>
                <option>Maior preço</option>
                <option>Mais avaliados</option>
              </select>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {filteredProducts.length} produtos encontrados
              </h2>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <p 
                      className="text-sm text-pink-600 mb-2 cursor-pointer hover:text-pink-800 font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/shop/${product.storeId}`);
                      }}
                    >
                      {product.store}
                    </p>
                    <div className="flex items-center mb-2">
                      {renderStars(product.rating)}
                    </div>
                    <p className="text-xl font-bold text-pink-600 mb-3">R$ {product.price},00</p>
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product.id, product.name);
                      }}
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      Adicionar à sacola
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
