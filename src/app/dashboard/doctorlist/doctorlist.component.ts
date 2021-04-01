import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})

export class DoctorlistComponent implements OnInit {
  dataList:any = [];
  constructor() {
    this.dataList = [
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
   }

  ngOnInit(): void {
    
  }

}
