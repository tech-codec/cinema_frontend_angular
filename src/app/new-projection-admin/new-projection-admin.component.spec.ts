import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectionAdminComponent } from './new-projection-admin.component';

describe('NewProjectionAdminComponent', () => {
  let component: NewProjectionAdminComponent;
  let fixture: ComponentFixture<NewProjectionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProjectionAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
