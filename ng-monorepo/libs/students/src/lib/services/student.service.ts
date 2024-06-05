import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  #apiUrl = `https://localhost:7093/api/student`;
  http = inject(HttpClient);

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.#apiUrl);
  }

  getById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.#apiUrl}/${id}`);
  }
}
