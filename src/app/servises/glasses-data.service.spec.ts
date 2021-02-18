import { TestBed } from '@angular/core/testing';

import { GlassesDataService } from './glasses-data.service';

describe('GlassesDataService', () => {
  let service: GlassesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlassesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
