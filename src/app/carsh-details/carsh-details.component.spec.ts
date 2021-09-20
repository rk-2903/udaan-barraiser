import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarshDetailsComponent } from './carsh-details.component';

describe('CarshDetailsComponent', () => {
  let component: CarshDetailsComponent;
  let fixture: ComponentFixture<CarshDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarshDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarshDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
