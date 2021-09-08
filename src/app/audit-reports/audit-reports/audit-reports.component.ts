import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { AuditService } from 'src/app/services/audit.service';
export interface PeriodicElement {
  Sno: number;
  position: number;
  weight: Date;
  symbol: string;
  Amount: number;
  Deviation: any;
  DAmount: number;
  Remarks: Text;
}
@Component({
  selector: 'app-audit-reports',
  templateUrl: './audit-reports.component.html',
  styleUrls: ['./audit-reports.component.css']
})
export class AuditReportsComponent implements OnInit {
  displayedColumns: string[] = ['#', 'Invoice No', 'Invoice Date', 'Carrier', 'Invoice Amount', 'Deviation','Deviation Amount', 'Remarks','Action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  data: any;
  dataDocsSource: any;
  constructor( public audit : AuditService) { }

  ngOnInit(): void {
this.auditData();
  }
  auditData() {
    this.audit.getAuditData().subscribe(res=>{
      this.dataDocsSource = res;
    })
  }
 
}
