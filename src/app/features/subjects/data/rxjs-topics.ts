import {Topic} from '../../../core/models/topic.model'; 

export const RXJS_TOPICS: Topic[] = [
    {
        id: 1,

        title: 'Introduction',
        slug: 'introduction',
        description: 'What is RxJS?',   
        duration: '15 min',
        order: 1,
        completed: false
    },
    {
        id: 2,
        title: 'Observables',

        slug: 'observables',
        description: 'Understanding Observables',
        duration: '20 min',


        order: 2,
        completed: false
    },  
    {
        id: 3,
        title: 'Operators',
        slug: 'operators',
        description: 'Understanding Operators',
        duration: '25 min',

        order: 3,
        completed: false
    },
    {   
    id: 4,
        title: 'Subjects',
        slug: 'subjects',


        description: 'Understanding Subjects',
        duration: '20 min',
        order: 4,
        completed: false
    },
    {
        id: 5,
        title: 'Schedulers',
        slug: 'schedulers',
        description: 'Understanding Schedulers',
        duration: '40 min',
        order: 5,
        completed: false
    },
]