import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { ArticlsComponent } from './pages/articls/articls.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MainComponent } from './main/main.component';
import { Certificate } from './models/certificate.model';
const routes: Routes = [
  { path: '', component: MainComponent }, // Default route
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutMeComponent }, // About Me
  { path: 'work', component: WorkComponent }, // Work
  { path: 'certifications', component: CertificationsComponent }, // Certifications
  { path: 'projects', component: ProjectsComponent },
  { path: 'certificate', component: CertificationsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
