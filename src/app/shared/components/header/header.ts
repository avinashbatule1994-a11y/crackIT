
import { Component, inject } from '@angular/core';
import { UiStore } from '../../../core/store/ui.store';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  ui = inject(UiStore);

  toggle() {
    this.ui.toggleSidebar();
  }
}