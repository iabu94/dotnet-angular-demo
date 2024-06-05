import { inject } from '@angular/core';
import { StudentService } from './student.service';
import { ActivatedRouteSnapshot } from '@angular/router';

export const selectedStudentResolver = (state: ActivatedRouteSnapshot) => {
  const id = +state.params['id'];
  return inject(StudentService).getById(id);
}

export const studentsResolver = () => {
  return inject(StudentService).getAll();
}
