export interface ServiceItem {
  title: string;
  description: string;
  icon: any;
}

export interface PlanItem {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  before: string[];
  after: string[];
  result: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// New Types for Agent Interface
export type ViewState = 'hero' | 'problem' | 'solution' | 'services' | 'plans' | 'faq' | 'upload';

export interface ChatMessage {
  id: string;
  role: 'agent' | 'user';
  content: string;
  options?: ChatOption[];
}

export interface ChatOption {
  label: string;
  value: string;
  action?: () => void;
  nextView?: ViewState;
}