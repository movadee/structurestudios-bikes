import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Bike } from '../../bike.model';

@Injectable({
  providedIn: 'root',
})
export class BikeService {
  bike!: Bike; // stores entire bike object
  bikeForm!: FormGroup; // stores only editable bike fields
  // hack: in production default image can be handled at the product creation time,
  // so that peoduct page will display images it receives
  defaultImg =
    'https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/defaultbike.jpg&w=350&h=251&q=75&c=1';

  constructor(private fb: FormBuilder) {}

  setBike(bikeInfo: Bike): void {
    this.bike = bikeInfo;
    this.setBikeForm();
  }

  setBikeForm(): void {
    this.bikeForm = this.fb.group({
      price: [this.bike.articleCompleteInfo.price || '', Validators.required],
      description: [this.bike.engineAndTransmission.exhaustSystemName || '', Validators.required],
    });
  }

  // TODO: refactor this code
  resetBikeForm() {
    this.bikeForm.patchValue({
      price: this.bike.articleCompleteInfo.price,
      description: this.bike.engineAndTransmission.exhaustSystemName,
    });
    this.bikeForm.updateValueAndValidity();
  }

  bikeId(): number {
    return this.bike.articleCompleteInfo.articleID;
  }

  // TODO: this code needs to be refactored
  updateBike() {
    const newValue = this.bikeForm.value;
    this.bike.articleCompleteInfo.price = newValue.price;
    this.bike.engineAndTransmission.exhaustSystemName = newValue.description;
  }
}
