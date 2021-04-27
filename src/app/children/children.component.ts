import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
  constructor(private router: Router) { 
  
  }
  ngOnInit(): void {
   
  }
  routeToSubChild() {
    this.router.navigateByUrl('children/subchild');
  }
}
