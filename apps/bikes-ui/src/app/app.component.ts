import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountComponent } from './components/account/account.component';
import { AddBikeComponent } from './components/add-bike/add-bike.component';
import { CartComponent } from './components/cart/cart.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchComponent } from './components/search/search.component';
import { TopBannerComponent } from './components/top-banner/top-banner.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TopBannerComponent,
    MenuComponent,
    LogoComponent,
    SearchComponent,
    AccountComponent,
    CurrencyComponent,
    CartComponent,
    CopyrightComponent,
    AddBikeComponent,
  ],
  selector: 'ss-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
