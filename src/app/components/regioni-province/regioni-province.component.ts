import { Component, OnInit } from '@angular/core';
import { DisplayNumbersService } from 'src/app/services/display-numbers.service';
import { Regione } from 'src/app/models/regione';
import { Provincia } from 'src/app/models/provincia';
import { pipe, of } from 'rxjs';
import { groupBy } from 'rxjs/internal/operators/groupBy';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-regioni-province',
  templateUrl: './regioni-province.component.html',
  styleUrls: ['./regioni-province.component.scss']
})
export class RegioniProvinceComponent implements OnInit {
  regioni: Regione[];
  province: Provincia[];
  displayedColumnsR: string[] = ['denominazione_regione'];
  displayedColumnsP: string[] = ['denominazione_provincia'];

  color: string;

  constructor(private datiSvervice: DisplayNumbersService) { }

  ngOnInit(): void {
    this.getRegioni();
    this.getProvince();
    this.color = 'blue';
  }

  getRegioni(): void {
    this.datiSvervice.getRegioni().pipe().subscribe(regioni => this.regioni = regioni);
  }

  getProvince(): void {
    this.datiSvervice.getProvince().subscribe(province => this.province = province);
  }

  changeColor(color: string): void {
    this.color = color;
    console.log(this.color);
  }


}
