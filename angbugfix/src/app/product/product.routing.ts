import { Routes } from "@angular/router";

import { AddProductComponent } from "./add-product/add-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ListProductComponent } from "./list-product/list-product.component";

export const ProductRoutes: Routes = [
  { path: "add-product", component: AddProductComponent },
  { path: "edit-product/:id", component: EditProductComponent },
  { path: "list-product", component: ListProductComponent },
];
