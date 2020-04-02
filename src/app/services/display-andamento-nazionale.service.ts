import { Injectable } from '@angular/core';
import { Regione } from '../models/regione';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AndamentoNazionale } from '../models/andamento-nazionale';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayAndamentoNazionaleService {
  // tslint:disable-next-line: max-line-length
  private andamentoUrl = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json';
  public andamentoNazionale: Array<AndamentoNazionale>;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  getAndamento(): Observable<AndamentoNazionale[]> {
    return this.http.get<AndamentoNazionale[]>(this.andamentoUrl);
  }
}
