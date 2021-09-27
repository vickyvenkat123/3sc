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
   constructor( public data : DataService) {}
   ngOnInit(){
     this.getData();
     
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

  // filterChanged(selectedValue: any) {

  //   switch(selectedValue){
  //    case selectedValue = "ShowInvoice":
  //    this.docTitle = 'Show Invoice';
  //    break;
  //  case selectedValue = "ShowLR":
  //    this.docTitle = 'Show LR';
  //    break;
  //  case selectedValue = "ShowPOD":
  //     this.docTitle = 'Show POD';
  //    break;
  //   }
  //  }
}

