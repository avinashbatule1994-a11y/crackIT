import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiStateService } from '../../../services/ui-state.service';
import { Sidebar } from './sidebar';

describe('Sidebar', () => {
  let component: Sidebar;
  let fixture: ComponentFixture<Sidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(Sidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should react to the shared sidebar toggle state', () => {
    const ui = TestBed.inject(UiStateService);

    ui.toggleSidebar();
    fixture.detectChanges();

    expect(component.ui.sidebarWidth()).toBe('2260px');
  });
});
