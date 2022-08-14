import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private route:Router,private toast:ToastrService) { }
  RegisterForm:FormGroup;
  Registration:boolean=false;
  show:boolean = false;
  Password:string = 'password';
  Used_user:boolean=false;
  Uname:string="";
  pwd:string="";
  formvalues:any;
 
  User_data:any = [];
  ID:number=0;

  ngOnInit(): void {
    this.RegisterForm = this.fb.group({
      UserName:['',[Validators.required]],
      Password:['',[Validators.required]],
      Cpassword:['',[Validators.required]]
    },{validator : this.PasswordValidator});
  }

  PasswordValidator(control:AbstractControl):{[key:string]:boolean}|null{
    const password = control.get('Password');
    const ConfirmPassword = control.get('Cpassword');
    return password && ConfirmPassword && password.value != ConfirmPassword.value?
    {'misMatch':true}:null;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.RegisterForm.controls;
  }

  toggleShow(){
    this.show = !this.show;
    if(this.show){
      this.Password = 'text';
    }else{
      this.Password = 'password';
    }
  }

  onRegister( ):any{
    let count:number=0;
    localStorage.setItem('form-data', JSON.stringify(this.RegisterForm.value));
    this.toast.success("Registration success");
    this.route.navigate(['/login-component']);    
  }  

}
function key(key: any, arg1: { id: number; Name: string; Password: string; }) {
  throw new Error('Function not implemented.');
}









// if(this.User_data){
    //   for(let values of this.User_data){
    //     if(this.RegisterForm.get('UserName')?.value != values.Name){
                     
    //     }else if(this.RegisterForm.get('UserName')?.value == values.Name){
    //       count = count+1;             
    //     }       
    //    }
    //    if(count>0){
    //     console.log("Old value",count);
    //     this.toast.warning("Username Aready exists");   
    //     this.Used_user = true;
    //     this.Registration = false;
    //   }else{
    //     console.log("New value");
    //     // this.ID = this.ID+1;
    //     // console.log(this.RegisterForm.value);
    //     // console.log(this.RegisterForm.get('UserName')?.value);
    //     // this.Uname = this.RegisterForm.get('UserName')?.value;
    //     // this.pwd = this.RegisterForm.get('Password')?.value;
    //     // this.User_data.push({id:this.ID,Name:this.Uname,Password:this.pwd});
    //     this.toast.success("Registration success");
    //   //   this.formvalues = this.RegisterForm.value;
    //   //  this.route.navigate(['/login-component'],{state:{'user':this.formvalues}});
      
       
    //     console.log(this.User_data);
    //     this.Used_user = false;
    //     this.Registration = true;
    //   }

    // }else{
    //   //       this.ID = this.ID+1;
    //   // console.log(this.RegisterForm.value);
    //   // console.log(this.RegisterForm.get('UserName')?.value);
    //   // this.Uname = this.RegisterForm.get('UserName')?.value;
    //   // this.pwd = this.RegisterForm.get('Password')?.value;
    //   // this.User_data.push({id:this.ID,Name:this.Uname,Password:this.pwd});
    //   // console.log(this.User_data.Name);
    //   this.toast.success("Registration success");
    //   // this.route.navigate(['/login-component'],{state:{'user':this.User_data}})  
    //   localStorage.setItem('form-data', JSON.stringify(this.RegisterForm.value));      
    //   console.log(this.User_data);     
    //   this.Used_user = false;    
    //   this.Registration = true;

    // }
    

 
      // this.route.navigate(['/','login-component']);