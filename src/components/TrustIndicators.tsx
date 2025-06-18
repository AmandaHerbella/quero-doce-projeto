
import React from 'react';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: '🚚',
      title: 'Entrega rápida e segura',
      description: 'Algum texto para explicar melhor que a entrega é feita por profissionais'
    },
    {
      icon: '🏆',
      title: 'A melhor qualidade',
      description: 'Algum texto para explicar melhor que a qualidade é feita por profissionais'
    },
    {
      icon: '🏷️',
      title: 'Descontos e promoções',
      description: 'Algum texto para explicar melhor que os descontos são feitos por profissionais'
    },
    {
      icon: '🔒',
      title: 'Pagamento seguro',
      description: 'Algum texto para explicar melhor que o pagamento é feito por profissionais'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <div className="text-6xl mb-4">{indicator.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {indicator.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {indicator.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
