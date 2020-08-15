import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionCorporalComponent } from './evaluacion-corporal.component';

describe('EvaluacionCorporalComponent', () => {
  let component: EvaluacionCorporalComponent;
  let fixture: ComponentFixture<EvaluacionCorporalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionCorporalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionCorporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
