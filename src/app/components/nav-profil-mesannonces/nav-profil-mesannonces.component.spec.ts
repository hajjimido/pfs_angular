import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavProfilMESANNONCESComponent } from './nav-profil-mesannonces.component';

describe('NavProfilMESANNONCESComponent', () => {
  let component: NavProfilMESANNONCESComponent;
  let fixture: ComponentFixture<NavProfilMESANNONCESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavProfilMESANNONCESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavProfilMESANNONCESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
