import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';

import { ApiService } from '../../api.service';
import { BikeService } from './bike.service';

@Injectable({ providedIn: 'root' })
export class BikeResolver implements Resolve<any> {
  constructor(private apiService: ApiService, private bikeService: BikeService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const bikeId = route.paramMap.get('id') ?? '';
    return this.apiService.getBike(bikeId).pipe(
      map((data) => {
        this.bikeService.setBike(data);
        this.bikeService.bikeForm.disable();
      })
    );
  }
}
