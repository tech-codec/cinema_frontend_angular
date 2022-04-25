import { TestBed } from '@angular/core/testing';

import { SalleAdminService } from './salle-admin.service';

describe('SalleAdminService', () => {
  let service: SalleAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalleAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
