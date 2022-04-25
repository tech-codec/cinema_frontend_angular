import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSallaAdminComponent } from './new-salla-admin.component';

describe('NewSallaAdminComponent', () => {
  let component: NewSallaAdminComponent;
  let fixture: ComponentFixture<NewSallaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSallaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSallaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
