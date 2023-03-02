import { Route } from '@angular/router';

import { BikeResolver } from './pages/bike/bike.resolver';
import { NewBikeResolver } from './pages/bike/new-bike.resolver';
import { ListResolver } from './pages/list/list.resolver';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    resolve: { data: ListResolver },
    loadComponent: () => import('./pages/list/list.component').then((mod) => mod.ListComponent),
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
