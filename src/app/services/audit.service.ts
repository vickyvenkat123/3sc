import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuditService {
  
  
  

  constructor (public http : HttpClient) { }
  // getTableData(_any){
  //   return this.http.get('../assets/json/auditData.json');
  // }
  getAuditData() {
    return this.http.get('../assets/json/auditData.json');
  }
}
