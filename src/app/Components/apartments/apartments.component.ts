import { Component } from '@angular/core';
import { Apartment } from 'src/app/Models/apartment';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ResidenceService } from 'src/app/services/residence.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  constructor(private _apartmentService:ApartmentService,private _residenceService:ResidenceService){
    this.apartments=this._apartmentService.apartments; //residence est le variable local
  }
  title:string = "Liste des Apartements"
  apartments : Apartment[] = [];

  getResidence(idR:number) {
    return this._residenceService.residences.find((r)=>r.id == idR)!.name
  }
}
