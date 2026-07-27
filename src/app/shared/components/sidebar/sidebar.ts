// import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-sidebar',
//   standalone: true,
//   imports:[RouterLink],
//   templateUrl:'./sidebar.html',
//   styleUrl:'./sidebar.scss'
// })
// export class Sidebar {}

import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UiStateService } from '../../../services/ui-state.service';


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

  ui = inject(UiStateService);
//   menuItems = [
//   {
//     label: 'Dashboard',
//     icon: 'pi pi-home',
//     route: '/'
//   },
//   {
//     label: 'Angular',
//     icon: 'pi pi-prime',
//     route: '/subjects/angular'
//   },
//   {
//     label: 'JavaScript',
//     icon: 'pi pi-code',
//     route: '/subjects/javascript'
//   }
// ];

}