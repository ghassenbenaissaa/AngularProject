import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartment : FormGroup = new FormGroup ({
    apartNum : new FormControl('',[Validators.required]),
    floorNum : new FormControl('',[Validators.required]),
    surface : new FormControl('',[Validators.required]),
    terrace : new FormControl('',[]),
    surfaceterrace : new FormControl('',[Validators.required]),
    category : new FormControl('S+1',[]),
    ResidenceId : new FormControl('',[Validators.required]),
  })
  get apartNum(){
    return this.apartment.get('apartNum');
  }
  get floorNum(){
    return this.apartment.get('floorNum');
  }
  get surface(){
    return this.apartment.get('surface');
  }
  get terrace(){
    return this.apartment.get('terrace');
  }
  get surfaceterrace(){
    return this.apartment.get('surfaceterrace');
  }
  get category(){
    return this.apartment.get('category');
  }
  get ResidenceId(){
    return this.apartment.get('ResidenceId');
  }
add(){
  console.log(this.apartment.value);
  this.apartment.reset()
}
}
