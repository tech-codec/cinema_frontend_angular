import { TestBed } from '@angular/core/testing';

import { PlaceAdminService } from './place-admin.service';

describe('PlaceAdminService', () => {
  let service: PlaceAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
