import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-docs',
  templateUrl: './upload-docs.component.html',
  styleUrls: ['./upload-docs.component.css'],
})
export class UploadDocsComponent implements OnInit {
  public filterDocTypes = [
    { value: 'uploadInvoice', viewValue: 'Upload Invoice File' },
    { value: 'uploadLR', viewValue: 'Upload LR' },
    { value: 'uploadPO', viewValue: 'Upload PO' },
    { value: 'uploadPOD', viewValue: 'Upload POD' },
    { value: 'uploadContract', viewValue: 'Upload Contract' }
  ];
  docTitle: string = "Upload Documents";
  constructor() {}

  ngOnInit(): void {}
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

   }
  }
}
