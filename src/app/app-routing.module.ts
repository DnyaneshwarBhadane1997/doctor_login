import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { DoctorlistComponent} from './dashboard/doctorlist/doctorlist.component';
const routes: Routes = [{
  path: '',
  component: LoginComponent,
  data: {
    title: 'Login Page'
  }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'dashboard'
    },
    children:[{
      path:"doctors",
      component : DoctorlistComponent,
      data: {
        title: 'doctors'
      }
    }]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
