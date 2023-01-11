import { TestBed } from '@angular/core/testing';

import { LoadscriptsService } from './loadscripts.service';

describe('LoadscriptsService', () => {
  let service: LoadscriptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadscriptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
