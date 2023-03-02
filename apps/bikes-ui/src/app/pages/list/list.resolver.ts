import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { ApiService } from '../../api.service';
import { Bike } from '../../bike.model';

@Injectable({ providedIn: 'root' })
export class ListResolver implements Resolve<Bike[]> {
  constructor(private apiService: ApiService) {}

  resolve(): Observable<Bike[]> {
    return this.apiService.getBikeList();
  }
}
