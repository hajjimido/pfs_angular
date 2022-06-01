import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitNonValideComponent } from './produit-non-valide.component';

describe('ProduitNonValideComponent', () => {
  let component: ProduitNonValideComponent;
  let fixture: ComponentFixture<ProduitNonValideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitNonValideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitNonValideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
