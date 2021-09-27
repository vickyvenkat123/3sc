import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuditService {
  
  
  

  constructor (public http : HttpClient) { }
<<<<<<< HEAD
  getAuditData() {
    return this.http.get('../assets/json/auditData.json');
  }
}
=======
  // getTableData(_any){
  //   return this.http.get('../assets/json/auditData.json');
  // }
  getAuditData() {
    return this.http.get('../assets/json/auditData.json');
  }
}
>>>>>>> 6efe80cfa8f90ccf7b13ed69da83bcb4fc803e68
