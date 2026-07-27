import { Component } from '@angular/core';
import { SubjectCard } from '../subject-card/subject-card';
import { SUBJECTS } from '../../data/subjects';

@Component({
  selector: 'app-subject-grid',
  standalone: true,
  imports: [SubjectCard],
  templateUrl: './subject-grid.html',
  styleUrl: './subject-grid.scss'
})
export class SubjectGrid {
  subjects = SUBJECTS;
}