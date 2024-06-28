import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../car.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-car-element',
  templateUrl: './car-element.component.html',
  styleUrls: ['./car-element.component.scss'],
})
export class CarElementComponent  implements OnInit {

  @Input() car:Car={id:"",model:"",description:"",imageUrl:""};
  constructor(private router:Router) { }

  ngOnInit() {}

  seeMore() {
    //this.router.navigateByUrl('/reservations' + paramValue);
  }
}
