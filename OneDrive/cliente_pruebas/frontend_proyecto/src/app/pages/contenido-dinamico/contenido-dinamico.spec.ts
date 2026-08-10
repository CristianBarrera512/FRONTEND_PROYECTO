import { ComponentFixture, TestBed } from '@angular/core/testing';

import { contenidodinamicoComponent } from './contenido-dinamico';

describe('ContenidoDinamico', () => {
  let component: contenidodinamicoComponent;
  let fixture: ComponentFixture<contenidodinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [contenidodinamicoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(contenidodinamicoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
