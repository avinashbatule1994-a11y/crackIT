// import { Injectable, signal } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UiStore {

//   sidebarCollapsed = signal(false);

//   darkMode = signal(false);

//   loading = signal(false);

//   toggleSidebar() {
//     this.sidebarCollapsed.update(v => !v);
//   }

//   toggleTheme() {
//     this.darkMode.update(v => !v);
//   }

// }
import {
  Injectable,
  signal
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiStore {

  sidebarWidth = signal('260px');

  darkMode = signal(false);

  collapseSidebar() {

    this.sidebarWidth.update(width =>
      width === '260px'
        ? '80px'
        : '260px'
    );

  }

  toggleTheme() {

    this.darkMode.update(mode => !mode);

  }

}