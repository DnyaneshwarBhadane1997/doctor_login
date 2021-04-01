import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormControl
} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  registerFormSubmitted = false;
  
  
  planeDetail: any ;
  registerBtn: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router  : Router
  ) { 
    this.loginForm = this.formBuilder.group({
      name: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("User id passwword is checked");
    this.router.navigate(['/dashboard']);

  }
  get f() {
    return this.loginForm.controls;
  }
}
