import { Topic } from '../../../core/models/topic.model';

export const REACT_TOPICS: Topic[] = [
  {
    id: 1,
    title: 'Introduction',
    slug: 'introduction',
    description: 'What is React?',
    duration: '15 min',
    order: 1,
    completed: false
  },
  {
    id: 2,
    title: 'JSX',
    slug: 'jsx',
    description: 'Understanding JSX',
    duration: '20 min',
    order: 2,
    completed: false
  },
  {
    id: 3,
    title: 'Components',
    slug: 'components',
    description: 'Functional Components',
    duration: '25 min',
    order: 3,
    completed: false
  },
  {
    id: 4,
    title: 'Props',
    slug: 'props',
    description: 'Passing Data',
    duration: '20 min',
    order: 4,
    completed: false
  },
  {
    id: 5,
    title: 'Hooks',
    slug: 'hooks',
    description: 'useState & useEffect',
    duration: '40 min',
    order: 5,
    completed: false
  }
];