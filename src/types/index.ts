export interface Project {
  id: string;
  index: string;
  category: string;
  name: string;
  description: string;
  techStack: string[];
  image?: string;
  href?: string;
  repo?: string;
  badge?: string;
}
