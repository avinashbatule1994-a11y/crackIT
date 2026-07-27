import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedQuestions } from './featured-questions';

describe('FeaturedQuestions', () => {
  let component: FeaturedQuestions;
  let fixture: ComponentFixture<FeaturedQuestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedQuestions],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedQuestions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
