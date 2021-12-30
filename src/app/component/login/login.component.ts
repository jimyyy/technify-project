import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupform:FormGroup;
  alert:boolean=false;

  constructor(private formBuilder:FormBuilder,) { }

  ngOnInit(): void {
    this.signupform=this.formBuilder.group({
      
      firstName :[,[Validators.required,Validators.minLength(3)]],
      lastName :[,[Validators.required,Validators.minLength(5)]],
      email :[,[Validators.required,Validators.email]],
      password:[,[Validators.required,Validators.minLength(8)]]
     
     
      
    })
  }

  signup(c:any){
    console.log("user",c)
    this.alert=true;
    this.signupform.reset({})
   
  } 

  closealert(){
    this.alert=false;
  }
  

}
