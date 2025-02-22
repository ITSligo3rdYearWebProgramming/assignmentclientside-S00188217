import { carService } from './../car-service.service';
import { Component, OnInit } from '@angular/core';
import { carModel } from 'carModel';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: carModel[] = []

  constructor(private carservice: carService) { }

  ngOnInit(): void {
    this.displayCar()
  }

  displayCar() {
    this.carservice.readCars().subscribe(x => {
      this.cars = x
      console.log(x)
    })
  }
}
