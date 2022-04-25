import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVilleAdminComponent } from './new-ville-admin.component';

describe('NewVilleAdminComponent', () => {
  let component: NewVilleAdminComponent;
  let fixture: ComponentFixture<NewVilleAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVilleAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVilleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
