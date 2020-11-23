import { Component, Input, OnInit } from '@angular/core';
import { carModel } from 'carModel';

@Component({
  selector: 'app-car-component',
  templateUrl: './car-component.component.html',
  styleUrls: ['./car-component.component.css']
})
export class CarComponentComponent implements OnInit {

  @Input() car: carModel;

  constructor() { }

  ngOnInit(): void {
    console.log(this.car)
  }

}
