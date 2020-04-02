import { TestBed } from '@angular/core/testing';

import { DisplayNumbersService } from './display-numbers.service';

describe('DisplayNumbersService', () => {
  let service: DisplayNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
