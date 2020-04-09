import { Component, OnInit } from '@angular/core';
import { DisplayAndamentoNazionaleService } from 'src/app/services/display-andamento-nazionale.service';
import { AndamentoNazionale } from '../../models/andamento-nazionale';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  andamentoNazionale: AndamentoNazionale[];

  constructor(private datiSvervice: DisplayAndamentoNazionaleService) { }

  ngOnInit(): void {
    this.getAndamento();
  }

  getAndamento(): void {
    this.datiSvervice.getAndamento().subscribe(andamentoNazionale => this.andamentoNazionale = andamentoNazionale);
  }

}
