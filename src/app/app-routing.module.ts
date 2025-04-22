import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { VendorComponent } from './vendor/vendor.component';
import { CustomerComponent } from './customer/customer.component';
import { SimulationComponent } from './simulation/simulation.component';
import { ConcertComponent } from './concert/concert.component';

const routes: Routes = [
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
    path:'concert',
    component:ConcertComponent
  },
 
  {
    path:'configuration',
    component:ConfigurationComponent
  },
  
  {
    path:'vendor',
    component:VendorComponent
  },

  {
    path:'customer',
    component:CustomerComponent

  },
  {
    path:'simulation',
    component:SimulationComponent
  },

  {
    path:'**',
    component:HomepageComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
