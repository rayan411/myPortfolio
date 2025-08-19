import { Component } from '@angular/core';
import { Project } from 'src/app/models/project/project.model';
import { DATA_PROJECTS, SOFTWARE_PROJECTS } from 'src/app/data/projects.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  pageTitle = 'مشاريعي';
  pageSubtitle = 'Data & Software Projects';
  dataProjects: Project[] = DATA_PROJECTS;
  softwareProjects: Project[] = SOFTWARE_PROJECTS;

  constructor(private router: Router) {}

  goHome() {
    this.router.navigateByUrl('/');
  }

imgLoading: { [key: string]: boolean } = {};

ngOnInit() {
  // تحديد الصور التي يتم تحميلها الآن
  [...this.dataProjects, ...this.softwareProjects].forEach(project => {
    this.imgLoading[project.title] = true;
  });
}

onImageLoad(title: string): void {
  // عند اكتمال تحميل الصورة
  this.imgLoading[title] = false;
}

}
