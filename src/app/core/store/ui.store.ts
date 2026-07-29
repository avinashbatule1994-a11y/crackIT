import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiStore {

  sidebarCollapsed = signal(false);

  darkMode = signal(false);

  loading = signal(false);

  toggleSidebar() {
    this.sidebarCollapsed.update(v => !v);
  }

  toggleTheme() {
    this.darkMode.update(v => !v);
  }

}