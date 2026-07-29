import { Resource } from './resource.model';
import { Video } from './video.model';

// export interface Topic {
//   id: number;
//   title: string;
//   slug: string;
//   completed: boolean;
//   progress: number;
//   markdown: string;
//   examples: string[];
//   code: string;
//   interviewQuestions: string[];
//   scenarios: string[];
//   resources: Resource[];
//   videos: Video[];
// }

// export interface Topic {
//   id: number;
//   title: string;
//   slug: string;
//   completed: boolean;
//   progress: number;
//   markdown: string;
//   description: string;
//   examples: string[];
//   duration: string;
//   code: string;
//   interviewQuestions: string[];
//   scenarios: string[];
//   resources: Resource[];
//   videos: Video[];
//   order: number;
// }
export interface Topic {
  id: number;
  title: string;
  slug: string;
  description: string;
  duration: string;
  order: number;
  completed: boolean;
}
