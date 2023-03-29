import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AddUserComponent } from "./user/add-user/add-user.component";
import { EditUserComponent } from "./user/edit-user/edit-user.component";
import { ListUserComponent } from "./user/list-user/list-user.component";
import { AddProductComponent } from "./product/add-product/add-product.component";
import { EditProductComponent } from "./product/edit-product/edit-product.component";
import { ListProductComponent } from "./product/list-product/list-product.component";
import { AddTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent } from "./teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/add-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/add-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component";
import { EditTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent } from "./teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/edit-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/edit-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component";
import { ListTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent } from "./teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component";

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
        { path: 'add-user', component: AddUserComponent },
        { path: 'edit-user/:id', component: EditUserComponent },
        { path: 'list-user', component: ListUserComponent },
        { path: 'add-product', component: AddProductComponent },
        { path: 'edit-product/:id', component: EditProductComponent },
        { path: 'list-product', component: ListProductComponent },
        { path: 'add-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy', component: AddTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent },
        { path: 'edit-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/:id', component: EditTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent },
        { path: 'list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy', component: ListTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent },
    ]
  }
];
