import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  targetAudience: string;
  format: string;
  icon?: LucideIcon;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  avatarUrl?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
}

export interface Program {
  id: string;
  title: string;
  shortSummary: string;
  description: string[];
  benefits: string[];
  targetAudience?: string;
}

export interface MediaItem {
  id: string;
  title: string;
  url: string;
  type: 'video' | 'article' | 'podcast';
  source: string;
}

export interface AuditSection {
  id: string;
  title: string;
  questions: string[];
}
