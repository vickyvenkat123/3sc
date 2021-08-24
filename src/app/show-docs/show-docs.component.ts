import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge } from 'rxjs';

@Component({
  selector: 'app-show-docs',
  templateUrl: './show-docs.component.html',
  styleUrls: ['./show-docs.component.css']
})
export class ShowDocsComponent implements OnInit {
  public filterDocTypes = [
    { value: 'Show Invoice', viewValue: 'Show Invoice' },
    { value: 'Show LR', viewValue: 'Show LR' },
    { value: 'Show POD', viewValue: 'Show POD' },
  ];
  docTitle: string = "Upload Invoice File";
 
  constructor() { }
  filterChanged(selectedValue: any) {

    switch(selectedValue){
     case selectedValue = "ShowInvoice":
     this.docTitle = 'Show Invoice';
     break;
   case selectedValue = "ShowLR":
     this.docTitle = 'Show LR';
     break;
   case selectedValue = "ShowPOD":
      this.docTitle = 'Show POD';
     break;
    }
   }
  ngOnInit(): void {
  }

}
