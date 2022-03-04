import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarCardComponent } from './similar-card.component';

describe('SimilarCardComponent', () => {
  let component: SimilarCardComponent;
  let fixture: ComponentFixture<SimilarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
