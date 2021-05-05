import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMainNavComponent } from './components/app-main-nav/app-main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './Pages/home-component/home-component.component';
import { ProfilesComponent } from './Pages/profiles-component/profiles-component.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { NewComputerComponent } from './Pages/new-computer/new-computer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ErrorInterceptor, fakeBackendProvider, JwtInterceptor } from 'src/helper';
import { AuthGuard } from './guards';
@NgModule({
  declarations: [
    AppComponent,
    AppMainNavComponent,
    HomeComponent,
    ProfilesComponent,
    NewComputerComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, canActivate: [AuthGuard]},
      {path: 'login', component: LoginComponent},
      {path: 'profiles', component: ProfilesComponent, canActivate: [AuthGuard]},
      { path: 'children', loadChildren: () => import('./components/children/children.module').then(m => m.ChildrenModule) },
      { path: 'table', loadChildren: () => import('./components/table/table.module').then(m => m.TableModule) },
      {path: '**', component: HomeComponent}
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }