import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-show-docs',
  templateUrl: './show-docs.component.html',
  styleUrls: ['./show-docs.component.css']
})
export class ShowDocsComponent implements OnInit {

  fileURL: any;
  dataDocsSource: any;
  docTitle: string = "Show Documents"
  message: any;
  filterDocTypes: { value: string; viewValue: string; }[];
  showInvoiceTable: boolean = true;
  showDocumentFile: boolean = false;
  showLRFile: boolean = false;
  showInvoiceTable2: boolean = true;
  showPODFile: boolean = false;
  showInvoiceFile: boolean = false;
  constructor(public data: DataService, private route: ActivatedRoute,) { }
  ngOnInit() {
    this.getData();
    this.data.currentMessage.subscribe(message => this.message = message)
    console.log(this.message)
    this.getFilterDocTypes(this.message);
  }

  openfile() {
    this.data.getTableDataView().subscribe((_response: any) => {
      let blob: any = new Blob([_response], { type: 'text/json; charset=utf-8' });
      const url = window.URL.createObjectURL(blob);
    }), _error => console.log('Error downloading the file'),
      () => console.info('File downloaded successfully');
  }

  getData() {
    this.data.getTableData().subscribe(res => {
      this.dataDocsSource = res;
    })
  }
  getFilterDocTypes(type) {
    let moduleChoosen = this.route.snapshot.paramMap.get('id');
    if (moduleChoosen === "domestic") {
      this.filterDocTypes = [

        { value: 'ShowInvoice', viewValue: 'Show Invoice File' },
        { value: 'Show LR', viewValue: 'Show LR File' },
        { value: 'Show POD', viewValue: 'Show POD File' },
      ];

    }
    if (moduleChoosen == "export") {
      this.filterDocTypes = [

        { value: 'ShowInvoice_Ex', viewValue: 'Show Invoice File' },
        { value: 'ShowSupportedDoc', viewValue: 'Show Supported Document File' }
      ];
    }
  }


  filterChanged(selectedValue) {
    console.log(selectedValue)
    this.showInvoiceTable = false;
    this.showDocumentFile = false;
    this.showLRFile = false;
    this.showPODFile = false;
    this.showInvoiceFile = false;
    switch (selectedValue) {
      case selectedValue = "ShowInvoice":
        this.docTitle = 'Show Invoice';
        this.showInvoiceTable = true;
        break;
      case selectedValue = "Show LR":
        this.docTitle = 'Show LR';
        this.showLRFile = true;
        break;
      case selectedValue = "Show POD":
        this.docTitle = 'Show POD';
        this.showPODFile = true
        break;
        case selectedValue = "ShowInvoice_Ex":
        this.docTitle = 'Show Invoice';
        this.showInvoiceFile = true;
        break;
      case selectedValue = "ShowSupportedDoc":
        this.docTitle = 'Show Supported Document File ';
        this.showDocumentFile = true;
        break;
    }
  }
}

