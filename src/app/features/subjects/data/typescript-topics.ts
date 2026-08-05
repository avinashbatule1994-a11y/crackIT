import {Topic} from '../../../core/models/topic.model';

export const TYPESCRIPT_TOPICS: Topic[] = [
    {
        id: 1,
        title: 'Introduction',
        slug: 'introduction',
        description: 'What is TypeScript?',
        duration: '15 min',
        order: 1,
        completed: false

    },
    {
        id: 2,
        title: 'TypeScript Basics',
        slug: 'typescript-basics',
        description: 'Understanding TypeScript Basics',
        duration: '20 min',
        order: 2,
        completed: false
    },
    {
        id: 3,
        title: 'TypeScript Advanced',
        slug: 'typescript-advanced',
        description: 'Understanding TypeScript Advanced',
        duration: '25 min',
        order: 3,
        completed: false
    }
];