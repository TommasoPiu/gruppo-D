import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalTrendChartComponent } from './national-trend-chart.component';

describe('NationalTrendChartComponent', () => {
  let component: NationalTrendChartComponent;
  let fixture: ComponentFixture<NationalTrendChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalTrendChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalTrendChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
