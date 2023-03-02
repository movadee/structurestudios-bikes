import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Bike } from '../../bike.model';
import { BikeService } from '../../bike.service';

@Component({
  selector: 'ss-bike',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bike.component.html',
})
export class BikeComponent {
  constructor(private router: Router, public bikeService: BikeService) {}

  editBike() {
    this.bikeService.bikeForm.enable();
  }

  saveBike() {
    const newValue = this.bikeService.bikeForm.value;
    this.bikeService.bike.articleCompleteInfo.price = newValue.price;
    this.bikeService.bike.engineAndTransmission.exhaustSystemName = newValue.description;

    this.bikeService.saveBike(this.bikeService.bike).subscribe((bike: Bike) => {
      this.bikeService.setBike(bike);
    });
  }

  deleteBike() {
    this.bikeService.deleteBike(this.bikeService.bike.articleCompleteInfo.articleID).subscribe((data) => {
      this.router.navigate(['']);
    });
  }
}
