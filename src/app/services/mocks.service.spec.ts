import { TestBed } from '@angular/core/testing';

import { MocksService } from './mocks.service';

describe('MocksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MocksService = TestBed.get(MocksService);
    expect(service).toBeTruthy();
  });
});
