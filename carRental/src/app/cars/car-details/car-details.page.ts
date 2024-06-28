import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Car} from "../car.model";
import {CarsServiceService} from "../cars-service.service";
import {CarsPageRoutingModule} from "../cars-routing.module";
import {CarDetailsPageRoutingModule} from "./car-details-routing.module";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
  //imports: [CarsPageRoutingModule,CarDetailsPageRoutingModule],
})
export class CarDetailsPage implements OnInit {

  // @ts-ignore
  car:Car;

  constructor(private route: ActivatedRoute, private carsService: CarsServiceService) {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
          // @ts-ignore
      this.car=this.carsService.getCar(paramMap.get('id'))
      console.log(this.car)
    });
  }


}
