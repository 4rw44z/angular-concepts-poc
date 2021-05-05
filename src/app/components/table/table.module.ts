import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table.component';
import { InfoModalComponent } from './info-modal/info-modal.component';
import { MaterialModule } from 'src/app/material/material.module';
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
