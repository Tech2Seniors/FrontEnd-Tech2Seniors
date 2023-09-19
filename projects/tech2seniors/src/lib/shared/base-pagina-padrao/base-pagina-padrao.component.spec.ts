import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePaginaPadraoComponent } from './base-pagina-padrao.component';

describe('BasePaginaPadraoComponent', () => {
  let component: BasePaginaPadraoComponent;
  let fixture: ComponentFixture<BasePaginaPadraoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasePaginaPadraoComponent]
    });
    fixture = TestBed.createComponent(BasePaginaPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
