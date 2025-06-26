
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const CustomerLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle customer login logic here
    console.log('Customer login:', formData);
    // For now, redirect to home page
    navigate('/');
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
          {/* Left Side - Form */}
          <div className="flex-1 max-w-md mx-auto lg:mx-0">
            <h1 className="text-4xl font-bold text-pink-600 mb-8">Olá novamente!</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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

              <Button
                type="submit"
                className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 rounded-full h-12 text-lg"
              >
                Entrar
              </Button>
            </form>
          </div>

          {/* Right Side - Illustration */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="w-96 h-96 bg-yellow-100 rounded-full flex items-center justify-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-yellow-200 rounded-full opacity-50"></div>
              <div className="absolute top-16 right-12 w-12 h-12 bg-pink-200 rounded-full opacity-60"></div>
              <div className="absolute bottom-12 left-16 w-8 h-8 bg-orange-200 rounded-full opacity-70"></div>
              
              {/* Character placeholder */}
              <div className="w-48 h-48 bg-teal-600 rounded-full flex items-center justify-center relative">
                <div className="text-6xl">👤</div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <div className="text-sm">🍰</div>
                  </div>
                </div>
              </div>
              
              {/* Star with heart */}
              <div className="absolute top-4 right-4 text-2xl">⭐💛</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CustomerLogin;
