
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  moduleSelected: any;

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.moduleSelected = this.route.snapshot.paramMap.get('id');
  }
  ngOnDestroy() {
   
  }
  navigateMasters(){
      this.router.navigate(['/masters']);
  } 
}
