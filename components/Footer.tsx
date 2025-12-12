import React from 'react';
import { Database, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToUpload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('upload');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECCIÓN 12: CTA FINAL */}
        <div className="bg-brand-600 rounded-3xl p-8 md:p-16 text-center mb-20 shadow-2xl shadow-brand-900/50">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tus datos limpios están a un clic
          </h2>
          <p className="text-brand-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            No esperes más a que tus datos te frenen. Cada día que pases con información desordenada es dinero que pierdes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a
              href="#upload"
              onClick={scrollToUpload}
              className="bg-white text-brand-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-100 transition-colors shadow-lg"
            >
              Solicitar Diagnóstico Gratis
            </a>
            <a
              href="mailto:contacto@gocleandoc.com"
              className="bg-brand-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-800 transition-colors border border-brand-500"
            >
              Consultar Dudas
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 border-t border-slate-800 pt-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-500 p-1.5 rounded-lg">
                <Database size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">GoCleanDoc</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Expertos en limpieza y preparación de datos para PYMES. Hacemos que tus datos trabajen para ti.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Limpieza de Datos</li>
              <li>Integración de Archivos</li>
              <li>Preparación para IA</li>
              <li>Validación de Calidad</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Sobre Nosotros</li>
              <li>Casos de Éxito</li>
              <li>Precios</li>
              <li>Términos y Condiciones</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} /> contacto@gocleandoc.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +57 (300) 123-4567
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} GoCleanDoc. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;