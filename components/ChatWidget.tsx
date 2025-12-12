import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { ChatMessage, ChatOption, ViewState } from '../types';

interface Props {
  onStateChange: (view: ViewState) => void;
  currentState: ViewState;
}

const ChatWidget: React.FC<Props> = ({ onStateChange, currentState }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Initial Greeting
  useEffect(() => {
    if (messages.length === 0) {
      addBotMessage("¡Hola! Soy el Agente de Diagnóstico de GoCleanDoc.", 500);
      addBotMessage("Para poder ayudarte mejor, cuéntame: ¿Cuál es el estado actual de tus datos?", 1500, [
        { label: "Desordenados / Duplicados", value: "messy", nextView: 'problem' },
        { label: "Necesito prepararlos para IA", value: "ai", nextView: 'problem' },
        { label: "Solo estoy explorando", value: "explore", nextView: 'services' }
      ]);
    }
  }, []);

  const addBotMessage = (text: string, delay: number = 0, options?: ChatOption[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'agent',
        content: text,
        options
      }]);
    }, delay);
  };

  const handleOptionClick = (option: ChatOption) => {
    // Add user selection as message
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      role: 'user',
      content: option.label
    }]);

    // Clear previous options to prevent re-clicking
    setMessages(prev => prev.map(msg => ({ ...msg, options: undefined })));

    // Trigger Logic based on selection
    if (option.nextView) {
      onStateChange(option.nextView);
      processResponse(option.value, option.nextView);
    }
  };

  const processResponse = (value: string, view: ViewState) => {
    // Logic simulation
    if (view === 'problem') {
      addBotMessage("Entiendo. Es una situación común. He analizado miles de casos similares.", 1000);
      addBotMessage("Mira el panel principal. ¿Te identificas con estos problemas críticos?", 2500, [
        { label: "Sí, exactamente eso", value: "yes_problem", nextView: 'solution' },
        { label: "En parte", value: "partial_problem", nextView: 'solution' }
      ]);
    } 
    else if (view === 'solution') {
      addBotMessage("La buena noticia es que no tienes que resolverlo tú mismo.", 1000);
      addBotMessage("En GoCleanDoc funcionamos como tu equipo externo. ¿Te gustaría ver cómo estructuramos el servicio?", 2500, [
        { label: "Ver Servicios", value: "show_services", nextView: 'services' },
        { label: "Ir directo a precios", value: "show_price", nextView: 'plans' }
      ]);
    }
    else if (view === 'services') {
      addBotMessage("Cubrimos todo el ciclo de vida del dato, desde la limpieza básica hasta la validación para Machine Learning.", 1000);
      addBotMessage("¿Qué volumen de datos manejas aproximadamente?", 2500, [
        { label: "Unos pocos archivos", value: "small", nextView: 'plans' },
        { label: "Bases de datos completas", value: "large", nextView: 'plans' },
        { label: "Tengo dudas técnicas", value: "faq", nextView: 'faq' }
      ]);
    }
    else if (view === 'faq') {
      addBotMessage("He recopilado las preguntas más frecuentes a la derecha.", 1000);
      addBotMessage("¿Te ha quedado alguna duda o estás listo para ver los planes?", 2000, [
        { label: "Ver Planes y Precios", value: "plans", nextView: 'plans' },
        { label: "Quiero un diagnóstico gratis", value: "upload", nextView: 'upload' }
      ]);
    }
    else if (view === 'plans') {
      addBotMessage("Aquí tienes nuestros paquetes diseñados para PYMES. Todos incluyen garantía de calidad.", 1000);
      addBotMessage("¿Te gustaría comenzar con un diagnóstico gratuito de tu archivo?", 3000, [
        { label: "Sí, enviar archivo", value: "upload", nextView: 'upload' },
        { label: "Necesito ver ejemplos antes", value: "examples", nextView: 'solution' } // Loop back contextually or add CaseStudy view
      ]);
    }
    else if (view === 'upload') {
      addBotMessage("¡Excelente decisión! Usa el formulario seguro de la derecha.", 1000);
      addBotMessage("Revisaré tu archivo personalmente y te enviaré una propuesta en 24 horas.", 2000);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white border-r border-slate-200 shadow-xl z-20">
      {/* Header */}
      <div className="p-4 bg-slate-900 text-white flex items-center gap-3 shadow-md">
        <div className="relative">
          <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center">
            <Bot size={24} />
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-900"></div>
        </div>
        <div>
          <h2 className="font-bold text-sm">Agente GoCleanDoc</h2>
          <p className="text-xs text-brand-200">En línea • Diagnóstico activo</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
            <div className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${
              msg.role === 'user' 
                ? 'bg-brand-600 text-white rounded-br-none' 
                : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
            }`}>
              <p className="text-sm leading-relaxed">{msg.content}</p>
              
              {/* Options */}
              {msg.options && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {msg.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(opt)}
                      className="text-xs bg-slate-100 hover:bg-brand-50 text-brand-700 border border-brand-200 px-3 py-2 rounded-lg transition-all font-medium"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area (Disabled for this simulation as it is guided) */}
      <div className="p-4 bg-white border-t border-slate-200">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Selecciona una opción arriba..." 
            disabled
            className="w-full bg-slate-100 text-slate-500 rounded-full py-3 px-4 text-sm focus:outline-none cursor-not-allowed"
          />
          <button disabled className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-slate-300 text-white rounded-full">
            <Send size={16} />
          </button>
        </div>
        <p className="text-xs text-center text-slate-400 mt-2">
          IA de Diagnóstico v1.2
        </p>
      </div>
    </div>
  );
};

export default ChatWidget;