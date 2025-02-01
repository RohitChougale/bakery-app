import { TestBed } from '@angular/core/testing';

import { CatogoryService } from './catogory.service';

describe('CatogoryService', () => {
  let service: CatogoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatogoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
