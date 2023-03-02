import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ss-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  public menu = [
    { name: 'Bikes', routerLink: '/' },
    { name: 'Accessories', routerLink: '' },
    { name: 'Promotions', routerLink: '' },
  ];
}
