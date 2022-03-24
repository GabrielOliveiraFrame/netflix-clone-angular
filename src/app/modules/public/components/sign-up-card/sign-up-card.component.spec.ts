import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpCardComponent } from './sign-up-card.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { FormValidations } from 'src/app/shared/validators/form-validations';
import { ErrMsgComponent } from 'src/app/shared/components/err-msg/err-msg.component';
import { UserService } from 'src/app/shared/service/user.service';
import { of } from 'rxjs';



describe('SignUpCardComponent', () => {
  let component: SignUpCardComponent;
  let fixture: ComponentFixture<SignUpCardComponent>;
  let router: Router;


  const routerMock = {
    navigate: jest.fn(),
  }

  const userServiceMock = {
    getUser: jest.fn(),
    postUser: jest.fn()
  }

  const checkValidationsSpy = jest.spyOn(FormValidations, 'checkValidations');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpCardComponent,
        ErrMsgComponent],
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder,
        { provide: Router, useValue: routerMock },
        { provide: UserService, useValue: userServiceMock },
        { provide: FormBuilder },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Function Tests', () => {
    it('should navigate to login', () => {
      jest.spyOn(router, 'navigate').mockReturnValue(null);
      let button = fixture.debugElement.query(By.css('button.btn-navigate'));
      button.triggerEventHandler('click', null);
      expect(router.navigate).toHaveBeenCalledWith(['/public/login']);
    });
    it('should navigate to next', () => {
      component.cont = 0;
      component.signUpForm.setValue({ email: 'leomaiaao@gmail.com', senha: '123455' });
      component.navigateNext();
      expect(component.cont).toBe(1);
      component.navigateNext();
      expect(component.cont).toBe(2);
      component.cont = 1;
      component.signUpForm.setValue({
        email: 'leo@leomaia',
        senha: '12345'
      });
      component.navigateNext();
      expect(component.signUpForm.valid).toBeTruthy();
      expect(component.cont).toBe(2);
      component.cont = 1;
      component.signUpForm.setValue({
        email: 'leo',
        senha: '1'
      });
      component.navigateNext();
      expect(component.signUpForm.valid).toBeFalsy();
      expect(component.cont).not.toBe(2);

    });
    const localStorageMock = (() => {
      let store = {};
      return {
        getItem(key) {
          return store[key] || null;
        },
        setItem(key, value) {
          store[key] = value.toString();
        },
        clear() {
          store = {};
        }
      };
    })();
    Object.defineProperty(window, 'sessionStorage', {
      value: localStorageMock
    });
    describe('getUserInfo', () => {
      beforeEach(() => {
        window.sessionStorage.clear();
        jest.restoreAllMocks();
      });
      it('should get user info from session storage', () => {
        const getItemSpy = jest.spyOn(window.sessionStorage, 'getItem');
        window.sessionStorage.setItem('email', JSON.stringify({ email: 'leo@leomaia' }));
        component.formBuilder();
        component.signUpForm.setValue({
          email: 'leo@leomaia',
          senha: '12345'
        });
        expect(component.signUpForm.valid).toBeTruthy();
        expect(component.signUpForm.get('email').value).toEqual('leo@leomaia');
      });
      it('should get user info from session storage', () => {
        const getItemSpy = jest.spyOn(window.sessionStorage, 'getItem');
        window.sessionStorage.setItem('email', JSON.stringify({ email: 'leo@leomaia' }));
        component.formBuilder();
        expect(JSON.parse(component.signUpForm.get('email').value)).toEqual({ email: 'leo@leomaia' });
        expect(getItemSpy).toBeCalledWith('email');
      });
    });
    it('Should validate user and return error', () => {
      const apiResponse = [
        {
          email: 'email@email.com',
          senha: '12345'
        }
      ];
      component.signUpForm.setValue({
        email: 'email@email.com',
        senha: '12345',
      });
      userServiceMock.getUser.mockReturnValue(of(apiResponse));
      component.signUp();
      expect(component.logErr).toBeTruthy();
    })
    it('Should validate user and post', () => {
      jest.spyOn(router, 'navigate').mockReturnValue(null);
      const apiResponse = [];
      component.signUpForm.setValue({
        email: 'email@email.com',
        senha: '12345',
      });
      component.signUp();
      expect(router.navigate).toHaveBeenCalledWith(['/public/login']);
    })
  });
});