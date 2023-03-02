import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Bike } from '../../bike.model';
import { BikeCardComponent } from '../../components/bike-card/bike-card.component';

@Component({
  selector: 'ss-bike-list',
  standalone: true,
  imports: [CommonModule, BikeCardComponent],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  public bikes!: Bike[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((response) => {
      this.bikes = response['data'];
    });
  }
}
