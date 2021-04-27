import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AppMainNavComponent } from './app-main-nav/app-main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './Pages/home-component/home-component.component';
import { ProfilesComponent } from './Pages/profiles-component/profiles-component.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { NewComputerComponent } from './Pages/new-computer/new-computer.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AppMainNavComponent,
    HomeComponent,
    ProfilesComponent,
    NewComputerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    LayoutModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'profiles', component: ProfilesComponent },
      { path: 'children', loadChildren: () => import('./children/children.module').then(m => m.ChildrenModule) },
      {path: '**', component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }