import {Topic} from '../../../core/models/topic.model';

export const 
SQL_TOPICS: Topic[] = [
    {
        id: 1,
        title: 'Introduction',
        slug: 'introduction',
        description: 'What is SQL?',
        duration: '15 min',
        order: 1,
        completed: false
    },
    {
        id: 2,
        title: 'SQL Basics',
        slug: 'sql-basics',
        description: 'Understanding SQL Basics',
        duration: '20 min',
        order: 2,
        completed: false
    },
    {
        id: 3,
        title: 'SQL Advanced',
        slug: 'sql-advanced',
        description: 'Understanding SQL Advanced',
        duration: '25 min',
        order: 3,
        completed: false
    }
];