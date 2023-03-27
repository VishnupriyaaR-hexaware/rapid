import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AddProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent } from "./productConsumerEntityyyyyyyyyyyyyyyyyyyy/add-productConsumerEntityyyyyyyyyyyyyyyyyyyy/add-productConsumerEntityyyyyyyyyyyyyyyyyyyy.component";
import { EditProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent } from "./productConsumerEntityyyyyyyyyyyyyyyyyyyy/edit-productConsumerEntityyyyyyyyyyyyyyyyyyyy/edit-productConsumerEntityyyyyyyyyyyyyyyyyyyy.component";
import { ListProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent } from "./productConsumerEntityyyyyyyyyyyyyyyyyyyy/list-productConsumerEntityyyyyyyyyyyyyyyyyyyy/list-productConsumerEntityyyyyyyyyyyyyyyyyyyy.component";
import { AddStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent } from "./studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/add-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/add-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.component";
import { EditStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent } from "./studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/edit-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/edit-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.component";
import { ListStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent } from "./studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/list-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/list-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
        { path: 'add-productConsumerEntityyyyyyyyyyyyyyyyyyyy', component: AddProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent },
        { path: 'edit-productConsumerEntityyyyyyyyyyyyyyyyyyyy/:id', component: EditProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent },
        { path: 'list-productConsumerEntityyyyyyyyyyyyyyyyyyyy', component: ListProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent },
        { path: 'add-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy', component: AddStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent },
        { path: 'edit-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/:id', component: EditStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent },
        { path: 'list-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy', component: ListStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent },
    ]
  }
];
