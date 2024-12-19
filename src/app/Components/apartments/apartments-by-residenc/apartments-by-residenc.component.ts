import { Component } from '@angular/core';
import { Apartment } from '../../../Models/apartment';
import { ActivatedRoute, Router } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ResidenceService } from 'src/app/services/residence.service';

@Component({
  selector: 'app-apartments-by-residenc',
  templateUrl: './apartments-by-residenc.component.html',
  styleUrls: ['./apartments-by-residenc.component.css']
})
export class ApartmentsByResidencComponent {
  apartments : Apartment[] = [];
  constructor(private _activated: ActivatedRoute, private _apartmentService: ApartmentService,private _residenceService:ResidenceService) {
    this.apartments = this._apartmentService.apartments.filter(a=>a.ResidenceId == this._activated.snapshot.params['id'])
  }

  getResidence(idR:number) {
    return this._residenceService.residences.find((r)=>r.id == idR)!.name
  }
}
