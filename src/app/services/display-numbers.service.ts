import { Injectable } from '@angular/core';
import { Regione } from '../models/regione';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Provincia } from '../models/provincia';
import { AndamentoNazionale} from "../models/andamentoNazionale";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayNumbersService {

  private regioniUrl = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json';
  private provinceUrl = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json';
  private andamentoNazionale = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json'
  public regioni: Array<Regione>;
  public province: Array<Provincia>;
  public andamentoNazionele: Array<AndamentoNazionale>

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  getRegioni(): Observable<Regione[]> {
    return this.http.get<Regione[]>(this.regioniUrl);
  }

  getProvince(): Observable<Provincia[]> {
    return this.http.get<Provincia[]>(this.provinceUrl);
  }

  getAndamentoNazionale(): Observable<AndamentoNazionale[]>{
    return this.http.get<AndamentoNazionale[]>(this.andamentoNazionale);
  }
}
