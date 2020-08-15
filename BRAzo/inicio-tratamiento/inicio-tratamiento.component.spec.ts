import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioTratamientoComponent } from './inicio-tratamiento.component';

describe('InicioTratamientoComponent', () => {
  let component: InicioTratamientoComponent;
  let fixture: ComponentFixture<InicioTratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioTratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
