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
    // bike model contain spaces, but endpoint interprets %20 as a space
    const bikeModel = event.target.value.replace(/ /g, '%20');
    this.router.navigate(['/new/' + bikeModel]);
  }
}
