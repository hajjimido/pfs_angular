import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsidehomeComponent } from './insidehome.component';

describe('InsidehomeComponent', () => {
  let component: InsidehomeComponent;
  let fixture: ComponentFixture<InsidehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsidehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsidehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
