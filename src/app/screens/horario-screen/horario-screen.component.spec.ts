import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioScreenComponent } from './horario-screen.component';

describe('HorarioScreenComponent', () => {
  let component: HorarioScreenComponent;
  let fixture: ComponentFixture<HorarioScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorarioScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
