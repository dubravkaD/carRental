import {Component, Input, OnInit} from '@angular/core';
import {Car} from "./car.model";
import {CarsServiceService} from "./cars-service.service";
import {CarsPageRoutingModule} from "./cars-routing.module";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
  //imports: [CarsPageRoutingModule],
})
export class CarsPage implements OnInit {
// *ngFor="let car in cars"
  /*cars:Car=[
    {id:"1",name:"car1",model:"",description:"",imageUrl:""},
    {id:"2",name:"car2",model:"",description:"",imageUrl:""},
    {id:"3",name:"car3",model:"",description:"",imageUrl:""}
  ];
*/
  car={id:"1",name:"car1",model:"",description:"",imageUrl:""};

  cars:Car[];
  constructor(private carsService:CarsServiceService) {
    this.cars=carsService.cars;
  }

  ngOnInit() {
  }

}
