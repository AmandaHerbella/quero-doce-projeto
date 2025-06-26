
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ShopRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    cnpj: '',
    email: '',
    cep: '',
    phone: '',
    complement: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle shop registration logic here
    console.log('Shop registration:', formData);
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
        <div className="bg-pink-100 rounded-3xl p-8 max-w-4xl w-full">
          <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center">Cadastro de sua loja</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-pink-600 font-medium mb-2 block">
                  Nome
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="aaaaaaaaaaaaa"
                  className="bg-white border-none h-12 rounded-lg text-gray-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="cnpj" className="text-pink-600 font-medium mb-2 block">
                  CNPJ
                </Label>
                <Input
                  id="cnpj"
                  name="cnpj"
                  type="text"
                  value={formData.cnpj}
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
                <Label htmlFor="cep" className="text-pink-600 font-medium mb-2 block">
                  CEP
                </Label>
                <Input
                  id="cep"
                  name="cep"
                  type="text"
                  value={formData.cep}
                  onChange={handleChange}
                  placeholder="aaaaaaaaaaaaa"
                  className="bg-white border-none h-12 rounded-lg text-gray-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-pink-600 font-medium mb-2 block">
                  Telefone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="aaaaaaaaaaaaa"
                  className="bg-white border-none h-12 rounded-lg text-gray-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="complement" className="text-pink-600 font-medium mb-2 block">
                  Complemento
                </Label>
                <Input
                  id="complement"
                  name="complement"
                  type="text"
                  value={formData.complement}
                  onChange={handleChange}
                  placeholder="aaaaaaaaaaaaa"
                  className="bg-white border-none h-12 rounded-lg text-gray-400"
                />
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-16 rounded-full h-12 text-lg"
              >
                Começar a vender
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopRegister;
