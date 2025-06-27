
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'customer' | 'shop_owner';
  redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole, 
  redirectTo = '/auth' 
}) => {
  const { user, userRole, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Carregando...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  if (requiredRole && userRole !== requiredRole) {
    // If user is a shop owner trying to access customer area, redirect to shop dashboard
    if (userRole === 'shop_owner' && requiredRole === 'customer') {
      return <Navigate to="/shop/dashboard" replace />;
    }
    // If user is a customer trying to access shop area, redirect to home
    if (userRole === 'customer' && requiredRole === 'shop_owner') {
      return <Navigate to="/" replace />;
    }
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
