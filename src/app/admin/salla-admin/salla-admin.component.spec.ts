import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallaAdminComponent } from './salla-admin.component';

describe('SallaAdminComponent', () => {
  let component: SallaAdminComponent;
  let fixture: ComponentFixture<SallaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SallaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SallaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
