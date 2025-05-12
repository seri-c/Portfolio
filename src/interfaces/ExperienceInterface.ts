export interface ExperienceItem {
    text: string;
  }

export interface Experience {
    title: string;
    timeframe: string;
    company: string;
    experienceItems: ExperienceItem[];
    children: React.ReactNode;
  }