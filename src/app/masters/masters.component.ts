import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {
  showLastShipping: boolean = true;
  showArchive: boolean = false;
  lat = 51.678418;
  lng = 7.809007;
  constructor() { }

  ngOnInit(): void {
  }
  onChoseLocation(event){
    console.log(event);
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
