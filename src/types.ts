export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: string;
  timeline: string;
  highlights: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'core' | 'languages' | 'frameworks' | 'cloud' | 'other';
  iconName: string;
  description: string;
  rating: number; // Scale out of 100 for premium visualization
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  bulletPoints: string[];
  tags: string[];
}
