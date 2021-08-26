import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DataService } from '../services/data.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-show-docs',
  templateUrl: './show-docs.component.html',
  styleUrls: ['./show-docs.component.css']
})
export class ShowDocsComponent implements OnInit {
  displayedColumns: string[] = ['#', 'Invoice No', 'Invoice Date', 'Supplier Name', 'View File'];
 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public filterDocTypes = [
    { value: 'Show Invoice', viewValue: 'Show Invoice' },
    { value: 'Show LR', viewValue: 'Show LR' },
    { value: 'Show POD', viewValue: 'Show POD' },
  ];
  docTitle: string = "Upload Invoice File";
  dataDocsSource: any;
   constructor( public data : DataService) {}

   ngOnInit(){
     this.getData();
   }
   
   getData(){
     this.data.getTableData().subscribe(res=>{
       this.dataDocsSource = res;
     })
   }

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
}

