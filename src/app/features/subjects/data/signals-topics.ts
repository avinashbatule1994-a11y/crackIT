import {Topic} from '../../../core/models/topic.model';;

export const SIGNALS_TOPICS: Topic[] = [
    {
        id: 1,
        title: 'Introduction',
        slug: 'introduction',
        description: 'What is Signals?',
        duration: '15 min',
        order: 1,
        completed: false
    },
    {
        id: 2,
        title: 'Signals Basics',

        slug: 'signals-basics',
        description: 'Understanding Signals Basics',
        duration: '20 min',
        order: 2,
        completed: false
    },
    {
        id: 3,
        title: 'Signals Advanced',
        slug: 'signals-advanced',
        description: 'Understanding Signals Advanced',
        duration: '25 min',
        order: 3,
        completed: false
    },
    {
        id: 4,
        title: 'Signals in Angular',
        slug: 'signals-in-angular',
        description: 'Understanding Signals in Angular',
        duration: '20 min',
        order: 4,
        completed: false
    },
    {
        id: 5,
        title: 'Signals Best Practices',
        slug: 'signals-best-practices',
        description: 'Understanding Signals Best Practices',
        duration: '15 min',
        order: 5,
        completed: false
    }
]