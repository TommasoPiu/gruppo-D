import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegioniProvinceComponent } from './regioni-province.component';

describe('RegioniProvinceComponent', () => {
  let component: RegioniProvinceComponent;
  let fixture: ComponentFixture<RegioniProvinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegioniProvinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegioniProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
