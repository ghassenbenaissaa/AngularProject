import { Injectable } from '@angular/core';
import { Apartment } from '../Models/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  apartments : Apartment[] = [
    {apartNum:1,floorNum:1,surface:20,terrace:true, surfaceterrace:74, "category":"S+1",ResidenceId:1},
    {apartNum:2,floorNum:2,surface:30,terrace:true, surfaceterrace:56, "category":"S+2",ResidenceId:2},
    {apartNum:3,floorNum:3,surface:25,terrace:false, surfaceterrace:60, "category":"S+3",ResidenceId:3},
    {apartNum:4,floorNum:4,surface:27,terrace:true, surfaceterrace:50, "category":"S+1",ResidenceId:4}];

  constructor() { }

  addApartment ( apartment: Apartment){
    this.apartments.push(apartment)
  }
}
