
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    maxQuantity: '',
    acceptsCoupons: '',
    photos: null as FileList | null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Produto cadastrado com sucesso!');
    navigate('/shop/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: files ? files : value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 to-rose-300">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-pink-600 mb-8">Cadastrar novo produto</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-pink-600 font-medium text-lg mb-2 block">
                  Nome
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Digite o nome do produto"
                  className="bg-white border-none h-12 rounded-lg"
                  required
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-pink-600 font-medium text-lg mb-2 block">
                  Descrição
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Descreva o produto"
                  className="bg-white border-none rounded-lg min-h-[100px]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="acceptsCoupons" className="text-pink-600 font-medium text-lg mb-2 block">
                  Aceita cupom? S/N
                </Label>
                <Input
                  id="acceptsCoupons"
                  name="acceptsCoupons"
                  type="text"
                  value={formData.acceptsCoupons}
                  onChange={handleChange}
                  placeholder="S ou N"
                  className="bg-white border-none h-12 rounded-lg"
                  required
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <Label htmlFor="price" className="text-pink-600 font-medium text-lg mb-2 block">
                  Preço
                </Label>
                <Input
                  id="price"
                  name="price"
                  type="text"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="0,00"
                  className="bg-white border-none h-12 rounded-lg"
                  required
                />
              </div>

              <div>
                <Label htmlFor="maxQuantity" className="text-pink-600 font-medium text-lg mb-2 block">
                  Quantidade máxima por pedido
                </Label>
                <Input
                  id="maxQuantity"
                  name="maxQuantity"
                  type="text"
                  value={formData.maxQuantity}
                  onChange={handleChange}
                  placeholder="Digite a quantidade máxima"
                  className="bg-white border-none h-12 rounded-lg"
                  required
                />
              </div>

              <div>
                <Label htmlFor="photos" className="text-pink-600 font-medium text-lg mb-2 block">
                  Fotos
                </Label>
                <Input
                  id="photos"
                  name="photos"
                  type="file"
                  onChange={handleChange}
                  multiple
                  accept="image/*"
                  className="bg-white border-none h-12 rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-12 rounded-full text-lg"
            >
              Começar a vender
            </Button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default AddProduct;
