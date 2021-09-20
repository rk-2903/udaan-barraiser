import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCrashComponent } from './car-crash.component';

describe('CarCrashComponent', () => {
  let component: CarCrashComponent;
  let fixture: ComponentFixture<CarCrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
