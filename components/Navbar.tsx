import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Problema', id: 'problema' },
    { name: 'Solución', id: 'solucion' },
    { name: 'Servicios', id: 'servicios' },
    { name: 'Planes', id: 'planes' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* 
              NOTA: Para usar tu imagen de logo definitiva:
              1. Guarda tu imagen como 'logo.png' en la carpeta public
              2. Asegúrate de que la ruta sea correcta
            */}
            <div className="relative flex items-center justify-center w-12 h-12">
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png" 
                    alt="GoCleanDoc Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/48x48.png?text=Logo";
                    }}
                />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">GoCleanDoc</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-slate-600 hover:text-brand-600 font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={(e) => scrollToSection(e, 'upload')}
              className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Diagnóstico Gratis
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600 rounded-md"
              onClick={(e) => scrollToSection(e, link.id)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={(e) => scrollToSection(e, 'upload')}
            className="block w-full text-center mt-4 bg-brand-600 text-white px-5 py-3 rounded-lg font-bold"
          >
            Diagnóstico Gratis
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;