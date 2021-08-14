import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
constructor(private router: Router, @Inject(DOCUMENT) private _document,private renderer: Renderer2 ) {}
  ngOnInit(): void {
    //this._document.body.classList.add('bodybg-color');
    //this._document.body.style.background = '#fff';
    this.renderer.addClass(this._document.body, 'bodybg-color');
  }
  ngOnDestroy() {
    // remove the class form body tag
    //this._document.body.classList.('bodybg-color-ff');
    this.renderer.removeClass(this._document.body, 'bodybg-color');
  }
  navigatedashboard(){
    this.router.navigate(['/dashboard/masters']);

}
}

