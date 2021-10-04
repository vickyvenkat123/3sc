import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-choosemodule',
  templateUrl: './choosemodule.component.html',
  styleUrls: ['./choosemodule.component.css']
})
export class ChoosemoduleComponent implements OnInit {
  chooseModuleForm = new FormGroup({})

  submitted = false;
  chooseModule: any = '';

  constructor(private router: Router, private _ds: DataService) { }

  ngOnInit(): void {

    this.chooseModuleForm = new FormGroup({
      selectedMenu: new FormControl('', [Validators.required])
    });

  }

  mechooseModuleMenu: any = [
    { name: 'Domestic', value: 1 },
    { name: 'Export', value: 2 }
  ];

  changeClient(e: any) {
    // alert(e.target.value);
  }
  // convenience getter for easy access to form fields
  get f() { return this.chooseModuleForm.controls; }

  onSubmit() {
    if (this.chooseModule === "2") {
      this._ds.profileObs$.next(false)
      this.router.navigate(['dashboard', 'export']);
    }
    else {
      this.router.navigate(['dashboard', 'domestic']);
    }
  }
}
