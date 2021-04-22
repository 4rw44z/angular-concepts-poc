import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponent implements OnInit {
  public buyLaptop;
  public promiseVal= '';
  constructor() { }
  appleAvailable() {
    return true;
  }
  dellAvailable() {
    return false;
  }
  ngOnInit(): void {
    this.buyLaptop = new Promise((resolve, reject) => {
      if(this.appleAvailable()) {
        return setTimeout(  () => {
          resolve('apple is purchased');
        }, 3000)
        
      } else if(this.dellAvailable()) {
        return setTimeout(  () => {
          resolve('dell is purchased');
        }, 3000)
      }
      else {
        return setTimeout(() => {
          reject('Not available');
        }, 3000);
      }
    });
    this.buyLaptop.then(res => {
      console.log(res);
      this.promiseVal = res;

    }).catch(res => {
      console.log(res);
      this.promiseVal = res;
    })
  }
}
