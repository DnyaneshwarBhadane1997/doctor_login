import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser'

import { DoctorlistComponent } from './doctorlist.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    DoctorlistComponent
  ],
  declarations: [  DoctorlistComponent ],
  providers: [  ]
})
export class doctorListModule { 
  
}
