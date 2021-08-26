import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http : HttpClient) { }
  getTableData(){
    return this.http.get('../assets/json/tableData.json');
  }
}
