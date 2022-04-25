import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectionAdminComponent } from './edit-projection-admin.component';

describe('EditProjectionAdminComponent', () => {
  let component: EditProjectionAdminComponent;
  let fixture: ComponentFixture<EditProjectionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProjectionAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
