import { TestBed } from '@angular/core/testing';

import { VilleAdminService } from './ville-admin.service';

describe('VilleAdminService', () => {
  let service: VilleAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VilleAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
