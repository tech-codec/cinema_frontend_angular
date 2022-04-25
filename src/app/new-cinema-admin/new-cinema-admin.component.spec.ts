import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCinemaAdminComponent } from './new-cinema-admin.component';

describe('NewCinemaAdminComponent', () => {
  let component: NewCinemaAdminComponent;
  let fixture: ComponentFixture<NewCinemaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCinemaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCinemaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
