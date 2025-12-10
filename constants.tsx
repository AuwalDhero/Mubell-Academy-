import { Heart, Brain, Users, Zap, Shield, Sparkles, Building2, Feather } from 'lucide-react';
import { Service, Testimonial, EventItem, Program, MediaItem, AuditSection } from './types';

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
    quote: "Before working with Musa, my self-esteem was broken. I felt empty, fearful, and unable to express myself. Today, I walk with confidence, speak boldly in front of people, and feel emotionally alive again. I am no longer trapped in negative thoughts—I am free, hopeful, and excited about my future. Musa’s coaching transformed my confidence and emotional wellbeing.",
    author: "Anna",
    role: "Botswana"
  },
  {
    id: 't2',
    quote: "Thank you for your teachings. I’ve gained so much clarity and emotional awareness. Your coaching has opened my eyes, helped me understand myself better, and guided me into real personal growth. I’m becoming a stronger, calmer, and more emotionally intelligent version of myself because of your work.",
    author: "Amadi Gloria",
    role: "Nigeria"
  },
  {
    id: 't3',
    quote: "After going through the master class on emotional intelligence, I can comfortably say that my goals have been achieved. I now have a better understanding of how emotions work and I can help people interprete and understand how to deal with their emotions. With the illustrations learnt during the course, I believe it would be easier for me to manage mine and guide others on how to manage their emotions.",
    author: "Prof Aderinoye",
    role: "Nigeria"
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

export const PROGRAMS: Program[] = [
  {
    id: 'leaders',
    title: 'Emotional Intelligence for Leaders',
    shortSummary: 'Master emotional control, build presence, and lead with confidence.',
    description: [
      'Leadership is not just about strategy; it is about state management. Our program helps leaders navigate high-pressure environments without losing their cool.',
      'We focus on the psychology of influence and the neuroscience of decision-making under stress.'
    ],
    benefits: [
      'Master emotional control',
      'Build strong presence',
      'Reduce stress & burnout',
      'Communicate with impact',
      'Lead with confidence',
      'Improve decision-making'
    ]
  },
  {
    id: 'couples-singles',
    title: 'Emotional Intelligence for Couples & Singles',
    shortSummary: 'Heal triggers, break negative cycles, and deepen intimacy.',
    description: [
      'Relationships fail because of emotional ignorance. Love is not enough; you need the skills to navigate conflict and connection.',
      'This program bridges the gap between intention and impact in your romantic life.'
    ],
    benefits: [
      'Communicate calmly',
      'Heal emotional triggers',
      'Build emotional safety',
      'Break negative cycles',
      'Deepen intimacy'
    ]
  },
  {
    id: 'parents',
    title: 'Emotional Intelligence for Parents',
    shortSummary: 'Raise resilient children by moving from reaction to response.',
    description: [
      'Parenting is the ultimate test of emotional regulation. We help you break generational patterns and parent from a place of wholeness rather than wounds.',
      'Learn to validate your child’s emotions without compromising boundaries.'
    ],
    benefits: [
      'Stay calm under pressure',
      'Reduce shouting and reactivity',
      'Teach emotional vocabulary',
      'Discipline without damage',
      'Raise resilient, emotionally intelligent children'
    ]
  },
  {
    id: 'trauma-healing',
    title: 'Trauma-Informed Emotional Healing',
    shortSummary: 'Heal emotional wounds and build lasting resilience.',
    description: [
      'You are not broken. You are just patterned. This program uses trauma-informed protocols to help you release stored pain and reclaim your emotional freedom.',
      'We move beyond talk therapy into somatic and emotional release.'
    ],
    benefits: [
      'Heal emotional wounds',
      'Break old patterns',
      'Regulate emotions',
      'Overcome fear, anger, shame, anxiety',
      'Build emotional resilience'
    ]
  },
  {
    id: 'corporate',
    title: 'Corporate Emotional Intelligence Training',
    shortSummary: 'Enhance leadership competence and build emotionally intelligent workplaces.',
    description: [
      'Emotions drive behavior, and behavior drives performance. We help organizations create cultures where psychological safety fuels innovation.',
      'Stop the drain of drama and conflict in your workforce.'
    ],
    benefits: [
      'Improve communication',
      'Reduce conflict',
      'Increase productivity',
      'Enhance leadership competence',
      'Build emotionally intelligent workplaces'
    ]
  }
];

export const TRUSTED_BY = [
  "Federal Road Safety Corps (FRSC)",
  "National Youth Service Corps (NYSC)",
  "Ministry of Interior",
  "Central Emirate International Academy Abuja",
  "Alfaizun Academy Abuja",
  "HENAM Synergy Ltd",
  "NIRSAL"
];

export const MEDIA_LINKS: MediaItem[] = [
  {
    id: 'interview-national-tribune',
    title: 'Exclusive Interview',
    source: 'National Tribune',
    url: 'https://www.nationaltribune.ng/exclusive-interview-with-sodium-ceo-of-mubell-empathy-academy/',
    type: 'article'
  },
  {
    id: 'interview-nairaday',
    title: 'Exclusive Interview',
    source: 'NairaDay',
    url: 'https://nairaday.ng/exclusive-interview-with-sodium-ceo-of-mubell-empathy-academy/',
    type: 'article'
  },
  {
    id: 'youtube-1',
    title: 'YouTube Interview 1',
    source: 'YouTube',
    url: 'https://youtu.be/HJkTVjbn4Z8?si=qGgP_96dX_W9-ygQ',
    type: 'video'
  },
  {
    id: 'youtube-2',
    title: 'YouTube Interview 2',
    source: 'YouTube',
    url: 'https://www.youtube.com/watch?v=hlLk6T9dcQM',
    type: 'video'
  },
  {
    id: 'podcast-apple',
    title: 'How I Ate My Emotions with Bello Musa',
    source: 'Apple Podcast',
    url: 'https://podcasts.apple.com/us/podcast/how-i-ate-my-emotions-with-bello-musa-sodium/id1532669134?i=1000674085102',
    type: 'podcast'
  }
];

export const AUDIT_SECTIONS: AuditSection[] = [
  {
    id: 'self-awareness',
    title: 'Self-Awareness',
    questions: [
      "Can you identify your specific emotions as you feel them?",
      "Do you understand how your emotions affect your performance?",
      "Are you aware of your personal strengths and limitations?",
      "Do you recognize your emotional triggers?"
    ]
  },
  {
    id: 'self-regulation',
    title: 'Self-Regulation',
    questions: [
      "Can you stay calm under pressure?",
      "Do you think before you act when you are angry?",
      "Can you adapt to changing circumstances without getting overwhelmed?",
      "Do you handle stress in healthy ways?"
    ]
  },
  {
    id: 'motivation',
    title: 'Motivation',
    questions: [
      "Are you driven to achieve beyond external expectations?",
      "Do you persist in the face of setbacks?",
      "Are you optimistic about the future?",
      "Do you seek opportunities to learn and grow?"
    ]
  },
  {
    id: 'empathy',
    title: 'Empathy',
    questions: [
      "Can you sense how others are feeling without them saying it?",
      "Do you take an active interest in others' concerns?",
      "Can you see situations from another person's perspective?",
      "Are you effective at reading group dynamics?"
    ]
  },
  {
    id: 'relationship-skills',
    title: 'Relationship Skills',
    questions: [
      "Are you effective at resolving conflicts?",
      "Can you build and maintain meaningful relationships?",
      "Do you communicate clearly and effectively?",
      "Can you inspire and guide others?"
    ]
  }
];
