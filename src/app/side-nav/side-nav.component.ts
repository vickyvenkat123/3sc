import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  step:any = "step2";
  constructor(private _ds : DataService) { }
  showLrgenerateMenu : boolean=false;
  ngOnInit(): void {
    this._ds.profileObs$.subscribe(res =>{
      this.showLrgenerateMenu =res;

    })
  }
  // isLoggedIn(): boolean {
  //   if (localStorage.getItem('isLoggedIn') == 'true') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}

