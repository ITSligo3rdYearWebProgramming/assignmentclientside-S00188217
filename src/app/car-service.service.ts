import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { carModel } from 'carModel'

@Injectable({
  providedIn: 'root'
})
export class carService {

  myAPI:string = "http://localhost:4200"

  constructor(private http: HttpClient) { }

  readCar(ID:string) : Observable <carModel> {
    return this.http.get<carModel>(`${this.myAPI}/cars/${ID}`)
}

addCar(cars: carModel): Observable <carModel> {
    return this.http.post<carModel>(`${this.myAPI}/cars`, cars)
}
}