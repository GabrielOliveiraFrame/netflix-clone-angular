import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Event functions', () => {
    it('should navigate to login', () => {
      jest.spyOn(router, 'navigate').mockReturnValue(null);
      component.returnLogin();
      expect(router.navigate).toHaveBeenCalledWith(['public/login']);
    });
    it('Should clean session and local storage', () => {
      var localStorageMock = (function() {
        var store = {};
        return {
          getItem: function(key) {
            return store[key];
          },
          setItem: function(key, value) {
            store[key] = value.toString();
          },
          clear: function() {
            store = {};
          },
          removeItem: function(key) {
            delete store[key];
          }
        };
      })();
      Object.defineProperty(window, 'localStorage', { value: localStorageMock });
      jest.restoreAllMocks();
      const returnLogin = jest.spyOn(component, 'returnLogin');
      const localStorage = jest.spyOn(localStorageMock, 'removeItem');
      component.resetStorage();
      expect(localStorage).toBeCalled();
      expect(window.sessionStorage.getItem('usuario')).toBe(null);
      expect(returnLogin).toHaveBeenCalled();
    });
  });
});
