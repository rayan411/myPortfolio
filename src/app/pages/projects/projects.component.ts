import { Component } from '@angular/core';
import { Project } from 'src/app/models/project/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
      {
    title: 'UJ Bridge - Graduation Project',
    description: 'An app that helps students build organized learning paths with progress tracking and curated resources.',
    image: 'assets/images/grad-project.png',
    techs: ['Flutter', 'Dart', 'Firebase'],
    github: 'https://github.com/rayan411/GRADproject',
  },
  {
    title: 'Office Store',
    description: 'A complete office e-commerce system with Angular frontend and Node.js backend.',
    image: 'assets/images/office-store.png',
    techs: ['Angular', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/rayan411/office-ecommerce-backend',
  },
  {
    title: 'Personal Portfolio',
    description: 'My personal website for showcasing my work and skills.',
    image: 'assets/images/portfolio.png',
    techs: ['Angular', 'Tailwind CSS'],
    github: 'https://github.com/rayan411/myPortfolio',
  },

    // أضف المزيد حسب مشاريعك
  ];
}
