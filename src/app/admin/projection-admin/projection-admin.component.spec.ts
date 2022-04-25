import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionAdminComponent } from './projection-admin.component';

describe('ProjectionAdminComponent', () => {
  let component: ProjectionAdminComponent;
  let fixture: ComponentFixture<ProjectionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectionAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
