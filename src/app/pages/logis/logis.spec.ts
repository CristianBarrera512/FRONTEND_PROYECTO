import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisComponent } from './logis';

describe('Logis', () => {
  let component:LogisComponent;
  let fixture: ComponentFixture<LogisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogisComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
