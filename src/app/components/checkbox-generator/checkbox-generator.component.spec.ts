import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxGeneratorComponent } from './checkbox-generator.component';

describe('CheckboxGeneratorComponent', () => {
  let component: CheckboxGeneratorComponent;
  let fixture: ComponentFixture<CheckboxGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
