import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';

import { EmployeeLoginPageComponent } from './emp-login-page/emp-login-page.component';
import { EmployeeRegistrationPageComponent } from './employee-registration/employee-registration.component';
import { AdminLoginbarComponent } from './admin-navbar/admin-navbar.component';
import { EmpNavbarComponent } from './emp-nav-bar/emp-nav-bar.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewAlltaskComponent } from './view-alltask/view-alltask.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { ViewMytaskComponent } from './view-mytask/view-mytask.component';
import { UpdateTaskPageComponent } from './task-updation/task-updation.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginPageComponent
  },
  {
    path:"employeeLogin",
    component:EmployeeLoginPageComponent
  },
  {
    path:"employeeRegistration",
    component:EmployeeRegistrationPageComponent
  },
  {
    path:"adminProfile",
    component:AdminProfileComponent
  },
  {
    path:"addTask",
    component:AddTaskComponent
  },
  {
    path:"viewallTasks",
    component:ViewAlltaskComponent
  },
  {
    path:"employeeProfile",
    component:EmployeeProfileComponent
  },
  {
    path:"viewmyTasks",
    component:ViewMytaskComponent
  },
  {
    path:"updateTaskstatus",
    component:UpdateTaskPageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    
    AdminLoginPageComponent,
    EmployeeLoginPageComponent,
    EmployeeRegistrationPageComponent,
    AdminLoginbarComponent,
    EmpNavbarComponent,
    AdminProfileComponent,
    AddTaskComponent,
    ViewAlltaskComponent,
    EmployeeProfileComponent,
    ViewMytaskComponent,
    UpdateTaskPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
