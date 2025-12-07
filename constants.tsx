import { Heart, Brain, Users, Zap, Shield, Sparkles } from 'lucide-react';
import { Service, Testimonial, EventItem } from './types';

export const APP_NAME = "Mubell Empathy Academy";

export const SERVICES: Service[] = [
  {
    id: '1-on-1',
    title: '1-on-1 Coaching',
    description: 'Personalized emotional intelligence coaching to help you navigate life’s complexities with clarity and calm.',
    targetAudience: 'Individuals seeking personal growth',
    format: 'Online / In-person',
    icon: Sparkles
  },
  {
    id: 'couples',
    title: 'Couples & Family Coaching',
    description: 'Rebuild trust and deepen connection through shared emotional understanding and effective communication.',
    targetAudience: 'Couples, Families',
    format: 'Online / In-person',
    icon: Heart
  },
  {
    id: 'leadership',
    title: 'Leadership Training',
    description: 'Empower your leadership style with empathy. Learn to lead high-performing teams without burnout.',
    targetAudience: 'Executives, Managers, Founders',
    format: 'Workshops / Seminars',
    icon: Zap
  },
  {
    id: 'parents',
    title: 'Conscious Parenting',
    description: 'Move from reactive to responsive parenting. Understand your triggers and raise emotionally intelligent children.',
    targetAudience: 'Parents, Guardians',
    format: 'Group / Private',
    icon: Shield
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "MEA changed how I view my own emotions. I went from constant overwhelm to a state of grounded confidence.",
    author: "Sarah J.",
    role: "Creative Director"
  },
  {
    id: 't2',
    quote: "The leadership training wasn't just about business; it was about being a better human. My team is happier and more productive.",
    author: "Michael T.",
    role: "Tech CEO"
  },
  {
    id: 't3',
    quote: "Finally, a place that understands that being emotional isn't a weakness, but a superpower when harnessed correctly.",
    author: "Elena R.",
    role: "Parent"
  }
];

export const EVENTS: EventItem[] = [
  {
    id: 'e1',
    title: 'The Calm Leader Workshop',
    date: 'October 15, 2023',
    description: 'A half-day immersion into emotional regulation for high-stakes environments.',
    location: 'Online via Zoom'
  },
  {
    id: 'e2',
    title: 'Reconnecting: Couples Retreat',
    date: 'November 5-7, 2023',
    description: 'A weekend getaway focused on rebuilding emotional intimacy.',
    location: 'Austin, TX'
  }
];