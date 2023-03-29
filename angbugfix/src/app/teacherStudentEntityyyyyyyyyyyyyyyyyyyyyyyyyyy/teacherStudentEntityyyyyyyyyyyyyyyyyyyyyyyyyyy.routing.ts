import { Routes } from "@angular/router";

import { AddTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent } from "./add-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/add-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component";
import { EditTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent } from "./edit-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/edit-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component";
import { ListTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent } from "./list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component";

export const TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyRoutes: Routes = [
  {
    path: "add-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy",
    component: AddTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent,
  },
  {
    path: "edit-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/:id",
    component: EditTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent,
  },
  {
    path: "list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy",
    component: ListTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent,
  },
];
