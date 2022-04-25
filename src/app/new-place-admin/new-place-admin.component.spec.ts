import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlaceAdminComponent } from './new-place-admin.component';

describe('NewPlaceAdminComponent', () => {
  let component: NewPlaceAdminComponent;
  let fixture: ComponentFixture<NewPlaceAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPlaceAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlaceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
