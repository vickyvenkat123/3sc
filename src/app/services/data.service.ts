import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 

   profileObs$: BehaviorSubject<any> = new BehaviorSubject<any>(true);
   private messageSource = new BehaviorSubject('');
   currentMessage = this.messageSource.asObservable();

  constructor(public http : HttpClient) { }
  getTableDataView(){
    return this.http.get('https://api.covid19api.com',{responseType: 'blob'});
  }
  getTableData(){
    return this.http.get('../assets/json/tableData.json');
  }
  changeMessage(num: any) {
    this.messageSource.next(num)
    localStorage.setItem('type',num);
  }

}

