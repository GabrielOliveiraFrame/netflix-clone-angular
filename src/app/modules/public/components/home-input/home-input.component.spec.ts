import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { HomeInputComponent } from './home-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrMsgComponent } from 'src/app/shared/components/err-msg/err-msg.component';
import { FormValidations } from 'src/app/shared/validators/form-validations';

describe('HomeInputComponent', () => {
  let component: HomeInputComponent;
  let fixture: ComponentFixture<HomeInputComponent>;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeInputComponent, ErrMsgComponent],
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        FormBuilder
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('sing up tests', () => {
    it('should navigate to login', () => {
      jest.spyOn(router, 'navigate').mockReturnValue(null);
      component.signUp();
      expect(router.navigate).toHaveBeenCalledWith(['/public/signUp']);
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
        component.signUpForm.patchValue({ email: 'leo@leomaia' });
        component.signUp();
        expect(window.sessionStorage.getItem('email')).toEqual('leo@leomaia');
        expect(getItemSpy).toBeCalledWith('email');
      });
    });
    it('should call sign up', () => {
      const signUp = jest.spyOn(component, 'signUp');
      component.signUpForm.setValue({ email: 'leomaiaao@gmail.com'});
      component.submit();
      expect(component.signUpForm.valid).toBeTruthy();
      expect(signUp).toHaveBeenCalled();
    });
    it('should call sign up', () => {
      component.creatForm();
      component.signUpForm.setValue({ email: 'leomaiaao@gmail.com'});
      expect(component.signUpForm.valid).toBeTruthy();
    });
    it('should call sign up', () => {
      const checkValidations = jest.spyOn(FormValidations, 'checkValidations');
      component.signUpForm.setValue({ email: 'leomaiaaogmail.com'});
      component.submit();
      expect(checkValidations).toHaveBeenCalled();
    });
  });
});