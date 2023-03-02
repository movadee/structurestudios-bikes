import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { map } from 'rxjs';

import { BikeService } from '../../bike.service';

@Injectable({ providedIn: 'root' })
export class BikeResolver implements Resolve<any> {
  constructor(private bikeService: BikeService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const bikeId = route.paramMap.get('id') ?? '';
    return this.bikeService.getBike(bikeId).pipe(map((data) => this.bikeService.setBike(data)));
  }
}
