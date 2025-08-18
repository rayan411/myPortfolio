import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { Certificate } from './models/certificate.model';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  { path: '', component: MainComponent }, // Default route
  { path: 'main', component: MainComponent },
  { path: 'work', component: WorkComponent }, // Work
  { path: 'certifications', component: CertificationsComponent }, // Certifications
  { path: 'projects', component: ProjectsComponent },
  { path: 'certificate', component: CertificationsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', 
    anchorScrolling: 'enabled'        
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
