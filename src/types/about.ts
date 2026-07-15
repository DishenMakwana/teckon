export interface Pillar {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface ValueItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export interface Founder {
  name: string;
  role: string;
  image: string;
  alt: string;
  focus: string;
  note: string;
  phone: string;
}
