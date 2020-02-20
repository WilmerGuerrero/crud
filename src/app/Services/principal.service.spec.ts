import { TestBed } from '@angular/core/testing';

import { Service } from './principal.service';

describe('principalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const principalservice: Service = TestBed.get(Service);
    expect(principalservice).toBeTruthy();
  });
});
