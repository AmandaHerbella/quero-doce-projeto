
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

const RegisterClient = () => {
  const navigate = useNavigate();
  const { signUp, user, userRole } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      if (userRole === 'shop_owner') {
        navigate('/shop/dashboard');
      } else {
        navigate('/');
      }
    }
  }, [user, userRole, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('As senhas não coincidem');
      return;
    }

    setLoading(true);

    const { error } = await signUp(
      formData.email, 
      formData.password, 
      formData.fullName,
      'customer'
    );
    
    if (error) {
      toast.error('Erro ao criar conta: ' + error.message);
    } else {
      toast.success('Conta criada com sucesso! Verifique seu email.');
    }

    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 to-rose-300">
      <Header />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-140px)] px-4 py-8">
        <div className="bg-pink-100 rounded-3xl p-8 max-w-6xl w-full flex items-center justify-between">
          {/* Left Side - Illustration */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="w-96 h-96 bg-yellow-100 rounded-full flex items-center justify-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-yellow-200 rounded-full opacity-50"></div>
              <div className="absolute top-16 right-12 w-12 h-12 bg-pink-200 rounded-full opacity-60"></div>
              <div className="absolute bottom-12 left-16 w-8 h-8 bg-orange-200 rounded-full opacity-70"></div>
              
              {/* Character with food */}
              <div className="w-48 h-48 bg-pink-300 rounded-full flex items-center justify-center relative">
                <div className="text-6xl">👩🏽</div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <div className="text-sm">🧁</div>
                  </div>
                </div>
              </div>
              
              {/* Star with heart */}
              <div className="absolute top-4 right-4 text-2xl">⭐💛</div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 max-w-md mx-auto lg:mx-0">
            <h1 className="text-4xl font-bold text-pink-600 mb-8">Cadastre-se</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-pink-600 font-medium mb-2 block">
                  Nome Completo
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="aaaaaaaaaaaaa"
                  className="bg-white border-none h-12 rounded-lg text-gray-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-pink-600 font-medium mb-2 block">
                  E-mail
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="aaaaaaaaaaaaa"
                  className="bg-white border-none h-12 rounded-lg text-gray-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-pink-600 font-medium mb-2 block">
                  Senha
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="aaaaaaaaaaaaa"
                  className="bg-white border-none h-12 rounded-lg text-gray-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-pink-600 font-medium mb-2 block">
                  Confirmar Senha
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="aaaaaaaaaaaaa"
                  className="bg-white border-none h-12 rounded-lg text-gray-400"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 rounded-full h-12 text-lg"
                disabled={loading}
              >
                {loading ? 'Criando conta...' : 'Criar conta'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterClient;
