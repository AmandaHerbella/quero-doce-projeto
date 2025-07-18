
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
              
              {/* Previously protected pages - now public */}
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-tracking" element={<OrderTracking />} />
              <Route path="/shop/dashboard" element={<ShopDashboard />} />
              <Route path="/shop/orders" element={<ShopOrders />} />
              <Route path="/shop/products" element={<ShopProducts />} />
              <Route path="/shop/add-product" element={<AddProduct />} />
              
              {/* Legacy routes - redirect to new auth */}
              <Route path="/customer-login" element={<CustomerLogin />} />
              <Route path="/customer-register" element={<CustomerRegister />} />
              <Route path="/shop-register" element={<ShopRegister />} />
              
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
