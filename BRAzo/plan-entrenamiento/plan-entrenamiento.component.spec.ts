import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanEntrenamientoComponent } from './plan-entrenamiento.component';

describe('PlanEntrenamientoComponent', () => {
  let component: PlanEntrenamientoComponent;
  let fixture: ComponentFixture<PlanEntrenamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanEntrenamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanEntrenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
