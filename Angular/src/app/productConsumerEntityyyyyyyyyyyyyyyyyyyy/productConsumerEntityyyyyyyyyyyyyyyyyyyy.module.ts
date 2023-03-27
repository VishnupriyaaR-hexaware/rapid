import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AddProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent } from "./add-productConsumerEntityyyyyyyyyyyyyyyyyyyy/add-productConsumerEntityyyyyyyyyyyyyyyyyyyy.component";
import { EditProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent } from "./edit-productConsumerEntityyyyyyyyyyyyyyyyyyyy/edit-productConsumerEntityyyyyyyyyyyyyyyyyyyy.component";
import { ListProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent } from "./list-productConsumerEntityyyyyyyyyyyyyyyyyyyy/list-productConsumerEntityyyyyyyyyyyyyyyyyyyy.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductConsumerEntityyyyyyyyyyyyyyyyyyyyRoutes } from "./productConsumerEntityyyyyyyyyyyyyyyyyyyy.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductConsumerEntityyyyyyyyyyyyyyyyyyyyRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent,
    EditProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent,
    ListProductConsumerEntityyyyyyyyyyyyyyyyyyyyComponent,
  ],
})
export class ProductConsumerEntityyyyyyyyyyyyyyyyyyyyModule {}
