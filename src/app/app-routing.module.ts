import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { ArticlsComponent } from './pages/articls/articls.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'about', component: AboutMeComponent }, // About Me
  //{ path: 'services', component: ServicesComponent }, // Services
  { path: 'work', component: WorkComponent }, // Work
  //{ path: 'articles', component: ArticlsComponent }, // Articles
  { path: 'certifications', component: CertificationsComponent }, // Certifications
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
