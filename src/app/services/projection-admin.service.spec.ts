import { TestBed } from '@angular/core/testing';

import { ProjectionAdminService } from './projection-admin.service';

describe('ProjectionAdminService', () => {
  let service: ProjectionAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectionAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
