import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { ArticlsComponent } from './pages/articls/articls.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'work', component: WorkComponent },
  { path: 'articles', component: ArticlsComponent },
  { path: 'certifications', component: CertificationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
