
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

  searchText = signal('');

  isMobileMenuOpen = signal(false);

  collapseSidebar() {
    this.toggleSidebar();
  }

  toggleSidebar() {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      const nextState = !this.isMobileMenuOpen();
      this.isMobileMenuOpen.set(nextState);
      this.sidebarWidth.set(nextState ? '260px' : '0px');
      return;
    }

    this.sidebarWidth.update(width => width === '260px' ? '80px' : '260px');
  }

  closeMobileSidebar() {
    this.isMobileMenuOpen.set(false);
    this.sidebarWidth.set('0px');
  }

  setSearch(value: string) {
    this.searchText.set(value);
  }

  toggleTheme() {
    this.darkMode.update(mode => !mode);
  }

}