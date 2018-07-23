import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateNumbersComponent } from './plate-numbers.component';

describe('PlateNumbersComponent', () => {
  let component: PlateNumbersComponent;
  let fixture: ComponentFixture<PlateNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlateNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
