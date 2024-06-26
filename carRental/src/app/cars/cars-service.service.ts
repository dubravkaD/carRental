import { Injectable } from '@angular/core';
import {Car} from "./car.model";

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {

  cars:Car[]=[
    {id:"1",name:"car1",model:"",description:"",imageUrl:""},
    {id:"2",name:"car2",model:"",description:"",imageUrl:""},
    {id:"3",name:"car3",model:"",description:"",imageUrl:""}
  ];

  constructor() { }

  getCar(id:string){
    return this.cars.find((c) => c.id === id);
  }
}
