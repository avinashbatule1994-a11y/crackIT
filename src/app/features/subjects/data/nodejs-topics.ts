import { Topic } from '../../../core/models/topic.model';

export const NODEJS_TOPICS: Topic[] = [
    {
        id: 1,
        title: 'Introduction',
        slug: 'introduction',
        description: 'What is Node.js?',
        duration: '15 min',
        order: 1,
        completed: false
    },
    {
        id: 2,
        title: 'Event Loop',
        slug: 'event-loop',
        description: 'Understanding Event Loop',
        duration: '20 min',
        order: 2,
        completed: false
    },
    {
        id: 3,
        title: 'Modules',
        slug: 'modules',
        description: 'Understanding Modules',
        duration: '25 min',
        order: 3,
        completed: false
    },
    {
        id: 4,
        title: 'File System',
        slug: 'file-system',
        description: 'Understanding File System',
        duration: '20 min',
        order: 4,
        completed: false
    },
    {
        id: 5,
        title: 'Networking',
        slug: 'networking',
        description: 'Understanding Networking',
        duration: '40 min',
        order: 5,
        completed: false
    }
]