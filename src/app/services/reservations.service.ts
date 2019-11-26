import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  _urlReservations: string="./assets/data/reservations.json";
  constructor(private http: HttpClient) { }

  getReservations(){
    return this.http.get(this._urlReservations);
  }
}
