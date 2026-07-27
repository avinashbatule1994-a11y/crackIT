import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSidebar } from './subject-sidebar';

describe('SubjectSidebar', () => {
  let component: SubjectSidebar;
  let fixture: ComponentFixture<SubjectSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
