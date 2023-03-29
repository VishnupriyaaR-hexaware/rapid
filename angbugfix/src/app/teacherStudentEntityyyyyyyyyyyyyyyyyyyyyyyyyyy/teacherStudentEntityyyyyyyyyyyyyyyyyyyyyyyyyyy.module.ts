import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AddTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent } from "./add-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/add-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component";
import { EditTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent } from "./edit-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/edit-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component";
import { ListTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent } from "./list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyRoutes } from "./teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent,
    EditTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent,
    ListTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent,
  ],
})
export class TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyModule {}
