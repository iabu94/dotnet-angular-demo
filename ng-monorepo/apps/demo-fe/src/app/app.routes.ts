import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  },
  {
    path: 'students',
    loadChildren: () => import('@ng-monorepo/students').then(s => s.routes)
  }
];
