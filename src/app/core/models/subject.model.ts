// export interface Subject{
// questions: any;
// progress: any;

// id:number;

// title:string;

// icon:string;

// color:string;

// description:string;

// topics:number;

// }

export interface Subject {
  slug: any;
  id: number;
  title: string;
  icon: string;
  color: string;
  description: string;
  topics: number;
  questions: number;
  progress: number;
  route: string;
}