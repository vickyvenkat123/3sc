import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge } from 'rxjs';

@Component({
  selector: 'app-show-docs',
  templateUrl: './show-docs.component.html',
  styleUrls: ['./show-docs.component.css']
})
export class ShowDocsComponent implements OnInit {
  
  toppings = new FormControl();

  toppingList: string[] = ['Show Invoice', 'Show LR', 'Show POD'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isLoadingResults: boolean;
  exampleDatabase: any;
  constructor() { }
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
    this.isLoadingResults = true;
    return this.exampleDatabase!.getRepoIssues(
        this.sort.active, this.sort.direction, this.paginator.pageIndex)
  }
  ngOnInit(): void {
  }

}
