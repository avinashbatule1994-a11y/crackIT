import { Topic } from '../../../core/models/topic.model';

export const JAVASCRIPT_TOPICS: Topic[] = [
  {
    id: 1,
    title: 'Introduction',
    slug: 'introduction',
    description: 'JavaScript Basics',
    duration: '15 min',
    order: 1,
    completed: false
  },
  {
    id: 2,
    title: 'Variables',
    slug: 'variables',
    description: 'var, let, const',
    duration: '20 min',
    order: 2,
    completed: false
  },
  {
    id: 3,
    title: 'Data Types',
    slug: 'data-types',
    description: 'Primitive & Reference Types',
    duration: '20 min',
    order: 3,
    completed: false
  },
  {
    id: 4,
    title: 'Functions',
    slug: 'functions',
    description: 'Functions & Arrow Functions',
    duration: '30 min',
    order: 4,
    completed: false
  },
  {
    id: 5,
    title: 'Closures',
    slug: 'closures',
    description: 'Closure Explained',
    duration: '30 min',
    order: 5,
    completed: false
  }
];