import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITableData } from 'src/app/models/tableData';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {
  public title = new FormControl('', [Validators.required]);
  @ViewChild('todoForm', { static: true }) todoForm: NgForm;
  constructor(public dialogRef: MatDialogRef<InfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITableData) { }

  ngOnInit(): void {
    if(this.data.title) {
      this.title.setValue(this.data.title);
    }
  }
  public closeDialog() {
    this.dialogRef.close();
  }
  public onSave() {
    if(this.title?.errors?.required) {
      return;
    }
    else if(this.title && this.data.id) {
      this.dialogRef.close({ id: this.data.id, title: this.title.value, completed: this.data.completed});
    }
    else {
      this.dialogRef.close({ title: this.title.value, completed: this.data.completed});
    }
    
  }
  handleTaskCompletedChange() {
    this.data.completed = !this.data.completed;
  }
}
