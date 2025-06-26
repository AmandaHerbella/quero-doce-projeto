
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Star, Trash, Minus, Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, getTotal, clearCart } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');
  const [cep, setCep] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('pix');

  const deliveryFee = 15.00;
  const convenienceFee = 1.00;
  const subtotal = getTotal();
  const total = subtotal + deliveryFee + convenienceFee;

  const handleFinishOrder = () => {
    if (!customerName || !cpf || !address || !cep) {
      toast.error('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    console.log('Finalizing order:', {
      items,
      customer: { name: customerName, cpf, address, cep },
      paymentMethod,
      total
    });
    
    toast.success('Pedido realizado com sucesso!');
    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Carrinho vazio</h1>
          <p className="text-gray-600 mb-6">Adicione alguns produtos ao seu carrinho para continuar</p>
          <Button onClick={() => navigate('/products')}>
            Continuar comprando
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Continuar Comprando
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Order Details */}
          <div className="space-y-6">
            {/* Store Info */}
            <Card className="p-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold">
                  DJ
                </div>
                <div>
                  <h2 className="font-bold text-lg">Delícias da Joana</h2>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">1.294 avaliações</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Items */}
            <Card className="p-4">
              <h3 className="font-bold text-lg mb-4">Itens adicionados</h3>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium">{item.quantity}x {item.name}</p>
                      <p className="text-pink-600 font-semibold">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 h-8 w-8"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                      <div className="flex items-center space-x-1">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Customer Information */}
            <Card className="p-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">Nome Completo *</Label>
                  <Input
                    id="name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Digite seu nome completo"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="cpf" className="text-sm font-medium">CPF *</Label>
                  <Input
                    id="cpf"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="123.456.789-01"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-sm font-medium">Endereço *</Label>
                  <Input
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Rua Manoel da Silva n 25"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="cep" className="text-sm font-medium">Calcular Taxa de Entrega *</Label>
                  <Input
                    id="cep"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder="12345-011"
                    className="mt-1"
                  />
                </div>
              </div>
            </Card>

            {/* Payment Method */}
            <Card className="p-4">
              <h3 className="font-medium mb-4">Forma de pagamento *</h3>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="pix" id="pix" />
                  <Label htmlFor="pix" className="flex-1 cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <div className="text-sm font-medium text-teal-600">PIX</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex-1 cursor-pointer">
                    <div className="text-sm font-medium">Cartão de Débito/Crédito</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="flex-1 cursor-pointer">
                    <div className="text-sm font-medium">Dinheiro</div>
                  </Label>
                </div>
              </RadioGroup>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            <Card className="p-6 bg-pink-100">
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.quantity}x {item.name}</span>
                    <span>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                  </div>
                ))}
                
                <div className="flex justify-between text-sm">
                  <span>Taxa de Entrega</span>
                  <span>R$ {deliveryFee.toFixed(2).replace('.', ',')}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Taxa de Conveniência</span>
                  <span>R$ {convenienceFee.toFixed(2).replace('.', ',')}</span>
                </div>
                
                <hr className="border-pink-300" />
                
                <div className="flex justify-between font-bold text-lg">
                  <span>TOTAL:</span>
                  <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>
            </Card>

            <Button 
              onClick={handleFinishOrder}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 text-lg font-semibold rounded-full"
            >
              Finalizar Compra
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
