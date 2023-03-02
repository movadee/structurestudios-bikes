import { Route } from '@angular/router';

import { BikeListResolver } from './pages/bike-list/bike-list.resolver';
import { BikeResolver } from './pages/bike/bike.resolver';
import { NewBikeResolver } from './pages/bike/new-bike.resolver';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    resolve: { data: BikeListResolver },
    loadComponent: () => import('./pages/bike-list/bike-list.component').then((mod) => mod.BikeListComponent),
  },
  {
    path: 'bike/:id',
    resolve: { BikeResolver },
    loadComponent: () => import('./pages/bike/bike.component').then((mod) => mod.BikeComponent),
  },
  {
    path: 'new/:id',
    resolve: { NewBikeResolver },
    loadComponent: () => import('./pages/bike/bike.component').then((mod) => mod.BikeComponent),
  },
];
