import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard/dashboard.component';
import { MastersComponent } from './masters/masters.component';
import { HeaderComponent } from './header/header.component';
import { UploadDocsComponent } from './upload-docs/upload-docs.component';
import { MaterialModule } from './modules/material.module';
import { ShowDocsComponent } from './show-docs/show-docs.component';
import { LrGenerateComponent } from './lr-generate/lr-generate/lr-generate.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { AuditReportsComponent } from './audit-reports/audit-reports/audit-reports.component';
<<<<<<< HEAD
import { ChoosemoduleComponent } from './choosemodule/choosemodule.component';
// import { ExportDashboardComponent } from './export-dashboard/export-dashboard.component';
=======
>>>>>>> 6efe80cfa8f90ccf7b13ed69da83bcb4fc803e68



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MastersComponent,
    HeaderComponent,
    UploadDocsComponent,
   ShowDocsComponent,
    LrGenerateComponent,
    SideNavComponent,
<<<<<<< HEAD
    AuditReportsComponent,
    ChoosemoduleComponent,
    // ExportDashboardComponent
=======
    AuditReportsComponent
>>>>>>> 6efe80cfa8f90ccf7b13ed69da83bcb4fc803e68
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
