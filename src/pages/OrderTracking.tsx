
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ShoppingBag, CreditCard, Truck, Package, Star } from 'lucide-react';

const OrderTracking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Default order data (no authentication required)
  const orderData = {
    orderCode: '#1234DFE',
    items: [
      { id: '1', name: 'Doce de frutas vermelhas', price: 50.00, quantity: 1, total: 66.00 },
      { id: '2', name: 'Combo Cento de Doces', price: 400.00, quantity: 2, total: 416.00 },
      { id: '3', name: 'Doce de frutas vermelhas', price: 50.00, quantity: 1, total: 66.00 }
    ]
  };

  const steps = [
    { icon: ShoppingBag, title: 'Pedido\nRealizado', completed: true },
    { icon: CreditCard, title: 'Pagamento\nConfirmado', completed: true },
    { icon: Truck, title: 'Pedido a\nCaminho', completed: true },
    { icon: Package, title: 'Aguarde...', completed: false }
  ];

  const currentStep = steps.findIndex(step => !step.completed);
  const progressValue = ((currentStep === -1 ? steps.length : currentStep) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Order Status Header */}
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-pink-600">Pedido em Andamento</h1>
                <p className="text-gray-600">Código do Pedido: <span className="font-semibold">{orderData.orderCode}</span></p>
              </div>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isCompleted = step.completed;
                const isCurrent = index === currentStep;
                
                return (
                  <div key={index} className="flex flex-col items-center relative z-10">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
                      isCompleted ? 'bg-pink-500 text-white' : 
                      isCurrent ? 'bg-pink-200 text-pink-600' : 'bg-gray-200 text-gray-400'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className={`text-sm text-center whitespace-pre-line font-medium ${
                      isCompleted ? 'text-pink-600' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </p>
                  </div>
                );
              })}
            </div>
            
            {/* Progress Line */}
            <div className="absolute top-8 left-8 right-8 h-1 bg-gray-200 -z-10">
              <div 
                className="h-full bg-pink-500 transition-all duration-500"
                style={{ width: `${progressValue}%` }}
              />
            </div>
          </div>
        </Card>

        {/* Order Items */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-pink-600 mb-6">Seus Pedidos</h2>
          
          <div className="space-y-4">
            {orderData.items.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        DJ
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="font-medium text-lg">{item.quantity}x {item.name}</p>
                      <p className="text-pink-600 font-bold text-lg">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                      <p className="text-gray-600">Total: R$ {item.total.toFixed(2).replace('.', ',')}</p>
                      
                      <div className="flex items-center mt-2">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full"
                  >
                    Adicionar à sacola
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation Button */}
        <div className="text-center">
          <Button 
            onClick={() => navigate('/products')}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold"
          >
            Continuar Comprando
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderTracking;
