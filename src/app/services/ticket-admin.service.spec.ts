import { TestBed } from '@angular/core/testing';

import { TicketAdminService } from './ticket-admin.service';

describe('TicketAdminService', () => {
  let service: TicketAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
