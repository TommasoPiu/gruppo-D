import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaliPositiviComponent } from './totali-positivi.component';

describe('TotaliPositiviComponent', () => {
  let component: TotaliPositiviComponent;
  let fixture: ComponentFixture<TotaliPositiviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotaliPositiviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaliPositiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
