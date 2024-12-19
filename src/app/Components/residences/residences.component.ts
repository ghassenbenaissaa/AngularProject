import { Component } from '@angular/core';
import { Residence } from 'src/app/Models/residence';
import { ResidenceService } from 'src/app/services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {

  constructor(private _residenceService:ResidenceService){
    this.residences=this._residenceService.residences; //residence est le variable local
  }

  title:string = "Liste des résidences"
  selectedResidence: Residence = new Residence();
  hide: boolean = true;
  searchText:string = ''
  residences : Residence[] = [];

    showLocation(r: Residence){
      this.hide = false;
      this.selectedResidence = r;
    }

    filterByAdress(){
      return this.residences.filter((p)=>p.address.toLocaleLowerCase().includes(this.searchText.toLowerCase()))
    }

    listFavoris: Residence[] = []

    addToFavoris(r:Residence){
      let index = this.listFavoris.findIndex((p)=>p.id == r.id);
      if(index == -1){
        this.listFavoris.push(r)
      }
      else {
        this.listFavoris.splice(index,1)
      }
    }

    isFavoris(r: Residence){
      return this.listFavoris.some((p)=>p.id == r.id)
    }
}
