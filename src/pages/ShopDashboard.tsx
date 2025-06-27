
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ShoppingBag, Plus, Eye } from 'lucide-react';

const ShopDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Painel</h1>
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">🍰</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-700">Delícias da Joana</h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              onClick={() => navigate('/shop/orders')}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              <Eye className="h-5 w-5 mr-2" />
              Ver pedidos
            </Button>
            <Button 
              onClick={() => navigate('/shop/products')}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              <Plus className="h-5 w-5 mr-2" />
              Novo produto
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Pedidos Hoje</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-pink-600">12</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Produtos Ativos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-pink-600">8</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Faturamento Hoje</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-pink-600">R$ 1.250</div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <ShoppingBag className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium">Novo pedido recebido</p>
                  <p className="text-sm text-gray-600">Combo Cento de Doces - R$ 200,00</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <Package className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Produto atualizado</p>
                  <p className="text-sm text-gray-600">Macarons Coloridos - Preço alterado</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ShopDashboard;
