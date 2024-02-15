import { TestBed } from '@angular/core/testing';

import { ResponseStoreService } from './response-store.service';

describe('ResponseStoreService', () => {
  let service: ResponseStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
