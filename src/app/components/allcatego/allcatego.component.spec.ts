import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcategoComponent } from './allcatego.component';

describe('AllcategoComponent', () => {
  let component: AllcategoComponent;
  let fixture: ComponentFixture<AllcategoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcategoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcategoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
