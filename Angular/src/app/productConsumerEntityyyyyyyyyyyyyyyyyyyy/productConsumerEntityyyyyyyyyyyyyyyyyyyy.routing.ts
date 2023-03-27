import { Routes } from "@angular/router";

import { AddProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent } from "./add-productConsumerEntityyyyyyyyyyyyyyyyyyyy/add-productConsumerEntityyyyyyyyyyyyyyyyyyyy.component";
import { EditProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent } from "./edit-productConsumerEntityyyyyyyyyyyyyyyyyyyy/edit-productConsumerEntityyyyyyyyyyyyyyyyyyyy.component";
import { ListProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent } from "./list-productConsumerEntityyyyyyyyyyyyyyyyyyyy/list-productConsumerEntityyyyyyyyyyyyyyyyyyyy.component";

export const ProductConsumerEntityyyyyyyyyyyyyyyyyyyyRoutes: Routes = [
  {
    path: "add-productConsumerEntityyyyyyyyyyyyyyyyyyyy",
    component: AddProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent,
  },
  {
    path: "edit-productConsumerEntityyyyyyyyyyyyyyyyyyyy/:id",
    component: EditProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent,
  },
  {
    path: "list-productConsumerEntityyyyyyyyyyyyyyyyyyyy",
    component: ListProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent,
  },
];
