import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Bike } from '../../bike.model';
import { BikeService } from '../../pages/bike/bike.service';

@Component({
  selector: 'ss-bike-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bike-card.component.html',
})
export class BikeCardComponent {
  @Input() bike!: Bike;

  constructor(public bikeService: BikeService) {}
}
