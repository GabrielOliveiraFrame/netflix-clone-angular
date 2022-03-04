import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsClickComponent } from './details-click.component';

describe('DetailsClickComponent', () => {
  let component: DetailsClickComponent;
  let fixture: ComponentFixture<DetailsClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
