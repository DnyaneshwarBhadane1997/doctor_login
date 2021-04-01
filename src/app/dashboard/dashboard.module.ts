import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard.component';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,BrowserModule,
    DashboardRoutingModule
  ],
  declarations: [ DashboardComponent, DoctorlistComponent ],
  providers: [  ]
})
export class DashboardModule { }
