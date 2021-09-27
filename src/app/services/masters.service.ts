<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
=======
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
>>>>>>> 6efe80cfa8f90ccf7b13ed69da83bcb4fc803e68

@Injectable({
  providedIn: 'root'
})
export class MastersService {

<<<<<<< HEAD
  constructor(public http : HttpClient) { }
  getMastersData(){
    return this.http.get('https://api.covid19api.com' ,{responseType: 'blob'});
  }
=======
 
  constructor(private http : HttpClient) { }
  getMastersData() {
    return this.http.get('https://api.covid19api.com' ,{responseType: 'blob'});
  }
  // getMastersUpload(file: any) {
  //   const formData = new FormData(); 
  //     formData.append("file", file, file.name);
  //     return this.http.post(this.baseApiUrl, formData)
  // }
 

>>>>>>> 6efe80cfa8f90ccf7b13ed69da83bcb4fc803e68
}
