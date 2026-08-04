
import {
  Component,
  inject
} from '@angular/core';

import { RouterLink } from '@angular/router';

import { SubjectStore } from '../../../../core/store/subject.store';

@Component({
  selector: 'app-subject-sidebar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './subject-sidebar.html',
  styleUrl: './subject-sidebar.scss'
})
export class SubjectSidebar {

  store = inject(SubjectStore);

}