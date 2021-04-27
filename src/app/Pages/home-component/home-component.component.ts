import { Component, OnInit } from '@angular/core';
import { RxjsService } from 'src/app/services/rxjs';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponent implements OnInit {
  public buyLaptop;
  public promiseVal;
  public like;
  public appleComputer = {
    name: 'Mac',
    model: 'macintosh',
    osType: 'macos',
    processor: 'i7',
    peripherals: 'mouse, keyboard, powerbrick'
  }
  public dellComputer = {
    name: 'Dell',
    model: 'XPS 15',
    osType: 'linux',
    processor: 'i7',
    peripherals: 'mouse, keyboard, powerbrick'
  }
  constructor( public readonly rxjsService : RxjsService) { }
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
          resolve(this.appleComputer);
        }, 3000)
        
      } else if(this.dellAvailable()) {
        return setTimeout(  () => {
          resolve(this.dellComputer);
        }, 3000)
      }
      else {
        return setTimeout(() => {
          reject('Not available');
        }, 3000);
      }
    });
    this.buyLaptop.then(res => {
      this.promiseVal = res;

    }).catch(res => {
      this.promiseVal = res;
    })
  }
  public handleLikeClicked(data) {
    this.like = data;
  }
  public setRxJSDataOnClick() {
    this.rxjsService.setStackAreaConfigId(true);
  }
}
