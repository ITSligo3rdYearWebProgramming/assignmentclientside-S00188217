import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { carModel } from 'carModel'

@Injectable({
  providedIn: 'root'
})
export class carService {

  myAPI:string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  readCars() : Observable <carModel[]> {
    return this.http.get<carModel[]>(`${this.myAPI}/cars`)
  }

  addCar(cars: carModel): Observable <carModel> {
      return this.http.post<carModel>(`${this.myAPI}/cars`, cars)
  }
}