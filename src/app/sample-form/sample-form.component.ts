import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { carService } from '../car-service.service';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {

  carservice: carService;

  constructor(carservice : carService) {
    this.carservice = carservice
   }

  carForm = new FormGroup({
    carID: new FormControl('', Validators.min(1)),
    carMake: new FormControl('', Validators.required),
    carModel: new FormControl('', Validators.required),
    fuelType: new FormControl('', Validators.required),
    carYear: new FormControl('', Validators.min(4)),
    carCountry: new FormControl('', Validators.required)
  });

  ngOnInit(): void {

  }

  message: string = "";

  public showMyMessage = false

  btnSubmit() {
    console.log(`Welcome to CarDB` + JSON.stringify(this.carForm.value));
    this.carservice.addCar(this.carForm.value)
    .subscribe({
      next: cars => {
        console.log(JSON.stringify(cars) + 'has been added to the database');
        this.message = "A new car has been added to the database"
      }
    })
  }

  get carID() {
    return this.carForm.get('carID');
  }

  get carMake() {
    return this.carForm.get('carMake');
  }

  get carModel() {
    return this.carForm.get('carModel');
  }

  get fuelType() {
    return this.carForm.get('fuelType');
  }

  get carYear() {
    return this.carForm.get('carYear');
  }

  get carCountry() {
    return this.carForm.get('carCountry');
  }
}
