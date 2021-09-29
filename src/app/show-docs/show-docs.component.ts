import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-show-docs',
  templateUrl: './show-docs.component.html',
  styleUrls: ['./show-docs.component.css']
})
export class ShowDocsComponent implements OnInit {
  
  fileURL: any;
  dataDocsSource: any;
  docTitle: string= "Show Documents"
  message: any;
  filterDocTypes: { value: string; viewValue: string; }[];
  showInvoiceTable:boolean = true;
  showDocumentFile: boolean = false;
  showLRFile:boolean=true;
  showInvoiceTable2: boolean=true;
   constructor( public data : DataService) {}
   ngOnInit(){
     this.getData();
     this.data.currentMessage.subscribe(message => this.message = message)
    console.log(this.message)
    this.getFilterDocTypes(this.message);
     
   }
  
   openfile() {
    this.data.getTableDataView().subscribe((_response: any) => {
			let blob:any = new Blob([ _response], { type: 'text/json; charset=utf-8' });
			const url = window.URL.createObjectURL(blob);
			//  fileSaver.saveAs(blob, 'pdf');
     window.open(url);
    //  window.print();
    //  let a         = document.createElement('a');
    //       a.href        = this.fileURL; 
    //       a.target      = '_blank';
    //       a.download    = 'bill.pdf';
    //       document.body.appendChild(a);
    //       a.click();
		}), _error => console.log('Error downloading the file'),
                 () => console.info('File downloaded successfully');
  }
   
   getData(){
     this.data.getTableData().subscribe(res=>{
       this.dataDocsSource = res;
     })
   }
   getFilterDocTypes(type) {

    if (type === "1") {
      this.filterDocTypes = [
        
            { value: 'ShowInvoice1', viewValue: 'Show Invoice File1' },
            { value: 'Show LR', viewValue: 'Show LR File' },
            { value: 'Show POD', viewValue: 'Show POD File' },
        ];
      
    }
    if (type !== "1"){
      this.filterDocTypes=[
       
        { value: 'ShowInvoice', viewValue: 'Show Invoice File' },
        { value: 'ShowSupportedDoc', viewValue: 'Show Supported Document File' }
      ];
    }
  }

  filterChanged(selectedValue) {
    console.log(selectedValue)
    this.showInvoiceTable = false;
    this.showDocumentFile = false;
        switch(selectedValue){
          case selectedValue = "ShowInvoice":
          this.docTitle = 'Show Invoice';
          this.showInvoiceTable = true;
          
         break;
       case selectedValue = "ShowLR":
         this.docTitle = 'Show LR';
         this.showLRFile = true;
         break;
       case selectedValue = "ShowPOD":
          this.docTitle = 'Show POD';
         break;
         case selectedValue = "ShowInvoice":
          this.docTitle = 'Show Invoice';
          this.showInvoiceTable = true;
         break;
         case selectedValue = "ShowSupportedDoc":
          this.docTitle = 'Show Supported Document File ';
          this.showDocumentFile = true;
         break;
        }
       }
  //  public filterDocTypes = [
  //    {value: ' ', viewValue: ' '},
  //      { value: 'ShowInvoice', viewValue: 'Show Invoice File' },
  //      { value: 'Show LR', viewValue: 'Show LR File' },
  //      { value: 'Show POD', viewValue: 'Show POD File' },
  //  ];
}

