import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MastersComponent } from './masters/masters.component';
import { HeaderComponent } from './header/header.component';
import { UploadDocsComponent } from './upload-docs/upload-docs.component';
import { MaterialModule } from './modules/material.module';
import { LoginGuard } from './login.guard';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    MastersComponent,
    HeaderComponent,
    UploadDocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
