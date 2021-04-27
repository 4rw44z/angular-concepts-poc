import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProfile, Profiles } from '../Data/profiledata';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public $profiles = new BehaviorSubject<any>([]); 
  public profileListMaster: IProfile[] = [];
  constructor(private readonly ngZone: NgZone){
    this.ngZone.runOutsideAngular(() => {
      this.$profiles.next(this.profileListMaster);
    })
   }

   public generateNewProfiles() {
     this.$profiles.subscribe(item => this.profileListMaster = item);
     setTimeout(() => {
      for( let i = 0; i< 4; i++) {
        this.profileListMaster = [...this.profileListMaster, Profiles.new];
      }
      this.$profiles.next(this.profileListMaster);
     }, 0)
   }

   public addNewProfile() {
    this.$profiles.subscribe(item => this.profileListMaster = item);
    this.profileListMaster = [...this.profileListMaster, Profiles.new];
    this.$profiles.next(this.profileListMaster);
   }
   
   public deleteProfileData(id) {
    this.$profiles.subscribe(item => this.profileListMaster = item);
    this.profileListMaster = this.profileListMaster.filter(item => item.id !== id);
    this.$profiles.next(this.profileListMaster);
   }
}
