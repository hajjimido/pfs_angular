import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonValidComponent } from './non-valid.component';

describe('NonValidComponent', () => {
  let component: NonValidComponent;
  let fixture: ComponentFixture<NonValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonValidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
