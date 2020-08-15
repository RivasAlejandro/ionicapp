import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAlimentacionComponent } from './plan-alimentacion.component';

describe('PlanAlimentacionComponent', () => {
  let component: PlanAlimentacionComponent;
  let fixture: ComponentFixture<PlanAlimentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanAlimentacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanAlimentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
