import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile-service.service';
import { RxjsService } from 'src/app/services/rxjs';

@Component({
  selector: 'app-profiles-component',
  templateUrl: './profiles-component.component.html',
  styleUrls: ['./profiles-component.component.scss']
})
export class ProfilesComponent implements OnInit {
  public profileData = [];
  public isProfile; 

  constructor( public readonly profileService : ProfileService, public readonly rxjsService: RxjsService) {

   }

  ngOnInit(): void {
    this.getDataFromRxjs();
  }
  getDataFromRxjs() {
    this.rxjsService.getStackAreaConfigId().subscribe((data: boolean) => {
      this.isProfile = data;
    });
  }
  public trackById = (index, item) => item.id;
  getProfiles() {
    this.profileService.$profiles.subscribe( (item) => this.profileData = item);
  }
  createProfilesClicked() {
    this.profileService.generateNewProfiles();
  }
  createSingleProfilesClicked() {
    this.profileService.addNewProfile();
  }
  deleteProfile(data) {
    this.profileService.deleteProfileData(data.id);
  }
}
