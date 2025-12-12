import React from 'react';
import { ArrowRight, UploadCloud } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
          Convierte tus datos en <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">
            activos listos para IA
          </span>
        </h1>
        
        <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Limpieza, organización y preparación de datos profesional. De datos crudos a datasets confiables en días, no semanas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#upload"
            onClick={(e) => scrollToSection(e, 'upload')}
            className="group flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-brand-500/20"
          >
            Solicitar Diagnóstico Gratis
            <UploadCloud size={20} className="group-hover:-translate-y-1 transition-transform" />
          </a>
          
          <a
            href="#planes"
            onClick={(e) => scrollToSection(e, 'planes')}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-medium text-slate-600 hover:text-brand-600 hover:bg-white border border-transparent hover:border-slate-200 transition-all"
          >
            Ver Planes
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;