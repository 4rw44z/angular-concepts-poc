import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChildrenComponent } from './children.component';
import { SubChildComponent } from './sub-child/sub-child.component';
import { MaterialModule } from 'src/app/material/material.module';


const routes: Routes = [
  { path: '', component: ChildrenComponent },
  {path: 'subchild', component: SubChildComponent}
];

@NgModule({
  declarations: [ChildrenComponent, SubChildComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ChildrenModule { }
