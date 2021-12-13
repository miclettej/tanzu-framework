import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagementClusterModule } from './management-cluster/management-cluster.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ManagementClusterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
