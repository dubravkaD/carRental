import {Component, Input, OnInit} from '@angular/core';
import {Car} from "./car.model";
import {CarsServiceService} from "./cars-service.service";
import {CarsPageRoutingModule} from "./cars-routing.module";
import {Router} from "@angular/router";
import {of} from "rxjs";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
  //imports: [CarsPageRoutingModule],
})
export class CarsPage implements OnInit {
  cars:Car[];
  constructor(private carsService:CarsServiceService,private router:Router) {
    this.cars=carsService.cars
  }

  ngOnInit() {
  }

}
