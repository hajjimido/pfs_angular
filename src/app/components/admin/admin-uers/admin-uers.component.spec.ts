import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUersComponent } from './admin-uers.component';

describe('AdminUersComponent', () => {
  let component: AdminUersComponent;
  let fixture: ComponentFixture<AdminUersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
