import { TestBed } from '@angular/core/testing';

import { Tech2seniorsService } from './tech2seniors.service';

describe('Tech2seniorsService', () => {
  let service: Tech2seniorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tech2seniorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
