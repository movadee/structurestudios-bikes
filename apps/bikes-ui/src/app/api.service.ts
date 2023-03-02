import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { Bike } from './bike.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private fakeBikesEndpoint = 'http://localhost:4200/bikes';
  public bikeForm!: FormGroup;
  public bike!: Bike;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  getBikeList(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.fakeBikesEndpoint);
  }

  getBike(id: string): Observable<Bike> {
    return this.http.get<Bike>(`${this.fakeBikesEndpoint}/${id}`);
  }

  getBikeByModel(model: string): Observable<Bike> {
    const externalUrl =
      'https://motorcycle-specs-database.p.rapidapi.com/make/Yamaha/model/' + model.replace(/ /g, '%20');
    // const url = 'http://motorcycle-specs-database.p.rapidapi.com/make/Aprilia/model/Dorsoduro%201200';
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '74f1913b52msh8541d3b0e20cf31p1f8752jsne4ff0dbedb9d',
      'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com',
    });
    this.http.get<Bike>(externalUrl, { headers: headers }).subscribe((bike) => {
      this.setBike(bike);
      return of(true);
    });
    return of(this.bike);
  }

  saveBike(bike: Bike) {
    return this.http.post<Bike>(this.fakeBikesEndpoint, bike);
  }

  deleteBike(bikeId: number): Observable<any> {
    return this.http.delete<any>(`${this.fakeBikesEndpoint}/${bikeId}`);
  }

  setBike(bikeInfo: Bike) {
    this.bike = bikeInfo;
    this.setBikeForm(bikeInfo);
  }

  setBikeForm(bike: Bike): void {
    this.bikeForm = this.fb.group({
      price: [bike.articleCompleteInfo.price || '', Validators.required],
      description: [bike.engineAndTransmission.exhaustSystemName || '', Validators.required],
    });
    if (bike) this.bikeForm.disable();
  }
}
