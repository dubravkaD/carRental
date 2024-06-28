import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
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

  constructor(private activatedRoute: ActivatedRoute, private carsService: CarsServiceService) {
    /*console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.paramMap);
    console.log(this.activatedRoute.snapshot.data);
    console.log("url "+this.activatedRoute.url);
    console.log("id "+this.activatedRoute.snapshot.params['id']);
*/
    //console.log(this.route.path)
    //console.log(this.router.url)
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      console.log();
          // @ts-ignore
      this.car=this.carsService.getCar(paramMap.get('id'))
      console.log(this.car)
    });
  }


}
