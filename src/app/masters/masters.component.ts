import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {
  showLastShipping: boolean = true;
  showArchive: boolean = false;
 
 //Demo purpose only, Data might come from Api calls/service
  public counts = ["Sent by the seller","Delivering","Warehouse",
  "Post office","Received"];
  public orderStatus = "Warehouse"

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
