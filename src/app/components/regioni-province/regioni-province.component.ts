import { Component, OnInit } from '@angular/core';
import { DisplayNumbersService } from 'src/app/services/display-numbers.service';
import { Regione } from 'src/app/models/regione';

@Component({
  selector: 'app-regioni-province',
  templateUrl: './regioni-province.component.html',
  styleUrls: ['./regioni-province.component.scss']
})
export class RegioniProvinceComponent implements OnInit {
  regioni: Regione[];

  constructor(private datiSvervice: DisplayNumbersService) { }

  ngOnInit(): void {
    this.getRegioni();
  }

  getRegioni(): void {
    this.datiSvervice.getRegioni().subscribe(regioni => this.regioni = regioni);
  }

}
