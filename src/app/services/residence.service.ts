import { Injectable } from '@angular/core';
import { Residence } from '../Models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  residences : Residence[] = [{id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/Images/R1.jpg", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/Images/R2.jpeg", status:
    "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/Images/R3.jpeg", status:
    "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"../../assets/Images/R4.jpeg", status: "En Construction"}];
  constructor() { }

  addResidence ( residence: Residence){
    this.residences.push(residence)
  }
}
