import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';

import { ErrMsgComponent } from './err-msg.component';

describe('ErrMsgComponent', () => {
  let component: ErrMsgComponent;
  let fixture: ComponentFixture<ErrMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Method: getMsg', () => {
    it('should return string', () => {
      const control = {
        errors: { required: true },
        touched: true,
        dirty: true
      } as unknown as FormControl;

      component.fieldName = 'Email';
      component.control = control;

      expect(component.getMsg).toBe("O campo 'Email' é obrigatório.");
    });

    it('should return null', () => {
      const control = {
        errors: { required: true },
        touched: false,
        dirty: false
      } as unknown as FormControl;

      component.fieldName = 'Email';
      component.control = control;

      expect(component.getMsg).toBeNull()
    });

  })
});
