
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { X, Percent, Truck, ChefHat } from 'lucide-react';

interface NotificationsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Notification {
  id: string;
  type: 'coupon' | 'order' | 'preparation';
  title: string;
  message: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NotificationsDrawer = ({ isOpen, onClose }: NotificationsDrawerProps) => {
  // Mock notifications data - in a real app, this would come from a context or API
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'coupon',
      title: 'Alerta de cupom!',
      message: 'Use seu cupom PRIMEIRACOMPRA para ganhar 10% de desconto em sua compra.',
      time: '3s',
      icon: Percent
    },
    {
      id: '2',
      type: 'order',
      title: 'Seu pedido saiu para entrega',
      message: 'Já tá chegando! Seu pedido acabou de sair para entrega.',
      time: '10m',
      icon: Truck
    },
    {
      id: '3',
      type: 'preparation',
      title: 'Seu pedido está em preparação',
      message: 'Aguarde mais um pouco que já já sairá para entrega',
      time: '30m',
      icon: ChefHat
    }
  ];

  const getNotificationBgColor = (type: string) => {
    switch (type) {
      case 'coupon':
        return 'bg-pink-100';
      case 'order':
        return 'bg-green-100';
      case 'preparation':
        return 'bg-orange-100';
      default:
        return 'bg-gray-100';
    }
  };

  const getIconBgColor = (type: string) => {
    switch (type) {
      case 'coupon':
        return 'bg-pink-500';
      case 'order':
        return 'bg-green-500';
      case 'preparation':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md p-0 flex flex-col h-full">
        <SheetHeader className="p-4 pb-2 border-b">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-lg font-semibold">Notificações</SheetTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-4">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-32 text-gray-500">
              <p>Nenhuma notificação</p>
            </div>
          ) : (
            <div className="space-y-3">
              {notifications.map((notification) => {
                const IconComponent = notification.icon;
                return (
                  <div
                    key={notification.id}
                    className={`rounded-lg p-4 ${getNotificationBgColor(notification.type)} border border-gray-200`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-full ${getIconBgColor(notification.type)}`}>
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-sm font-semibold text-gray-900">
                            {notification.title}
                          </h3>
                          <span className="text-xs text-gray-500">
                            {notification.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700">
                          {notification.message}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="p-4 border-t bg-white">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              // Clear all notifications logic would go here
              onClose();
            }}
          >
            Marcar todas como lidas
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NotificationsDrawer;
