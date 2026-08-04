import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiStateService {

  readonly sidebarCollapsed = signal(true);

  readonly darkMode = signal(true);

  readonly searchText = signal('');

  readonly notifications = signal(3);

  readonly isMobileMenuOpen = signal(false);

  readonly sidebarWidth = computed(() =>
    this.sidebarCollapsed() ? '0px' : '260px'
  );

  toggleSidebar() {
    console.log("toggeled button clicked")
    this.sidebarCollapsed.update(value => !value);
  }

  toggleTheme() {
    this.darkMode.update(value => !value);
  }

  setSearch(value: string) {
    this.searchText.set(value);
  }

}