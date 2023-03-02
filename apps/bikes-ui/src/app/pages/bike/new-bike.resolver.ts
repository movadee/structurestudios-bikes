import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Bike } from '../../bike.model';
import { BikeService } from '../../bike.service';

@Injectable({ providedIn: 'root' })
export class NewBikeResolver implements Resolve<Bike> {
  constructor(private bikeService: BikeService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Bike> {
    const bikeModel = route.paramMap.get('id') ?? '';
    return this.bikeService.getBikeByModel(bikeModel);
  }
}
