import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BikeModel } from '../../bike.model';
import { YAMAHA_MODEL_LIST } from '../../mock-backend/mock-data';

@Component({
  selector: 'ss-add-bike',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-bike.component.html',
})
export class AddBikeComponent {
  bikeModels: BikeModel[];

  constructor(public router: Router) {
    this.bikeModels = YAMAHA_MODEL_LIST;
  }

  navigateToNewBike(event: any) {
    this.router.navigate([`/new/${event.target.value}`]);
  }
}
