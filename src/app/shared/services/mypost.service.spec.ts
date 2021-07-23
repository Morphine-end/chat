import { TestBed } from '@angular/core/testing';

import { MypostService } from './mypost.service';

describe('MypostService', () => {
  let service: MypostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MypostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
