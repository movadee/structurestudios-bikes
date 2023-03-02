import { Component } from '@angular/core';

@Component({
  selector: 'ss-copyright',
  standalone: true,
  templateUrl: './copyright.component.html',
})
export class CopyrightComponent {
  copyrightYear: number;

  constructor() {
    this.copyrightYear = new Date().getFullYear();
  }
}
