import { Component, OnInit, Input } from '@angular/core';
import { AndamentoNazionale } from '../../models/andamento-nazionale';
import { DisplayNumbersService } from '../../services/display-numbers.service';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-grafici',
  templateUrl: './grafici.component.html',
  styleUrls: ['./grafici.component.scss']
})
export class GraficiComponent implements OnInit {

  andamentoNazionale: AndamentoNazionale [];

  constructor(private datiService: DisplayNumbersService) { 
    this.populateAndamentoNazionale();
  }

  ngOnInit(): void {
   
  }

  populateAndamentoNazionale(): void{
    this.datiService.getAndamentoNazionale().pipe(
      tap(e => console.log('chiamo servizio'))
      ).subscribe(an => {
      this.andamentoNazionale = an;
    });
  }

}
