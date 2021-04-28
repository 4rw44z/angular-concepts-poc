import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SubRoute } from '../constants/subroutes.enum';
import { ServerModule } from '../constants/serverModule.enum';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public dataSource;
  public displayedColumns = ['id', 'title', 'completed', 'update', 'delete']
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor( public readonly crudService: CrudService) {

   }

  ngOnInit(): void {
    this.getDataSource();
  }
  public getDataSource() {
    this.crudService.get(ServerModule.USERS , SubRoute.TODOS).subscribe((data : any) => {
      this.setDataSource(data);
    }); 
  }
  public setDataSource(data) {
    this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  public updateTask(data) {
    console.log(data);
  }
  public deleteTask(data) {
    console.log(data);
    this.crudService.delete(ServerModule.USERS, SubRoute.TODOS, data.id).subscribe(() => {
      this.getDataSource();
    });
  
  }
}
