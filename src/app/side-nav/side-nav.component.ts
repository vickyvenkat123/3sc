import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  step:any = "step1";
  constructor() { }

  ngOnInit(): void {
  }
  // isLoggedIn(): boolean {
  //   if (localStorage.getItem('isLoggedIn') == 'true') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
