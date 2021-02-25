import { TestBed } from '@angular/core/testing';

import { UrlAuthenticationGuard } from './url-authentication.guard';

describe('UrlAuthenticationGuard', () => {
  let guard: UrlAuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UrlAuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
