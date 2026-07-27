import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectGrid } from './subject-grid';

describe('SubjectGrid', () => {
  let component: SubjectGrid;
  let fixture: ComponentFixture<SubjectGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
