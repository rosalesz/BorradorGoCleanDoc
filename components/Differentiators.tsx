import React from 'react';
import { Zap, DollarSign, Award, Target, Users, Layout, ShieldCheck } from 'lucide-react';

const Differentiators: React.FC = () => {
  const items = [
    { icon: Zap, title: "Rapidez", desc: "Resultados en días, no semanas." },
    { icon: DollarSign, title: "Accesible", desc: "Precios justos. Sin contratos largos." },
    { icon: Award, title: "Profesional", desc: "Procesos documentados y garantía." },
    { icon: Target, title: "Enfoque Exclusivo", desc: "Solo hacemos preparación de datos." },
    { icon: Users, title: "Asesoría Humana", desc: "Hablas con expertos, no chatbots." },
    { icon: Layout, title: "Tu Equipo Externo", desc: "Ideal si no tienes equipo de datos." },
    { icon: ShieldCheck, title: "Resultados Confiables", desc: "Validación múltiple y documentada." },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-400 font-bold tracking-wider uppercase text-sm">¿Por qué elegirnos?</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">
              Lo que nos diferencia del resto
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              No somos una agencia generalista. Somos especialistas en convertir el caos de datos en activos valiosos para tu empresa.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {items.slice(0, 4).map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg h-fit text-brand-400">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid gap-4">
            {items.slice(4).map((item, idx) => (
              <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex items-center gap-6 hover:border-brand-500/50 transition-colors">
                 <div className="bg-slate-900 p-4 rounded-full text-brand-400">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">{item.title}</h4>
                    <p className="text-slate-400 mt-1">{item.desc}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;