import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlaceAdminComponent } from './edit-place-admin.component';

describe('EditPlaceAdminComponent', () => {
  let component: EditPlaceAdminComponent;
  let fixture: ComponentFixture<EditPlaceAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPlaceAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlaceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
