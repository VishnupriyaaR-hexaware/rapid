import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AddProductComponent } from "./add-product/add-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ListProductComponent } from "./list-product/list-product.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductRoutes } from "./product.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddProductComponent,
    EditProductComponent,
    ListProductComponent,
  ],
})
export class ProductModule {}
