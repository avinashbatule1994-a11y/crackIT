import { Subject } from '../../../core/models/subject.model';

export const SUBJECTS: Subject[] = [
  {
      id: 1,
      title: 'Angular',
      icon: 'pi pi-prime',
      color: '#dd0031',
      description: 'Complete Angular interview preparation from basics to advanced.',
      topics: 52,
      questions: 320,
      progress: 80,
      route: '/subjects/angular',
      slug: undefined
  },
  {
      id: 2,
      title: 'JavaScript',
      icon: 'pi pi-code',
      color: '#f7df1e',
      description: 'JavaScript fundamentals, ES6+, DOM, async programming and interview questions.',
      topics: 48,
      questions: 410,
      progress: 70,
      route: '/subjects/javascript',
      slug: undefined
  },
  {
      id: 3,
      title: 'Node.js',
      icon: 'pi pi-server',
      color: '#4caf50',
      description: 'Node.js concepts, Express, APIs, authentication and backend interview questions.',
      topics: 32,
      questions: 180,
      progress: 60,
      route: '/subjects/nodejs',
      slug: undefined
  },
  {
      id: 4,
      title: 'TypeScript',
      icon: 'pi pi-microsoft',
      color: '#3178c6',
      description: 'TypeScript basics, advanced types, generics, decorators and best practices.',
      topics: 35,
      questions: 220,
      progress: 65,
      route: '/subjects/typescript',
      slug: undefined
  },
  {
      id: 5,
      title: 'HTML',
      icon: 'pi pi-code',
      color: '#e34f26',
      description: 'HTML5 elements, semantic tags, accessibility and interview questions.',
      topics: 20,
      questions: 90,
      progress: 90,
      route: '/subjects/html',
      slug: undefined
  },
  {
      id: 6,
      title: 'CSS',
      icon: 'pi pi-palette',
      color: '#2965f1',
      description: 'CSS3, Flexbox, Grid, animations, responsive design and interview questions.',
      topics: 25,
      questions: 110,
      progress: 85,
      route: '/subjects/css',
      slug: undefined
  },
  {
      id: 7,
      title: 'RxJS',
      icon: 'pi pi-sync',
      color: '#b7178c',
      description: 'Observables, operators, Subjects, error handling and RxJS interview preparation.',
      topics: 30,
      questions: 150,
      progress: 55,
      route: '/subjects/rxjs',
      slug: undefined
  },
  {
      id: 8,
      title: 'NgRx',
      icon: 'pi pi-database',
      color: '#ba2bd2',
      description: 'State management with Store, Actions, Reducers, Effects and Selectors.',
      topics: 22,
      questions: 120,
      progress: 40,
      route: '/subjects/ngrx',
      slug: undefined
  }
];