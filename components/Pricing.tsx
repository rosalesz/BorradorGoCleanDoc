import React from 'react';
import { Check } from 'lucide-react';
import { PLANS } from '../constants';

const Pricing: React.FC = () => {
  const scrollToUpload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('upload');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="planes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Elige el plan que se ajuste a tu necesidad
          </h2>
          <p className="text-slate-600">Precios transparentes en Pesos Colombianos (COP).</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 ${
                plan.isPopular 
                  ? 'bg-slate-900 text-white ring-4 ring-brand-500/30 shadow-xl' 
                  : 'bg-white border border-slate-200 text-slate-900 shadow-lg'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Más Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 h-10 ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.subtitle}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium opacity-70">Desde</span>
                  <span className={`text-4xl font-extrabold ${plan.isPopular ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`mt-0.5 rounded-full p-0.5 ${plan.isPopular ? 'bg-brand-500 text-white' : 'bg-brand-100 text-brand-600'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className={`text-sm ${plan.isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#upload"
                onClick={scrollToUpload}
                className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                  plan.isPopular
                    ? 'bg-brand-500 hover:bg-brand-400 text-white shadow-lg shadow-brand-500/25'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                Solicitar Presupuesto
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;