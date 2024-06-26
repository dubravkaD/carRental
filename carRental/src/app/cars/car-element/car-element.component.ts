import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../car.model";

@Component({
  selector: 'app-car-element',
  templateUrl: './car-element.component.html',
  styleUrls: ['./car-element.component.scss'],
})
export class CarElementComponent  implements OnInit {

  @Input() car:Car={id:"",name:"",model:"",description:"",imageUrl:""};
  constructor() { }

  ngOnInit() {}

}
