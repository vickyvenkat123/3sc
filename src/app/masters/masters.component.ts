import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {
  showLastShipping: boolean = true;
  showArchive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showLastShippingStatus(){
    this.showLastShipping = true;
    this.showArchive = false;
  }
  showArchiveStatus(){
    this.showLastShipping = false;
    this.showArchive = true;
  }
  // deliveryStatus(shippingType){
  //   switch (shippingType) {
  //     case 'lastShipping':
  //     this.showLastShipping = true;
  //     default:
  //     this.showArchive = true;
  //   }
  // }


}
