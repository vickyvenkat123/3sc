import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-upload-docs',
  templateUrl: './upload-docs.component.html',
  styleUrls: ['./upload-docs.component.css'],
})
export class UploadDocsComponent implements OnInit {
  // public filterDocTypes = [
  //   { value: 'uploadInvoice', viewValue: 'Upload Invoice File' },
  //   { value: 'uploadLR', viewValue: 'Upload LR' },
  //   { value: 'uploadPO', viewValue: 'Upload PO' },
  //   { value: 'uploadPOD', viewValue: 'Upload POD' },
  //   { value: 'uploadContract', viewValue: 'Upload Contract' },
  //   { value: 'uploadInvoice', viewValue: 'Upload Invoice' },
  //   { value: 'uploadSupportedDoc', viewValue: 'Upload Supported Doc' }
  // ];
  docTitle: string = "Upload Documents";
  message: any;
  filterDocTypes=[];
  constructor(public data : DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
    console.log(this.message)
    this.getFilterDocTypes(this.message);
  }
  myFunction() {}

  filterChanged(selectedValue: any) {

   switch(selectedValue){
    case selectedValue = "uploadInvoice":
    this.docTitle = 'Upload Invoice File';
    break;
  case selectedValue = "uploadLR":
    this.docTitle = 'Upload LR File';
    break;
  case selectedValue = "uploadPO":
     this.docTitle = 'Upload PO File';
    break;
  case selectedValue = "uploadPOD":
    this.docTitle = 'Upload POD File';
    break;
    default:
      this.docTitle = 'Upload Contract File';
    break;
    case selectedValue = "uploadInvoice":
    this.docTitle = 'Upload Invoice File';
    break;
    case selectedValue = "uploadSupportedDoc":
    this.docTitle = 'Upload Supported Doc File';
    break;

   }
  }
  getFilterDocTypes(type){
if (type == "2"){
  this.filterDocTypes = [
   
       { value: 'uploadInvoice', viewValue: 'Upload Invoice' },
       { value: 'uploadSupportedDoc', viewValue: 'Upload Supported Doc' }
     ];
}
this.filterDocTypes =[
  { value: 'uploadInvoice', viewValue: 'Upload Invoice File' },
     { value: 'uploadLR', viewValue: 'Upload LR' },
     { value: 'uploadPO', viewValue: 'Upload PO' },
     { value: 'uploadPOD', viewValue: 'Upload POD' },
     { value: 'uploadContract', viewValue: 'Upload Contract' },
];
  }
}
