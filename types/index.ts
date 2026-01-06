export interface TimelineItem {
  id: string;
  title: string;
  institution: string;
  yearRange: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
}
