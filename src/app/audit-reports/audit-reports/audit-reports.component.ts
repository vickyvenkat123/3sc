import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {MatPaginator} from '@angular/material/paginator';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import {MatSort} from '@angular/material/sort';
import { AuditService } from 'src/app/services/audit.service';
export interface PeriodicElement {
  Sno: number;
  position: number;
  weight: Date;
  symbol: string;
  Amount: number;
  Deviation: any;
<<<<<<< HEAD
  DevationAmount: number;
  Remarks: Text;
}
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
=======
  DAmount: number;
  Remarks: Text;
}
>>>>>>> 6efe80cfa8f90ccf7b13ed69da83bcb4fc803e68
@Component({
  selector: 'app-audit-reports',
  templateUrl: './audit-reports.component.html',
  styleUrls: ['./audit-reports.component.css']
})
export class AuditReportsComponent implements OnInit {
<<<<<<< HEAD
  // displayedColumns: string[] = ['#', 'Invoice No', 'Invoice Date', 'Carrier', 'Invoice Amount', 'Deviation','Deviation Amount', 'Remarks','Action'];
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  // data: any;
  // dataDocsSource: any;
  // isLoadingResults= true;
  // auditForm: any;
  // formBuilder: any;
  displayedColumns: string[] = ['#', 'Invoice No', 'Invoice Date', 'Carrier', 'Invoice Amount','Deviation','Deviation Amount', 'Remarks','Action'];
 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataDocsSource: Object;
  isLoadingResults: boolean;
  constructor( public audit : AuditService) { }

  ngOnInit(): void {
 this.auditData();
// this.auditForm = this.formBuilder.group({
//   Invoiceno: [''],
//   carrier: [''],
//   invoicedatefrom: [''],
//   invoicedateto: [''],
//   deviation: ['']
// });

  }
  
=======
  displayedColumns: string[] = ['#', 'Invoice No', 'Invoice Date', 'Carrier', 'Invoice Amount', 'Deviation','Deviation Amount', 'Remarks','Action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  data: any;
  dataDocsSource: any;
  isLoadingResults= true;
  constructor( public audit : AuditService) { }

  ngOnInit(): void {
this.auditData();
  }
>>>>>>> 6efe80cfa8f90ccf7b13ed69da83bcb4fc803e68
  auditData() {
    this.audit.getAuditData().subscribe(res=>{
      this.dataDocsSource = res;
      this.isLoadingResults=false;
    })
  }
<<<<<<< HEAD
  
=======
>>>>>>> 6efe80cfa8f90ccf7b13ed69da83bcb4fc803e68
 
}
