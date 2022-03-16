import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';

import { RedirectPrivateGuard } from './redirect-private.guard';

describe('RedirectPrivateGuard', () => {
  let guard: RedirectPrivateGuard;

  const routerMock = {
    navigate: jest.fn()
  }

  const path: string = '/test';
  const fakeRoute: Route = { path };
  const fakeSegment = [{ path }] as UrlSegment[];

  const fakeActivateSnapshot = {} as ActivatedRouteSnapshot;
  const fakeStateSnapshot = '/test' as unknown as RouterStateSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerMock }
      ]
    });
    guard = TestBed.inject(RedirectPrivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('All methods', () => {
    it('should all return false (using localStorage)', () => {
      localStorage.setItem('usuario', 'email@email.com');

      expect(guard.canLoad(fakeRoute, fakeSegment)).toBeFalsy();
      expect(guard.canActivate(fakeActivateSnapshot, fakeStateSnapshot)).toBeFalsy();
    });

    it('should all return true (using localStorage)', () => {
      localStorage.clear();

      expect(guard.canLoad(fakeRoute, fakeSegment)).toBeTruthy();
      expect(guard.canActivate(fakeActivateSnapshot, fakeStateSnapshot)).toBeTruthy();
    });

    it('should all return true (using sessionStorage)', () => {
      sessionStorage.clear();

      expect(guard.canLoad(fakeRoute, fakeSegment)).toBeTruthy();
      expect(guard.canActivate(fakeActivateSnapshot, fakeStateSnapshot)).toBeTruthy();
    });

    it('should all return false (using sessionStorage)', () => {
      sessionStorage.setItem('usuario', 'email@email.com');

      expect(guard.canLoad(fakeRoute, fakeSegment)).toBeFalsy();
      expect(guard.canActivate(fakeActivateSnapshot, fakeStateSnapshot)).toBeFalsy();
    });
  });
});
