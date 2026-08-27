export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Philosophy {
  title: string;
  description: string;
  icon: 'leaf' | 'loom' | 'spark' | 'purpose';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  material: string;
  image: string;
  span: string;
  aspect: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  image: string;
}

export interface JourneyStep {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  avatar: string;
}