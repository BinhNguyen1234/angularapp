import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { FolderComponent } from './folder/folder.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestComponent } from './test/test.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'project',
    pathMatch : "full",
    component: ProjectComponent,
    children: [
      {
        path: ':id',
        component: ProjectDetailComponent,
      },
    ],
  },
//   {
//     path: 'project/:projectId/folder/:folderId',
//     component: FolderComponent,
//   },
  {
    path: "test",
    component: TestComponent
  },
  {
    path: 'pricing',
    component: PricingComponent,
    title: 'Pricing',
  },
];
