import { Project } from 'src/app/models/project/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'UJ Bridge - Graduation Project',
    description: 'An app that helps students build organized learning paths with progress tracking and curated resources.',
    image: '',
    techs: ['Flutter', 'Dart', 'Firebase'],
    github: 'https://github.com/rayan411/GRADproject',
    category: 'software'
  },
  {
    title: 'Office Store',
    description: 'A complete office e-commerce system with Angular frontend and Node.js backend.',
    image: '',
    techs: ['Angular', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/rayan411/office-ecommerce-backend',
    category: 'software'
  },
  {
    title: 'Personal Portfolio',
    description: 'My personal website for showcasing my work and skills.',
    image: '',
    techs: ['Angular', 'Tailwind CSS'],
    github: 'https://github.com/rayan411/myPortfolio',
    category: 'software'
  },
  {
    title: 'Marketing Analytics (Power BI)',
    description: 'Dashboards for campaign performance, conversion rates, and cohort retention.',
    image: '',
    techs: ['Power BI', 'SQL', 'DAX'],
    category: 'data'
  },
  {
    title: 'Sentiment Analysis',
    description: 'NLP pipeline for classifying customer reviews and visualizing insights.',
    image: '',
    techs: ['Python', 'Pandas', 'NLTK'],
    category: 'data'
  }
];

export const DATA_PROJECTS: Project[] = PROJECTS.filter(p => p.category === 'data');
export const SOFTWARE_PROJECTS: Project[] = PROJECTS.filter(p => p.category === 'software');
