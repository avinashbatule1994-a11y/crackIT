// export interface Subject {
//   id: number;
//   title: string;
//   slug: string;
//   description: string;
//   icon: string;
//   color: string;
//   topics: number;
//   questions: number;
//   progress: number;
//   level: 'Beginner' | 'Intermediate' | 'Advanced';
// }

// export interface Subject {
//   slug: string;
//   id: number;
//   title: string;
//   icon: string;
//   color: string;
//   description: string;
//   topics: number;
//   questions: number;
//   progress: number;
//   route: string;
// }

export interface Subject {
  id: number;
  title: string;
  slug: string;
  icon: string;
  color: string;
  background: string;
  description: string;
  topics: number;
  questions: number;
  progress: number;
  route: string;
}