import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-lr-generate',
  templateUrl: './lr-generate.component.html',
  styleUrls: ['./lr-generate.component.css']
})
export class LrGenerateComponent implements OnInit {
  @ViewChild('content', {static: false}) content: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  
    
  }

