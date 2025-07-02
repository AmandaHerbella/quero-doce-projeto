
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ShopOrders = () => {
  const navigate = useNavigate();

  // Default orders data (no authentication required)
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
    <div className="min-h-screen bg-gradient-to-br from-pink-300 to-rose-300">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center">Pedidos da Loja</h1>

        {/* Orders in Delivery */}
        <Card className="mb-8 bg-white shadow-lg">
          <CardHeader className="bg-white">
            <CardTitle className="text-pink-600 text-xl">
              Pedidos em Rota de Entrega
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold text-gray-700">Código</TableHead>
                  <TableHead className="font-semibold text-gray-700">Entregador</TableHead>
                  <TableHead className="font-semibold text-gray-700">Pedido</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ordersInDelivery.map((order, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{order.codigo}</TableCell>
                    <TableCell>{order.entregador}</TableCell>
                    <TableCell>{order.pedido}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Orders in Progress */}
        <Card className="mb-8 bg-white shadow-lg">
          <CardHeader className="bg-white">
            <CardTitle className="text-pink-600 text-xl">
              Pedidos Em Andamento
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold text-gray-700">Código</TableHead>
                  <TableHead className="font-semibold text-gray-700">Pedido</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ordersInProgress.map((order, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{order.codigo}</TableCell>
                    <TableCell>{order.pedido}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Completed Orders */}
        <Card className="mb-8 bg-white shadow-lg">
          <CardHeader className="bg-white">
            <CardTitle className="text-pink-600 text-xl">
              Pedidos Concluídos
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold text-gray-700">Código</TableHead>
                  <TableHead className="font-semibold text-gray-700">Entregador</TableHead>
                  <TableHead className="font-semibold text-gray-700">Pedido</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {completedOrders.map((order, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{order.codigo}</TableCell>
                    <TableCell>{order.entregador}</TableCell>
                    <TableCell>{order.pedido}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ShopOrders;
