import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalTrend } from './national-trend-chart.component';

describe('NationalTrend', () => {
  let component: NationalTrend;
  let fixture: ComponentFixture<NationalTrend>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalTrend ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalTrend);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
