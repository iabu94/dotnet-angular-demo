import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../models';
import { ActivatedRoute } from '@angular/router';
import { StudentListComponent } from '../../components';

interface RouteData {
  students: Student[];
}

@Component({
  selector: 'lib-student-list-page',
  standalone: true,
  imports: [CommonModule, StudentListComponent],
  templateUrl: './student-list-page.component.html',
  styleUrl: './student-list-page.component.css',
})
export class StudentListPageComponent {
  data = inject(ActivatedRoute).snapshot.data as RouteData;
}
