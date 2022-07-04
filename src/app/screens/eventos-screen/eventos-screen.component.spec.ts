import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosScreenComponent } from './eventos-screen.component';

describe('EventosScreenComponent', () => {
  let component: EventosScreenComponent;
  let fixture: ComponentFixture<EventosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
