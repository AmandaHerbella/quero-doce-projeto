
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Clock, CheckCircle, Package } from 'lucide-react';

const ShopOrders = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('entrega');

  const ordersInDelivery = [
    { codigo: '#1234DFE', entregador: 'José da Silva', pedido: '1x Doce de Frutas Vermelhas' },
    { codigo: '#1234DFE', entregador: 'José da Silva', pedido: '1x Cento de Frutas Vermelhas' },
    { codigo: '#1234DFE', entregador: 'José da Silva', pedido: '1x Doce de Frutas Vermelhas' },
    { codigo: '#1234DFE', entregador: 'José da Silva', pedido: '1x Doce de Frutas Vermelhas' },
  ];

  const ordersInProgress = [
    { codigo: '#1234DFE', pedido: '1x Cento de Doces Sortidos' },
    { codigo: '#1284DFE', pedido: '1x Cento de Brigadeiro' },
  ];

  const completedOrders = [
    { codigo: '#1234DFE', entregador: 'José da Silva', pedido: '1x Doce de Frutas Vermelhas' },
    { codigo: '#1234DFE', entregador: 'José da Silva', pedido: '1x Doce de Frutas Vermelhas' },
    { codigo: '#1234DFE', entregador: 'José da Silva', pedido: '1x Doce de Frutas Vermelhas' },
  ];

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

        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Pedidos da Loja</h1>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-white rounded-full p-1">
            <button
              onClick={() => setSelectedTab('entrega')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedTab === 'entrega' 
                  ? 'bg-pink-500 text-white' 
                  : 'text-gray-600 hover:text-pink-500'
              }`}
            >
              Em Rota de Entrega
            </button>
            <button
              onClick={() => setSelectedTab('andamento')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedTab === 'andamento' 
                  ? 'bg-pink-500 text-white' 
                  : 'text-gray-600 hover:text-pink-500'
              }`}
            >
              Em Andamento
            </button>
            <button
              onClick={() => setSelectedTab('concluidos')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedTab === 'concluidos' 
                  ? 'bg-pink-500 text-white' 
                  : 'text-gray-600 hover:text-pink-500'
              }`}
            >
              Concluídos
            </button>
          </div>
        </div>

        {/* Orders in Delivery */}
        {selectedTab === 'entrega' && (
          <Card className="mb-8">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-pink-600 flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Pedidos em Rota de Entrega
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Código</TableHead>
                    <TableHead>Entregador</TableHead>
                    <TableHead>Pedido</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ordersInDelivery.map((order, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{order.codigo}</TableCell>
                      <TableCell>{order.entregador}</TableCell>
                      <TableCell>{order.pedido}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Orders in Progress */}
        {selectedTab === 'andamento' && (
          <Card className="mb-8">
            <CardHeader className="bg-yellow-50">
              <CardTitle className="text-pink-600 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Pedidos Em Andamento
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Código</TableHead>
                    <TableHead>Pedido</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ordersInProgress.map((order, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{order.codigo}</TableCell>
                      <TableCell>{order.pedido}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Completed Orders */}
        {selectedTab === 'concluidos' && (
          <Card className="mb-8">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-pink-600 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Pedidos Concluídos
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Código</TableHead>
                    <TableHead>Entregador</TableHead>
                    <TableHead>Pedido</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {completedOrders.map((order, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{order.codigo}</TableCell>
                      <TableCell>{order.entregador}</TableCell>
                      <TableCell>{order.pedido}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ShopOrders;
