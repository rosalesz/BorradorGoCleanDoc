import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Cuatro pasos simples hacia datos limpios
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-slate-900/20 group-hover:bg-brand-600 group-hover:shadow-brand-500/30 transition-all">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;