export interface ExperienceItem {
    text: string | React.ReactNode;
  }

export interface Experience {
    title: string;
    timeframe: string;
    company: string;
    experienceItems: ExperienceItem[];
    children: React.ReactNode;
  }