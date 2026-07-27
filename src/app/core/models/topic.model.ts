import { Resource } from './resource.model';
import { Video } from './video.model';

export interface Topic {
  id: number;
  title: string;
  slug: string;
  completed: boolean;
  progress: number;
  markdown: string;
  examples: string[];
  code: string;
  interviewQuestions: string[];
  scenarios: string[];
  resources: Resource[];
  videos: Video[];
}