import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AddUserComponent } from "./add-user/add-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { ListUserComponent } from "./list-user/list-user.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserRoutes } from "./user.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AddUserComponent, EditUserComponent, ListUserComponent],
})
export class UserModule {}
