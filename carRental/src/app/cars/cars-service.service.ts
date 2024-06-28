import { Injectable } from '@angular/core';
import {Car} from "./car.model";

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {

  cars:Car[]=[
    {id:"1",model:"car1",description:"",imageUrl:""},
    {id:"2",model:"car2",description:"",imageUrl:""},
    {id:"3",model:"car3",description:"",imageUrl:""}
  ];

  constructor() { }

  getCar(id:string){
    return this.cars.find((c) => c.id === id);
  }
}
