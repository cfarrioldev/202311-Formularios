import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioClasicoComponent } from './formulario-clasico.component';

describe('FormularioClasicoComponent', () => {
  let component: FormularioClasicoComponent;
  let fixture: ComponentFixture<FormularioClasicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioClasicoComponent]
    });
    fixture = TestBed.createComponent(FormularioClasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
