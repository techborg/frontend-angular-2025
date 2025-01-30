import { Course, Lecture } from './types';

export const COURSES: Course[] = [
  {
    title: 'Angular v17',
    description: 'The best Angular course ever',
    id: '1',
    category: 'angular',
  },
  {
    title: 'NextJS',
    description: 'The best Next 14 course ever',
    id: '2',
    category: 'react',
  },
  {
    title: 'ReactJS',
    description: 'The best Next 14 course ever',
    id: '3',
    category: 'react',
  },
  {
    title: 'NodeJS',
    description: 'The best Next 14 course ever',
    id: '4',
    category: 'TypeScrpit',
  },
  {
    title: 'Python',
    description: 'The best Next 14 course ever',
    id: '5',
    category: '',
  },
  {
    title: 'Django',
    description: 'The best Next 14 course ever',
    id: '6',
    category: '',
  },
];

export const LECTURES: Lecture[] = [
  {
    title: 'Setting up environment',
    duration: '20 min',
    id: '1',
    videoUrl: '',
  },
  {
    title: 'Install nodejs',
    duration: '10 min',
    id: '2',
    videoUrl: '',
  },
];
