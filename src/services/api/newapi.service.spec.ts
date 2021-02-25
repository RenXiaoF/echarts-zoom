import { TestBed } from '@angular/core/testing';

import { NewapiService } from './newapi.service';

describe('NewapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewapiService = TestBed.get(NewapiService);
    expect(service).toBeTruthy();
  });
});
