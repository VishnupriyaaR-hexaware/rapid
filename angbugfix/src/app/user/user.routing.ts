import { Routes } from "@angular/router";

import { AddUserComponent } from "./add-user/add-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { ListUserComponent } from "./list-user/list-user.component";

export const UserRoutes: Routes = [
  { path: "add-user", component: AddUserComponent },
  { path: "edit-user/:id", component: EditUserComponent },
  { path: "list-user", component: ListUserComponent },
];
