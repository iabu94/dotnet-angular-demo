import { Component, effect, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { Student } from '../../models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-student-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    RouterLink,
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  displayedColumns: string[] = ['id', 'name', 'mobile', 'email'];
  students = input.required<Student[]>();

  dataSource: any;

  constructor() {
    effect(() => {
      this.dataSource = new MatTableDataSource(this.students());
    });
  }

  log(row: any) {
    console.log(row);
  }
}
