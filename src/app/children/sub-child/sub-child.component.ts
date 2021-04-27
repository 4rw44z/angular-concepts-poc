import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RxjsService } from 'src/app/services/rxjs';
@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.scss']
})
export class SubChildComponent implements OnInit {
  public dataSource;
  public displayedColumns = ['id', 'title', 'completed']
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public readonly rxjsService: RxjsService) {

  }
  ngOnInit(): void {
    this.rxjsService.getAllUsers().subscribe((data : any) => {
      this.setDataSource(data);
    }); 
  }
  setDataSource(data) {
    this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
