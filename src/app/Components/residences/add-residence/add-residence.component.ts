import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResidenceService } from 'src/app/services/residence.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  constructor(private _router:Router, private _residenceService:ResidenceService){}
  residence : FormGroup = new FormGroup ({
    //name : new FormControl({value:'residence name',disabled:true},[]),
    name : new FormControl('',[Validators.required,Validators.minLength(3)]),
    /*address : new FormGroup({
    street : new FormControl('',[]),
    city : new FormControl('',[])
    }),*/
    address : new FormControl('',[Validators.required]),
    image : new FormControl('',[Validators.required]),
    status : new FormControl('Disponible',[])
  })
  get name(){
    return this.residence.get('name');
  }
  get address(){
    return this.residence.get('address');
  }
  get image(){
    return this.residence.get('image');
  }
add(){
  //console.log(this.residence.value);
  console.log(this.residence.getRawValue);
  this._residenceService.addResidence(this.residence.getRawValue())
  this._router.navigate(['/residences'])
  /*this.residence.patchValue({
    name:"test"
  })*/
  this.residence.reset()
}
}
