import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  options: FormGroup;
  dataList = [
    {
      'doc_nu' : '1000',
      'name':'dnyaneshwar',
      'email':'dnyaneshwa@gmail.com',
      'image' :'../../../assets/images/train_image.jpg',
      'serialNo':'1292190',
      'loginDate':"12/12/2021",
      'logoutDate':"23/12/2021",
      'contactNo':"23/12/2021"
    }
  ]
  constructor(fb: FormBuilder
    , private router  : Router
    
    ) {
    this.options = fb.group({
      bottom: 0,
      fixed: false, 
      top: 0
    });
  }
  logoutf(){
    console.log("Logooout form the ");
    this.router.navigate(['/login'])
  }
  doctorList(){
    console.log("going to doctores");
    this.router.navigate(['/dashboard/doctors'])
  }
  

  
  ngOnInit(): void {
    console.log("Intiit called");
  }

}
