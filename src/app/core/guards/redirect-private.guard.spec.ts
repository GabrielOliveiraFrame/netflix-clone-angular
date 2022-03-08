import { TestBed } from '@angular/core/testing';

import { RedirectPrivateGuard } from './redirect-private.guard';

describe('RedirectPrivateGuard', () => {
  let guard: RedirectPrivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RedirectPrivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
