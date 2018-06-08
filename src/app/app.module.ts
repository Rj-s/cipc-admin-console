import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// ## Components
import {
  LoginComponent,
  CipcApplicationsComponent,
  AnnualreturnApplicationsComponent,
  ViewCipcApplicationComponent,

  ViewCIPCApplicationButtonComponent,
  AnnualReturnsCustomActionButtons
} from './components';


// ## Services
import {
  AuthenticationService,
  AuthGuard,
  ElasticSearchService
} from './services';

// ## Third Party
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ExportService } from './services/export.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CipcApplicationsComponent,
    AnnualreturnApplicationsComponent,
    ViewCipcApplicationComponent,

    ViewCIPCApplicationButtonComponent,
    AnnualReturnsCustomActionButtons
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2SmartTableModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    ElasticSearchService,
    ExportService
  ],
  entryComponents: [
    ViewCIPCApplicationButtonComponent,
    AnnualReturnsCustomActionButtons
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
