import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './Components/residences/residences.component';
import { ApartmentsComponent } from './Components/apartments/apartments.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResidenceDetailsComponent } from './Components/residences/residence-details/residence-details.component';
import { ApartmentsByResidencComponent } from './Components/apartments/apartments-by-residenc/apartments-by-residenc.component';
import { AddApartmentComponent } from './Components/apartments/add-apartment/add-apartment.component';
import { AddResidenceComponent } from './Components/residences/add-residence/add-residence.component';
;

const routes: Routes = [
  {path: 'apartments',component:ApartmentsComponent},
  {path:'apartments/:id', component:ApartmentsByResidencComponent},
  {path:'apartment/add/:id', component:AddApartmentComponent},
  {path: 'residences',component:ResidencesComponent},
  {path:'',redirectTo:'/residences',pathMatch:'full'},
  {path:'details/:id', component:ResidenceDetailsComponent},
  {path:'residence/add', component:AddResidenceComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
