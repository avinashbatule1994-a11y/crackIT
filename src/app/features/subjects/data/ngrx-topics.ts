import {Topic} from '../../../core/models/topic.model';

export const NGRX_TOPICS: Topic[] = [
    {
        id: 1,
        title: 'Introduction',
        slug: 'introduction',
        description: 'What is NGRX?',
        duration: '15 min',
        order: 1,
        completed: false
    },
    {
        id: 2,
        title: 'Store',
        slug: 'store',
        description: 'Understanding Store',

        duration: '20 min',
        order: 2,
        completed: false  
    },
    {
        id: 3,
        title: 'Actions',
        slug: 'actions',
        description: 'Understanding Actions',
        duration: '25 min',
        order: 3,
        completed: false    
    },
    {
        id: 4,
        title: 'Reducers',
        slug: 'reducers',
        description: 'Understanding Reducers',
        duration: '20 min',
        order: 4,
        completed: false    
    },
    {
        id: 5,
        title: 'Effects',
        slug: 'effects',
        description: 'Understanding Effects',
        duration: '40 min', 
        order: 5,
        completed: false    
    }
]