import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table.component';
import { MaterialModule } from '../material/material.module';
import { InfoModalComponent } from './info-modal/info-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: TableComponent }
];

@NgModule({
  declarations: [TableComponent, InfoModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TableModule { }
