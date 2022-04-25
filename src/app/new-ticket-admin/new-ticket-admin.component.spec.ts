import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTicketAdminComponent } from './new-ticket-admin.component';

describe('NewTicketAdminComponent', () => {
  let component: NewTicketAdminComponent;
  let fixture: ComponentFixture<NewTicketAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTicketAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTicketAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
