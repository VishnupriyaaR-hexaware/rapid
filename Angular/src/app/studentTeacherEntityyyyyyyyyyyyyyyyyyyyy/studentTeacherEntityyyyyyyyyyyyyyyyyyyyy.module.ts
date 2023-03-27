import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AddStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent } from "./add-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/add-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.component";
import { EditStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent } from "./edit-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/edit-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.component";
import { ListStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent } from "./list-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/list-studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StudentTeacherEntityyyyyyyyyyyyyyyyyyyyyRoutes } from "./studentTeacherEntityyyyyyyyyyyyyyyyyyyyy.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(StudentTeacherEntityyyyyyyyyyyyyyyyyyyyyRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent,
    EditStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent,
    ListStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyComponent,
  ],
})
export class StudentTeacherEntityyyyyyyyyyyyyyyyyyyyyModule {}
