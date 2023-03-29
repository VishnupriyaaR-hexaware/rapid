
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { AddUserComponent } from "./user/add-user/add-user.component";
import { EditUserComponent } from "./user/edit-user/edit-user.component";
import { ListUserComponent } from "./user/list-user/list-user.component";
import { AddProductComponent } from "./product/add-product/add-product.component";
import { EditProductComponent } from "./product/edit-product/edit-product.component";
import { ListProductComponent } from "./product/list-product/list-product.component";
import { AddTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent } from "./teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/add-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/add-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component";
import { EditTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent } from "./teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/edit-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/edit-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component";
import { ListTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent } from "./teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/list-teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy.component";

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
        AddUserComponent,
        EditUserComponent,
        ListUserComponent,
        AddProductComponent,
        EditProductComponent,
        ListProductComponent,
        AddTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent,
        EditTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent,
        ListTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
