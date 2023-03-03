import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../../api.service';
import { BikeService } from './bike.service';

@Component({
  selector: 'ss-bike',
  standalone: true,
  templateUrl: './bike.component.html',
  imports: [CommonModule, ReactiveFormsModule],
})
export class BikeComponent {
  constructor(private router: Router, public bikeService: BikeService, public apiService: ApiService) {}

  saveBike() {
    this.bikeService.updateBikeInfo();
    this.apiService.saveBike(this.bikeService.bike).subscribe((_) => {
      this.router.navigate(['']);
    });
  }

  editBike() {
    this.bikeService.bikeForm.enable();
  }

  cancelEditBike() {
    this.bikeService.resetBikeForm();
    this.bikeService.bikeForm.disable();
  }

  deleteBike(): void {
    this.apiService.deleteBike(this.bikeService.bikeId()).subscribe((_) => {
      this.router.navigate(['']);
    });
  }
}
