import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { VendorComponent } from './vendor/vendor.component';
import { CustomerComponent } from './customer/customer.component';
import { SimulationComponent } from './simulation/simulation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConcertComponent } from './concert/concert.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ConfigurationComponent,
    VendorComponent,
    CustomerComponent,
    SimulationComponent,
    ConcertComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,


    FormsModule,
    ReactiveFormsModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
