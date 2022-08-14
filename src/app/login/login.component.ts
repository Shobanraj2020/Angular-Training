import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  UserData: any = [];
  tempHolder: any = [];
  id: string = "";


  constructor(private fb: FormBuilder, private active: ActivatedRoute, private toast: ToastrService, private route: Router) { }
  loginForm: FormGroup;



  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

    //     this.UserData = window.history.state.user;  
    // console.log(this.UserData.UserName); 
    // console.log(this.loginForm.get('username')?.value)  


  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.UserData = JSON.parse(localStorage.getItem('form-data') || '{}');
    console.log(this.UserData);
    if (this.loginForm.get('username')?.value == this.UserData.UserName && this.loginForm.get('password')?.value == this.UserData.Password) {
      this.toast.success("Login success");

      this.route.navigate(['home-component', this.id = "hello"])

    } else {
      this.toast.error("Login failed due to wrong credentials !");

    }
  }



}
