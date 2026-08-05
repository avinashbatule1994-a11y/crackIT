import {Topic} from '../../../core/models/topic.model';

export const GIT_TOPICS: Topic[] = [
    {
        id: 1,
        title: 'Introduction',
        slug: 'introduction',
        description: 'What is Git?',
        duration: '15 min',
        order: 1,
        completed: false
    },
    {
        id: 2,
        title: 'Git Basics',
        slug: 'git-basics',
        description: 'Git Basics Commands',
        duration: '20 min',
        order: 2,
        completed: false
    }
]   