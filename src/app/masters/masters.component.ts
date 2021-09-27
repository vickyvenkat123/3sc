import { Component, OnInit } from '@angular/core';
import { MastersService } from '../services/masters.service';
import * as fileSaver from 'file-saver';
import { VERSION } from '@angular/flex-layout';
import { HttpResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {
  showLastShipping: boolean = true;
  showArchive: boolean = false;
 
 //Demo purpose only, Data might come from Api calls/service
  public counts = ["Sent by the seller","Delivering","Warehouse",
  "Post office","Received"];
  public orderStatus = "Warehouse"
  data: Blob;
  version = VERSION;
    base64File: string = null;
    filename: string = null;
  currentFileUpload: any;
  selectedFiles: any;
  globalService: any;
  myInputVariable: any;
  uploadFileForm= new FormGroup({
    fileName:new FormControl(null)
  })

  upload(file:any){
    console.log(file)
  }
  constructor(private masters : MastersService) { }

  ngOnInit(): void {
    }
  selectFile(event: any) {
    this.selectedFiles = event.target.files;
}
  uploadFile() {
<<<<<<< HEAD
    this.currentFileUpload = this.selectedFiles.item();
=======
    this.currentFileUpload = this.selectedFiles.item(0);
>>>>>>> 6efe80cfa8f90ccf7b13ed69da83bcb4fc803e68
    this.globalService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
        if (event instanceof HttpResponse) {
            this.loadDocumentInfo();
            this.showNotification('Upload Attachment', 'File Uploaded Successfully', 'success');
            this.myInputVariable.nativeElement.value = "";
        }
    });
    this.selectedFiles = undefined;
}
  showNotification(arg0: string, arg1: string, arg2: string) {
<<<<<<< HEAD
    console.log('file upload Successfully')
  }
  loadDocumentInfo() {
   console.log('file loaded Successfully')
=======
    throw new Error('Method not implemented.');
  }
  loadDocumentInfo() {
    throw new Error('Method not implemented.');
>>>>>>> 6efe80cfa8f90ccf7b13ed69da83bcb4fc803e68
  }
  showLastShippingStatus(){
    this.showLastShipping = true;
    this.showArchive = false;
  }
  showArchiveStatus(){
    this.showLastShipping = false;
    this.showArchive = true;
  }
downloadFile() {
    this.masters.getMastersData().subscribe(response => {
			let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
			const url = window.URL.createObjectURL(blob);
<<<<<<< HEAD
			 fileSaver.saveAs(blob, 'pdf');
     // window.open(url);
=======
			//window.open(url);
			//window.location.href = response.url;
			fileSaver.saveAs(blob, 'pdf');
>>>>>>> 6efe80cfa8f90ccf7b13ed69da83bcb4fc803e68
		}), error => console.log('Error downloading the file'),
                 () => console.info('File downloaded successfully');
  }
  
 
  }

