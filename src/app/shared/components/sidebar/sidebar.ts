import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
// import { UiStateService } from '../../../services/ui-state.service';
import { MENU_ITEMS } from '../../../core/store/subject-topic.store';
import { UiStore } from '../../../core/store/ui.store';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

  ui = inject(UiStore);
  // ui = inject(UiStateService);

  // menuItems = [
  //   { icon: '🏠', label: 'Dashboard', route: '/' },
  //   { icon: '🅰', label: 'Angular', route: '/subjects/angular' },
  //   { icon: '🟨', label: 'JavaScript', route: '/subjects/javascript' },
  //   { icon: '🟦', label: 'TypeScript', route: '/subjects/typescript' },
  //   { icon: '🟩', label: 'Node.js', route: '/subjects/nodejs' },
  //   { icon: '🌐', label: 'HTML', route: '/subjects/html' },
  //   { icon: '🎨', label: 'CSS', route: '/subjects/css' },
  //   { icon: '⚡', label: 'RxJS', route: '/subjects/rxjs' },
  //   { icon: '📦', label: 'NgRx', route: '/subjects/ngrx' },
  //   { icon: '🧠', label: 'Signals', route: '/subjects/signals' },
  //   { icon: '🎯', label: 'Interview', route: '/interview' },
  //   { icon: '❓', label: 'MCQ Practice', route: '/mcq' },
  //   { icon: '📈', label: 'Progress', route: '/progress' }
  // ];

  menuItems = MENU_ITEMS

}