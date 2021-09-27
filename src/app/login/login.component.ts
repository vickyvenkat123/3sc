import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginReactiveForm = new FormGroup({})

  submitted = false;

  constructor( private router : Router) { }

  menus:any=[{name:'Vendor',value:1,imgname:"vendor2"},
  {name:'Control Tower',value:2,imgname:"tower"},
  {name:'Client Finanace',value:3,imgname:"finance"},
  {name:'Client Management',value:4,imgname:"management2"}];
  
  
  activeLeftMenu:any=1;
  

  // msg:string="Please Choose the Any Option";
  msg:string="Vendor";
  selectedValue : any=1;


  ngOnInit(): void {
    // alert(5);
    this.loginReactiveForm = new FormGroup({
      activaDropdownMenu: new FormControl(''),
      // activaDropdownMenu: new FormControl('', [Validators.required]), 
      email: new FormControl('', [Validators.required,  Validators.email]),
      pass: new FormControl('', [Validators.required])

            
      // country: new FormControl()
    });
  }
  
  logIn(){
    this.router.navigate(['chooseModule']);
  }


  // convenience getter for easy access to form fields
  get f() { return this.loginReactiveForm.controls; }


      // onSubmit() {
     //   console.log(this.loginReactiveForm.value);
    // }
    
    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginReactiveForm.invalid) {
          return;
      }

      let email = this.loginReactiveForm.value.email;
      let pass = this.loginReactiveForm.value.pass;
      // alert(this.msg);
      
      if(email == 'mk@gmail.com' && pass === '1'){
       // alert('Valid')
        this.router.navigate(['chooseModule']);
      }else{
        alert('Not Valid');
      }
      // display form values on success
     // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginReactiveForm.value, null, 4));
  }

  
  changeMenuLabel(id: number){
    this.activeLeftMenu=id;

    if(id == 1){
      this.msg='Vendor';
    }else if(id == 2){
      this.msg='Control Tower';
    }else if(id == 3){
      this.msg='Client Finanace';
    }else if(id == 4){
      this.msg='Client Management';
    }
    
  }

  changeClient(){
    // alert(e.target.value);
    let id =this.selectedValue;
    this.changeMenuLabel(id);

  }

  forGotPassword(){
    alert(1);
  }













}