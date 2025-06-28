
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ShopProducts = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard since products are now shown there
    navigate('/shop/dashboard');
  }, [navigate]);

  return null;
};

export default ShopProducts;
