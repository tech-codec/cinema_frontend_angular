import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVilleAdminComponent } from './edit-ville-admin.component';

describe('EditVilleAdminComponent', () => {
  let component: EditVilleAdminComponent;
  let fixture: ComponentFixture<EditVilleAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVilleAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVilleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
