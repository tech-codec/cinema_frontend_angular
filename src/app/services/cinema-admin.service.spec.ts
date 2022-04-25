import { TestBed } from '@angular/core/testing';

import { CinemaAdminService } from './cinema-admin.service';

describe('CinemaAdminService', () => {
  let service: CinemaAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemaAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
