import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCinemaAdminComponent } from './edit-cinema-admin.component';

describe('EditCinemaAdminComponent', () => {
  let component: EditCinemaAdminComponent;
  let fixture: ComponentFixture<EditCinemaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCinemaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCinemaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
