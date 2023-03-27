import { Routes } from "@angular/router";

import { AddStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent } from "./add-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/add-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.component";
import { EditStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent } from "./edit-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/edit-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.component";
import { ListStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent } from "./list-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/list-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.component";

export const StudentTeacherEntityyyyyyyyyyyyyyyyyyyyyRoutes: Routes = [
  {
    path: "add-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy",
    component: AddStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent,
  },
  {
    path: "edit-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/:id",
    component: EditStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent,
  },
  {
    path: "list-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy",
    component: ListStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent,
  },
];
