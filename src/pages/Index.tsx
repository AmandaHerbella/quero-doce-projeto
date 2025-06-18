
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PopularProducts from '../components/PopularProducts';
import PromotionBanner from '../components/PromotionBanner';
import TrustIndicators from '../components/TrustIndicators';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Header />
      <Hero />
      <PopularProducts />
      <PromotionBanner />
      <TrustIndicators />
      <Footer />
    </div>
  );
};

export default Index;
