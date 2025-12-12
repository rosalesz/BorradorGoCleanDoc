import React, { useState, useEffect } from 'react';
import { UploadCloud, File, CheckCircle2, AlertCircle, Loader2, Database, ArrowRight, Download } from 'lucide-react';

const FileUploadSection: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  // States: form, processing, results
  const [step, setStep] = useState<'form' | 'processing' | 'results'>('form');
  const [progress, setProgress] = useState(0);
  const [processingStatus, setProcessingStatus] = useState("Iniciando carga...");
  
  // Simulated stats for the results
  const [stats, setStats] = useState({
    rows: 0,
    duplicates: 0,
    errors: 0,
    empty: 0
  });

  // Simulated form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'basic',
    description: ''
  });

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const simulateProcessing = () => {
    setStep('processing');
    setProgress(0);

    // Simulation Stages
    const stages = [
      { pct: 10, msg: "Subiendo archivo seguro..." },
      { pct: 30, msg: "Analizando estructura de datos..." },
      { pct: 50, msg: "Detectando duplicados..." },
      { pct: 70, msg: "Estandarizando formatos de fecha y moneda..." },
      { pct: 90, msg: "Generando reporte de calidad..." },
      { pct: 100, msg: "¡Limpieza completada!" }
    ];

    let currentStage = 0;

    const interval = setInterval(() => {
      if (currentStage >= stages.length) {
        clearInterval(interval);
        // Generate random realistic stats based on "file size" simulation
        setStats({
          rows: Math.floor(Math.random() * 5000) + 1000,
          duplicates: Math.floor(Math.random() * 300) + 20,
          errors: Math.floor(Math.random() * 150) + 10,
          empty: Math.floor(Math.random() * 500) + 50
        });
        setStep('results');
        return;
      }

      const stage = stages[currentStage];
      setProgress(stage.pct);
      setProcessingStatus(stage.msg);
      currentStage++;
    }, 800); // 800ms per stage for a ~5 second simulated wait
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    simulateProcessing();
  };

  return (
    <section id="upload" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {step === 'form' && (
          <>
            <div className="text-center mb-10">
              <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wide mb-4">
                Comienza Ahora
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Prueba nuestra tecnología de limpieza
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Sube tu archivo para recibir una <strong>demostración gratuita</strong> de limpieza y diagnóstico al instante.
                <br />Aceptamos: Excel, CSV, TXT, JSON.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
              <form onSubmit={handleSubmit} className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nombre Completo</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Correo Electrónico</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      placeholder="tu@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de Limpieza Requerida</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white"
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                  >
                    <option value="basic">Limpieza básica</option>
                    <option value="integra">Integración de múltiples archivos</option>
                    <option value="ia">Preparación para IA</option>
                    <option value="consult">No estoy seguro (asesoría incluida)</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Sube tu archivo (Max 500MB)</label>
                  <div 
                    className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                      dragActive ? 'border-brand-500 bg-brand-50' : 'border-slate-300 hover:border-brand-400 hover:bg-slate-50'
                    } ${file ? 'bg-green-50 border-green-500' : ''}`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <input 
                      type="file" 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleChange}
                      accept=".xlsx,.xls,.csv,.txt,.json,.db,.accdb"
                    />
                    
                    {file ? (
                      <div className="flex flex-col items-center text-green-700">
                        <File size={40} className="mb-2" />
                        <span className="font-semibold">{file.name}</span>
                        <span className="text-xs mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                        <span className="text-sm mt-2 text-green-600 font-medium">Click para cambiar</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center text-slate-500">
                        <UploadCloud size={40} className="mb-3 text-slate-400" />
                        <p className="font-medium text-slate-900">Arrastra tu archivo aquí o haz click</p>
                        <p className="text-xs mt-1">Excel, CSV, TXT, JSON</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Describe tu problema (Opcional)</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all h-24 resize-none"
                    placeholder="Ej: Tengo datos de 3 años en archivos diferentes..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={!file}
                  className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-all shadow-lg ${
                    !file
                      ? 'bg-slate-400 cursor-not-allowed' 
                      : 'bg-brand-600 hover:bg-brand-700 hover:shadow-brand-500/30'
                  }`}
                >
                  Procesar y Limpiar Datos
                </button>
                
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                  <AlertCircle size={14} />
                  <span>Tus datos están seguros y encriptados.</span>
                </div>
              </form>
            </div>
          </>
        )}

        {step === 'processing' && (
          <div className="max-w-2xl mx-auto bg-white p-16 rounded-2xl shadow-xl border border-slate-200 text-center animate-fade-in">
             <div className="relative w-24 h-24 mx-auto mb-8">
               <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
               <div className="absolute inset-0 border-4 border-brand-500 rounded-full border-t-transparent animate-spin"></div>
               <div className="absolute inset-0 flex items-center justify-center text-brand-600">
                 <Loader2 size={32} className="animate-pulse" />
               </div>
             </div>
             
             <h3 className="text-2xl font-bold text-slate-900 mb-2">{processingStatus}</h3>
             <p className="text-slate-500 mb-8">Esto puede tomar unos segundos dependiendo del tamaño de tu archivo...</p>
             
             <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
               <div 
                  className="bg-brand-500 h-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
               ></div>
             </div>
             <p className="text-right text-xs text-slate-400 mt-2">{progress}% Completado</p>
          </div>
        )}

        {step === 'results' && (
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden animate-fade-in-up">
            <div className="bg-green-50 p-8 border-b border-green-100 text-center">
               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 shadow-sm">
                 <CheckCircle2 size={32} />
               </div>
               <h2 className="text-3xl font-bold text-slate-900 mb-2">¡Análisis Completado!</h2>
               <p className="text-slate-600">Hemos procesado tu archivo <strong>{file?.name}</strong> exitosamente.</p>
            </div>

            <div className="p-8 md:p-12">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Database size={20} className="text-brand-500" />
                Resumen de Hallazgos
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                  <p className="text-3xl font-extrabold text-slate-900">{stats.rows}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Registros Totales</p>
                </div>
                <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-center">
                  <p className="text-3xl font-extrabold text-red-600">{stats.duplicates}</p>
                  <p className="text-xs text-red-400 uppercase tracking-wide mt-1">Duplicados</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 text-center">
                  <p className="text-3xl font-extrabold text-orange-600">{stats.errors}</p>
                  <p className="text-xs text-orange-400 uppercase tracking-wide mt-1">Errores Formato</p>
                </div>
                <div className="bg-brand-50 p-4 rounded-xl border border-brand-100 text-center">
                  <p className="text-3xl font-extrabold text-brand-600">{stats.empty}</p>
                  <p className="text-xs text-brand-400 uppercase tracking-wide mt-1">Datos Vacíos</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-8">
                <h4 className="font-bold text-slate-900 mb-3">Acciones Recomendadas por GoCleanDoc:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Se recomienda eliminar los <strong>{stats.duplicates}</strong> registros duplicados para evitar sesgos.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Detectamos <strong>{stats.errors}</strong> fechas con formato inconsistente que deben estandarizarse.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Hay <strong>{stats.empty}</strong> celdas críticas vacías que requieren imputación o validación manual.</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center gap-2 bg-brand-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-brand-700 transition-colors shadow-lg hover:shadow-brand-500/25">
                  <Download size={20} />
                  Descargar Informe y Muestra Limpia
                </button>
                <button 
                  onClick={() => {
                     setStep('form');
                     setFile(null);
                     setStats({ rows: 0, duplicates: 0, errors: 0, empty: 0 });
                  }}
                  className="flex items-center justify-center gap-2 bg-white text-slate-600 border border-slate-200 px-6 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors"
                >
                  Analizar Otro Archivo
                </button>
              </div>
              <p className="text-center text-xs text-slate-400 mt-4">
                El informe completo ha sido enviado a {formData.email}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default FileUploadSection;