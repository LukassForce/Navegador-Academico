import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificarScreenComponent } from './justificar-screen.component';

describe('JustificarScreenComponent', () => {
  let component: JustificarScreenComponent;
  let fixture: ComponentFixture<JustificarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustificarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustificarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
