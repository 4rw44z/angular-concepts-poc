import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AppMainNavComponent } from './app-main-nav/app-main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './Pages/home-component/home-component.component';
import { ProfilesComponent } from './Pages/profiles-component/profiles-component.component';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './Pages/user-profile/user-profile.component';
import { ListComponent } from './Pages/profiles-component/Observables/list/list.component';
import { ForComponent } from './Pages/profiles-component/Observables/for/for.component';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    AppMainNavComponent,
    HomeComponent,
    ProfilesComponent,
    UserProfileComponent,
    ListComponent,
    ForComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'profiles', component: ProfilesComponent, children: [
        {path: '', component: ListComponent},
        {path: 'from', component: ForComponent}
      ]},
      {path: 'profile/:username', component: UserProfileComponent},
      {path: '**', component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }