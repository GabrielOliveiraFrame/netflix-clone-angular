import { FormValidations } from 'src/app/shared/validators/form-validations';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCardComponent } from './login-card.component';
import { UserService } from 'src/app/shared/service/user.service';
import { ErrMsgComponent } from 'src/app/shared/components/err-msg/err-msg.component';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('LoginCardComponent', () => {
  let component: LoginCardComponent;
  let fixture: ComponentFixture<LoginCardComponent>;

  window.scrollTo = jest.fn();

  const routerMock = {
    navigate: jest.fn(),
  }

  const userServiceMock = {
    getUser: jest.fn(),
  }

  const checkValidationsSpy = jest.spyOn(FormValidations, 'checkValidations');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginCardComponent,
        ErrMsgComponent
      ],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: UserService, useValue: userServiceMock },
        { provide: FormBuilder },
      ],
      imports:[
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component and form', () => {
    expect(component).toBeTruthy();
    expect(component.form).toBeTruthy();
  });

  describe('Method: toogleText', () => {
    it('should switch the value', () => {
      const initialValue = component.activeText;
      const button = fixture.debugElement.query(By.css('.toggleBtn'));
      button.nativeElement.click();
      expect(component.activeText).toBe(!initialValue);
    });
  });

  describe('Method: submit', () => {
    it('should form valid, localStorage contains value && navigatePrivate called', () => {
      const apiResponse = [
        {
          email: 'email@email.com',
          senha: '12345'
        }
      ];

      const navigatePrivateSpy = jest.spyOn(component, 'navigatePrivate');

      component.form.setValue({
        email: 'email@email.com',
        senha: '12345',
        remember: true
      });

      userServiceMock.getUser.mockReturnValue(of(apiResponse));

      component.submit();
      expect(component.form.valid).toBeTruthy();
      expect(localStorage.getItem('usuario')).toBeTruthy();
      expect(navigatePrivateSpy).toHaveBeenCalled();
      expect(routerMock.navigate).toHaveBeenLastCalledWith(['private/home']);
    });

    it('should form invalid && checkValidations called', () => {
      component.form.setValue({
        email: 'email',
        senha: null,
        remember: true
      });

      component.submit();
      expect(component.form.valid).toBeFalsy();
      expect(checkValidationsSpy).toHaveBeenCalled();
    });
  });

  describe('Method: getUser', () => {
    it('should logErr to be true', () => {
      const apiResponse = [];
      userServiceMock.getUser.mockReturnValue(of(apiResponse));

      component.getUser();
      expect(component.logErr).toBeTruthy();
    });
  });

  describe('Method: checkCredentials', () => {
    it('should logErr to be true', () => {
      const userMock = {
        email: 'email@email.com',
        senha: '12354'
      }

      component.responseUser = userMock;
      component.formEmail = 'email@email.com';
      component.formSenha = '12378';
      component.checkCredentials();

      expect(component.logErr).toBeTruthy();
    });
  });

  describe('Method: setStorage', () => {
    it('should sessionStorage contains value', () => {
      component.formRemember = false;

      const userMock = {
        email: 'email@email.com',
        senha: '12354'
      }

      component.responseUser = userMock;
      component.setStorage();
      expect(sessionStorage.getItem('usuario')).toBeTruthy();
    });
  });

  describe('Method: navigateHome', () => {
    it('should called', () => {
      const logo = fixture.debugElement.query(By.css('.logo'));
      logo.nativeElement.click();

      expect(routerMock.navigate).toHaveBeenCalledWith(['public/home']);
    })
  })

});
