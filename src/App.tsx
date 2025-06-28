
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
import ShopProfile from "./pages/ShopProfile";
import Favorites from "./pages/Favorites";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";
import LoginPage from "./pages/LoginPage";
import RegisterClient from "./pages/RegisterClient";
import RegisterEnterprise from "./pages/RegisterEnterprise";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerRegister from "./pages/CustomerRegister";
import ShopRegister from "./pages/ShopRegister";
import ShopDashboard from "./pages/ShopDashboard";
import ShopOrders from "./pages/ShopOrders";
import ShopProducts from "./pages/ShopProducts";
import AddProduct from "./pages/AddProduct";
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
              <Route path="/shop/:shopId" element={<ShopProfile />} />
              
              {/* Auth pages */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register-client" element={<RegisterClient />} />
              <Route path="/register-enterprise" element={<RegisterEnterprise />} />
              
              {/* Protected customer routes */}
              <Route path="/favorites" element={
                <ProtectedRoute requiredRole="customer">
                  <Favorites />
                </ProtectedRoute>
              } />
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
              <Route path="/customer-login" element={<CustomerLogin />} />
              <Route path="/customer-register" element={<CustomerRegister />} />
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
              <Route path="/shop/add-product" element={
                <ProtectedRoute requiredRole="shop_owner">
                  <AddProduct />
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
