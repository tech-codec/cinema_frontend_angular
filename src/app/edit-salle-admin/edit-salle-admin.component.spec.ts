import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalleAdminComponent } from './edit-salle-admin.component';

describe('EditSalleAdminComponent', () => {
  let component: EditSalleAdminComponent;
  let fixture: ComponentFixture<EditSalleAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSalleAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSalleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
