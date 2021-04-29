import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SubRoute } from '../constants/subroutes.enum';
import { ServerModule } from '../constants/serverModule.enum';
import { CrudService } from '../services/crud.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InfoModalComponent } from './info-modal/info-modal.component';
import { ITableData } from '../models/tableData';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public dataSource;

  public Todo: ITableData = {
    title: '',
    userId: '',
    completed: false
  }
  public newTodo;
  public displayedColumns = ['id', 'title', 'completed', 'update', 'delete']
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor( public readonly crudService: CrudService, public dialog: MatDialog) {

   }

  ngOnInit(): void {
    this.getDataSource();
    this.newTodo = this.Todo;
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
    this.openDialog(data);
  }
  public addNewTask() {
    this.openDialog();
  }

  public deleteTask(data) {
    this.crudService.delete(ServerModule.USERS, SubRoute.TODOS, data.id).subscribe(() => {
      this.getDataSource();
    });
  
  }
  openDialog(todo?): void {
    const dialogRef = this.dialog.open(InfoModalComponent, {
      width: '600px',
      data: todo? todo : this.newTodo 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.newTodo = result;
      if(this.newTodo?.id && this.newTodo) {
        this.crudService.put(ServerModule.USERS, SubRoute.TODOS, this.newTodo, this.newTodo.id).subscribe(() => {
          this.getDataSource();
        });
        this.newTodo = this.Todo;
      }
      else if(this.newTodo) {
        this.crudService.post(ServerModule.USERS, SubRoute.TODOS, this.newTodo).subscribe(() => {
          this.getDataSource();
        });
      }
    });
  }
}

