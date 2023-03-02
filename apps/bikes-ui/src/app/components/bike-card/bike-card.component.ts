import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Bike } from '../../bike.model';

@Component({
  selector: 'ss-bike-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bike-card.component.html',
})
export class BikeCardComponent {
  @Input() bike!: Bike;
  defaultImg: string;

  constructor() {
    // hack: in production default image can be handled at the product creation time,
    // so that peoduct page will display images it receives
    this.defaultImg =
      'https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/defaultbike.jpg&w=350&h=251&q=75&c=1';
  }
}
