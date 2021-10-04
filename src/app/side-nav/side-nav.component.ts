import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  step:any = "step2";
  @Input() item;
  constructor(private _ds : DataService,private router : Router) { }
  showLrgenerateMenu : boolean=false;
  ngOnInit(): void {
    this._ds.profileObs$.subscribe(res =>{
      this.showLrgenerateMenu =res;

    })
  }
  navigateShowDocs(){
    this.router.navigate(['/dashboard/'+this.item+'/show-docs', this.item]);
  }

}

