import { Routes } from '@angular/router';
import { selectedStudentResolver, studentsResolver } from './services';

export const routes: Routes = [
  {
    path: '',
    resolve: {
      students: studentsResolver,
    },
    loadComponent: () =>
      import('./containers').then((c) => c.StudentListPageComponent),
  },
  {
    path: ':id',
    resolve: {
      student: selectedStudentResolver,
    },
    loadComponent: () =>
      import('./containers').then((c) => c.StudentDetailPageComponent),
  },
];
