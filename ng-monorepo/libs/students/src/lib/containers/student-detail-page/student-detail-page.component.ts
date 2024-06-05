import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../models';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StudentDetailComponent } from '../../components';

interface RouteData {
  student: Student;
}

@Component({
  selector: 'lib-student-detail-page',
  standalone: true,
  imports: [CommonModule, StudentDetailComponent, RouterLink],
  templateUrl: './student-detail-page.component.html',
  styleUrl: './student-detail-page.component.css',
})
export class StudentDetailPageComponent {
  data = inject(ActivatedRoute).snapshot.data as RouteData;
}
