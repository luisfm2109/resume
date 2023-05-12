import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitsComponent } from './commits/commits.component';

import { FrontPageComponent } from './front-page/front-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'resume', component: FrontPageComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'commits', component: CommitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
