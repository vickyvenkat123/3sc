import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MastersService {

 
  constructor(private http : HttpClient) { }
  getMastersData() {
    return this.http.get('https://api.covid19api.com' ,{responseType: 'blob'});
  }
  // getMastersUpload(file: any) {
  //   const formData = new FormData(); 
  //     formData.append("file", file, file.name);
  //     return this.http.post(this.baseApiUrl, formData)
  // }
 

}
