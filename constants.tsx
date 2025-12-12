import { 
  Database, 
  Trash2, 
  FileCheck, 
  ShieldAlert, 
  Merge, 
  BrainCircuit, 
  CheckCircle2, 
  FileText,
  FileCode
} from 'lucide-react';
import { ServiceItem, PlanItem, ProcessStep, CaseStudy, Testimonial, FAQItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    title: "Limpieza y Depuración",
    description: "Eliminamos espacios en blanco, caracteres especiales, inconsistencias de formato y valores inválidos que generan errores.",
    icon: Trash2
  },
  {
    title: "Eliminación de Duplicados",
    description: "Identificamos y removemos registros duplicados sin perder información valiosa, usando lógica inteligente.",
    icon: Database
  },
  {
    title: "Estandarización",
    description: "Unificamos formatos de fechas, números, textos y categorías para que todo sea consistente.",
    icon: FileCheck
  },
  {
    title: "Corrección de Errores",
    description: "Detectamos y corregimos valores faltantes, inconsistencias lógicas y datos que no tienen sentido en contexto.",
    icon: ShieldAlert
  },
  {
    title: "Integración de Múltiples Archivos",
    description: "Combinamos datos de varios archivos en una única fuente confiable, sin duplicar ni perder información.",
    icon: Merge
  },
  {
    title: "Preparación de Datos para IA",
    description: "Estructuramos tus datos específicamente para que funcionen óptimamente con modelos de machine learning.",
    icon: BrainCircuit
  },
  {
    title: "Validación de Calidad",
    description: "Verificamos que cada dato cumpla con estándares de precisión, completitud y coherencia antes de entregar.",
    icon: CheckCircle2
  },
  {
    title: "Reporte Antes y Después",
    description: "Te mostramos exactamente qué tenías, qué encontramos, qué limpiamos y cómo mejoró tu dataset.",
    icon: FileText
  },
  {
    title: "Documentación del Dataset",
    description: "Entregamos documentación clara sobre estructura, campos, transformaciones realizadas y cómo usar los datos.",
    icon: FileCode
  }
];

export const PLANS: PlanItem[] = [
  {
    name: "GoCleanDoc Básico",
    subtitle: "Para empresas con datasets pequeños o puntuales",
    price: "$49.900 COP",
    features: [
      "Limpieza y depuración",
      "Eliminación de duplicados",
      "Estandarización básica",
      "Validación de calidad",
      "Entrega en 3-5 días hábiles"
    ]
  },
  {
    name: "GoCleanDoc Integra",
    subtitle: "Para empresas con múltiples fuentes de datos",
    price: "$149.900 COP",
    features: [
      "Todo lo del plan Básico",
      "Integración de hasta 3 archivos",
      "Corrección avanzada de errores",
      "Reporte antes y después",
      "Documentación del dataset",
      "Entrega en 5-7 días hábiles",
      "Revisión y ajustes incluidos"
    ],
    isPopular: true
  },
  {
    name: "GoCleanDoc IA-Ready",
    subtitle: "Para empresas que usan o planean usar IA",
    price: "$399.900 COP",
    features: [
      "Todo lo del plan Integra",
      "Preparación especializada para IA/ML",
      "Integración de hasta 5 archivos",
      "Análisis de calidad de datos avanzado",
      "Documentación técnica completa",
      "Soporte post-entrega (14 días)",
      "Entrega en 7-10 días hábiles",
      "Consultoría sobre estructura de datos"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Envío de Archivos",
    description: "Subes tus archivos directamente desde nuestra plataforma. Excel, CSV, TXT, JSON o bases de datos pequeñas. Sin complicaciones."
  },
  {
    number: "02",
    title: "Diagnóstico",
    description: "Nuestro equipo analiza tus datos, identifica problemas, calcula el alcance del trabajo y te presenta un plan claro. Respuesta en 24 horas."
  },
  {
    number: "03",
    title: "Limpieza y Preparación",
    description: "Ejecutamos la limpieza según el plan acordado. Depuramos, estandarizamos, validamos y documentamos cada paso."
  },
  {
    number: "04",
    title: "Entrega Final con Validación",
    description: "Recibes tu dataset limpio, documentado y listo para usar. Te mostramos el antes y después. Validamos juntos que todo sea correcto."
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "E-Commerce con Múltiples Fuentes",
    before: ["3 archivos de ventas diferentes", "2,400 registros duplicados", "Fechas en 4 formatos", "15% datos faltantes"],
    after: ["1 dataset unificado y limpio", "0 duplicados", "Fechas estandarizadas", "100% datos completos"],
    result: "Identificaron que el 35% de sus ventas venían de un canal que no sabían que era rentable."
  },
  {
    title: "Empresa de Servicios - Datos Heredados",
    before: ["Base de datos de 8 años", "Clientes duplicados triples", "Contactos inconsistentes", "Proyectos incompletos"],
    after: ["Base consolidada", "Clientes únicos identificados", "Contactos validados", "Segmentación funcional"],
    result: "Redujeron costos de marketing en 40% al dirigirse a los clientes correctos."
  },
  {
    title: "Startup Preparándose para IA",
    before: ["5 archivos CSV", "Formatos inconsistentes", "Valores nulos sin patrón", "Categorías sin estandarizar"],
    after: ["Dataset optimizado para ML", "Estructura limpia", "Documentación técnica", "Listo para entrenar"],
    result: "Lanzaron su modelo de IA 3 semanas antes de lo planeado."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Teníamos datos esparcidos en 4 archivos diferentes y no podíamos hacer un reporte confiable. GoCleanDoc nos entregó un dataset limpio en una semana. Ahora nuestros dashboards funcionan perfectamente.",
    author: "María García",
    role: "Gerente de Operaciones, TechVentures Latam"
  },
  {
    text: "No sabíamos por dónde empezar con nuestros datos. El equipo de GoCleanDoc fue muy profesional, nos explicó todo claramente y nos entregó exactamente lo que necesitábamos.",
    author: "Carlos Mendoza",
    role: "Fundador, E-Commerce Solutions"
  },
  {
    text: "Contratamos GoCleanDoc para preparar nuestros datos para un modelo de IA. No solo limpiaron los datos, sino que nos asesoraron sobre cómo estructurarlos mejor.",
    author: "Sofía Rodríguez",
    role: "Data Analyst, Innovatech Consulting"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "¿Cuánto tiempo tarda la limpieza de datos?",
    answer: "Depende del tamaño y complejidad. Proyectos pequeños: 3-5 días. Medianos: 5-7 días. Complejos: 7-10 días. Siempre te damos un estimado previo."
  },
  {
    question: "¿Qué formatos de archivo aceptan?",
    answer: "Excel (.xlsx, .xls), CSV, TXT, JSON, y bases de datos pequeñas (SQLite, Access). Contáctanos para otros formatos."
  },
  {
    question: "¿Hay límite de tamaño de archivo?",
    answer: "Trabajamos mejor con archivos de hasta 500MB. Si es más grande, podemos dividir el trabajo o discutir opciones personalizadas."
  },
  {
    question: "¿Qué pasa si no me gusta el resultado?",
    answer: "Hacemos revisiones y ajustes incluidos. Si después de los ajustes no estás satisfecho, discutimos opciones. Tu satisfacción es prioridad."
  },
  {
    question: "¿Mis datos están seguros?",
    answer: "Sí. Usamos encriptación, servidores seguros y firmamos acuerdos de confidencialidad. Tus datos son solo tuyos."
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer: "No. Entregamos datos listos para usar en la herramienta que prefieras, con documentación clara."
  },
  {
    question: "¿Puedo hacer cambios después de recibir los datos?",
    answer: "El plan IA-Ready incluye 14 días de soporte. Otros planes incluyen revisiones menores sin costo adicional durante el cierre."
  },
  {
    question: "¿Ofrecen servicio recurrente?",
    answer: "Sí. Podemos crear un plan recurrente personalizado si tienes datos que necesitan limpieza periódica."
  }
];