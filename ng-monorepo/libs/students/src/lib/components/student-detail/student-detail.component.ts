import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../models';

@Component({
  selector: 'lib-student-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css',
})
export class StudentDetailComponent {
  student = input.required<Student>();
}
