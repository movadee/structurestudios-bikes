import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Bike } from './bike.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  fakeBikesEndpoint = 'http://localhost:4200/bikes';

  constructor(private http: HttpClient) {}

  getBikeList(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.fakeBikesEndpoint);
  }

  getBike(id: string): Observable<Bike> {
    return this.http.get<Bike>(`${this.fakeBikesEndpoint}/${id}`);
  }

  getBikeByModel(model: string): Observable<Bike[]> {
    // TODO: hardcoded values below is a bad coding practice, they need to be stored in ENV variables
    const externalUrl =
      'https://motorcycle-specs-database.p.rapidapi.com/make/Yamaha/model/' + model.replace(/ /g, '%20');
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '74f1913b52msh8541d3b0e20cf31p1f8752jsne4ff0dbedb9d',
      'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com',
    });
    return this.http.get<Bike[]>(externalUrl, { headers: headers });
  }

  saveBike(bike: Bike): Observable<Bike> {
    return this.http.post<Bike>(this.fakeBikesEndpoint, bike);
  }

  deleteBike(bikeId: number): Observable<any> {
    return this.http.delete<any>(`${this.fakeBikesEndpoint}/${bikeId}`);
  }
}
