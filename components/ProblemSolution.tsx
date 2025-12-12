import React from 'react';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <>
      {/* SECCIÓN 2: EL PROBLEMA */}
      <section id="problema" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-red-50 rounded-xl transform -rotate-2"></div>
              <div className="relative bg-white border border-red-100 p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-100 rounded-lg text-red-600">
                    <AlertTriangle size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800">Estado Actual de tus Datos</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Múltiples archivos desconectados",
                    "Registros duplicados y redundantes",
                    "Formatos de fecha inconsistentes",
                    "Errores humanos no detectados"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <XCircle size={20} className="text-red-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Consecuencia</p>
                  <p className="mt-2 text-slate-800 font-medium">
                    "No puedes hacer análisis confiables. Los dashboards mienten. La IA falla."
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                El 80% de las empresas pierden oportunidades por datos desordenados
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                El problema no es que no tengas datos. Es que no están listos para usarlos.
                Mientras tú luchas con Excels interminables, tu competencia ya está usando datos limpios para:
              </p>
              <div className="space-y-4">
                {[
                  "Identificar oportunidades ocultas",
                  "Automatizar decisiones con IA",
                  "Generar reportes confiables al instante",
                  "Ahorrar cientos de horas manuales"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: LA SOLUCIÓN */}
      <section id="solucion" className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-900/50 border border-brand-500/30 text-brand-300 text-sm font-semibold mb-6">
            LA SOLUCIÓN GOCLEANDOC
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Tu equipo de datos especializado <br/>
            <span className="text-brand-400">sin contratar personal extra</span>
          </h2>
          
          <div className="max-w-3xl mx-auto text-lg text-slate-300 mb-12 space-y-4">
            <p>
              No es un software complejo. No es una herramienta que tengas que aprender. <strong className="text-white">Es un servicio.</strong>
            </p>
            <p>
              Envías tus archivos desordenados. Nuestro equipo experto los limpia, organiza, valida y te devuelve un dataset profesional, documentado y listo para usar en análisis, dashboards o IA.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Sin Complicaciones", desc: "Nosotros hacemos el trabajo técnico." },
              { title: "Sin Sorpresas", desc: "Resultados garantizados y validados." },
              { title: "Sin Curva de Aprendizaje", desc: "Recibe archivos listos para usar." }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-brand-500/50 transition-colors">
                <CheckCircle className="mx-auto mb-4 text-brand-400" size={32} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSolution;