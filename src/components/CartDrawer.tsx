
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { X, Trash } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const navigate = useNavigate();
  const { items, removeItem, getTotal } = useCart();
  const total = getTotal();

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md p-0 flex flex-col h-full">
        <SheetHeader className="p-4 pb-2">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-lg font-semibold">Seu pedido em</SheetTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-left">
            <h2 className="text-xl font-bold">Delícias da Joana</h2>
            <Button variant="link" className="p-0 h-auto text-pink-500 text-sm">
              Ver cardápio
            </Button>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-32 text-gray-500">
              <p>Seu carrinho está vazio</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.quantity}x {item.name}</p>
                    <p className="text-pink-600 font-semibold">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t bg-white">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-lg">R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
              
              <Button 
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold"
                onClick={handleCheckout}
              >
                Realizar pedido
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
