import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitacionesComponent } from './capacitaciones.component';

describe('CapacitacionesComponent', () => {
  let component: CapacitacionesComponent;
  let fixture: ComponentFixture<CapacitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacitacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapacitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
