import React from 'react';
import { CASE_STUDIES } from '../constants';
import { ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Transformaciones reales de datos
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col h-full">
              <h3 className="text-xl font-bold text-slate-900 mb-6 h-12 flex items-center">
                {study.title}
              </h3>
              
              <div className="space-y-6 flex-grow">
                <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                  <span className="text-xs font-bold text-red-500 uppercase tracking-wide block mb-2">Antes</span>
                  <ul className="space-y-2">
                    {study.before.map((item, i) => (
                      <li key={i} className="text-sm text-slate-600 flex gap-2">
                        <span className="text-red-400">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center">
                    <div className="bg-slate-200 p-2 rounded-full">
                        <ArrowRight size={20} className="text-slate-500 rotate-90 lg:rotate-0" />
                    </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-green-100 shadow-sm">
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wide block mb-2">Después</span>
                  <ul className="space-y-2">
                    {study.after.map((item, i) => (
                      <li key={i} className="text-sm text-slate-600 flex gap-2">
                        <span className="text-green-500">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-sm font-semibold text-brand-600">
                  Resultado: <span className="text-slate-700 font-normal">{study.result}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;