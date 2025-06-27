
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";
import Auth from "./pages/Auth";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerRegister from "./pages/CustomerRegister";
import ShopRegister from "./pages/ShopRegister";
import ShopDashboard from "./pages/ShopDashboard";
import ShopOrders from "./pages/ShopOrders";
import ShopProducts from "./pages/ShopProducts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/auth" element={<Auth />} />
              
              {/* Protected customer routes */}
              <Route path="/checkout" element={
                <ProtectedRoute requiredRole="customer">
                  <Checkout />
                </ProtectedRoute>
              } />
              <Route path="/order-tracking" element={
                <ProtectedRoute requiredRole="customer">
                  <OrderTracking />
                </ProtectedRoute>
              } />
              
              {/* Legacy routes - redirect to new auth */}
              <Route path="/login" element={<CustomerLogin />} />
              <Route path="/register" element={<CustomerRegister />} />
              <Route path="/shop-register" element={<ShopRegister />} />
              
              {/* Protected shop routes */}
              <Route path="/shop/dashboard" element={
                <ProtectedRoute requiredRole="shop_owner">
                  <ShopDashboard />
                </ProtectedRoute>
              } />
              <Route path="/shop/orders" element={
                <ProtectedRoute requiredRole="shop_owner">
                  <ShopOrders />
                </ProtectedRoute>
              } />
              <Route path="/shop/products" element={
                <ProtectedRoute requiredRole="shop_owner">
                  <ShopProducts />
                </ProtectedRoute>
              } />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
