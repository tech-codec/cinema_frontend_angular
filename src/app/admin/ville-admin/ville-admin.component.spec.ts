import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleAdminComponent } from './ville-admin.component';

describe('VilleAdminComponent', () => {
  let component: VilleAdminComponent;
  let fixture: ComponentFixture<VilleAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VilleAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VilleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
