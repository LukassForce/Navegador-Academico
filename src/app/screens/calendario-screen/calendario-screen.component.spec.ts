import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioScreenComponent } from './calendario-screen.component';

describe('CalendarioScreenComponent', () => {
  let component: CalendarioScreenComponent;
  let fixture: ComponentFixture<CalendarioScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
