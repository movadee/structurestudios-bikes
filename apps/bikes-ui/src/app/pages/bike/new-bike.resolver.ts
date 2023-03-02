import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';

import { ApiService } from '../../api.service';
import { BikeService } from './bike.service';

@Injectable({ providedIn: 'root' })
export class NewBikeResolver implements Resolve<any> {
  constructor(private apiService: ApiService, private bikeService: BikeService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const bikeModel = route.paramMap.get('id') ?? '';
    return this.apiService.getBikeByModel(bikeModel).pipe(
      map((data) => {
        // TODO: response can have multiple bikes with a same model due to production year
        // quick hack is to take first bike in the array, but for production it is no go
        this.bikeService.setBike(data[0]);
      })
    );
  }
}
