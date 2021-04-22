import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-computer',
  templateUrl: './new-computer.component.html',
  styleUrls: ['./new-computer.component.scss']
})
export class NewComputerComponent implements OnInit {
  @Input() computerData = null;
  @Output() like : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  public likeClicked() {
    this.like.emit('Thank you for liking');
  }
}
