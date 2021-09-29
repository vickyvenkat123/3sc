import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {MatPaginator} from '@angular/material/paginator';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import {MatSort} from '@angular/material/sort';
//import { AuditService } from 'src/app/services/audit.service';
export interface PeriodicElement {
  Sno: number;
  position: number;
  weight: Date;
  symbol: string;
  Amount: number;
  Deviation: any;
  DevationAmount: number;
  Remarks: Text;
}
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
@Component({
  selector: 'app-audit-reports',
  templateUrl: './audit-reports.component.html',
  styleUrls: ['./audit-reports.component.css']
})
export class AuditReportsComponent implements OnInit {
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
  audit: any;
  constructor( ) { }

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
  
  auditData() {
    this.audit.getAuditData().subscribe(res=>{
      this.dataDocsSource = res;
      this.isLoadingResults=false;
    })
  }
  
 
}
