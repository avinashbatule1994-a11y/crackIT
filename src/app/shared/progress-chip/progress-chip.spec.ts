import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressChip } from './progress-chip';

describe('ProgressChip', () => {
  let component: ProgressChip;
  let fixture: ComponentFixture<ProgressChip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressChip],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressChip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
