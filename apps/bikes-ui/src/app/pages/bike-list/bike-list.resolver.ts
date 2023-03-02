import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Bike } from '../../bike.model';
import { BikeService } from '../../bike.service';

@Injectable({ providedIn: 'root' })
export class BikeListResolver implements Resolve<Bike[]> {
  constructor(private bikeService: BikeService) {}

  resolve(): Observable<Bike[]> {
    return this.bikeService.getBikeList();
  }
}
