import { Component, OnInit, Input } from '@angular/core';
import { DisplayNumbersService } from '../../../services/display-numbers.service';
import { AndamentoNazionale } from '../../../models/andamento-nazionale';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-totali-positivi',
  templateUrl: './totali-positivi.component.html',
  styleUrls: ['./totali-positivi.component.scss']
})
export class TotaliPositiviComponent implements OnInit {

  @Input() andamento: AndamentoNazionale[];

  multi: any[];
  view: any[] = [700, 300];

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = '';
  yAxisLabel: string = '';
  timeline: boolean = true;
  
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private datiService: DisplayNumbersService) { 
    Object.assign(this,  this.andamento );
  }

  ngOnInit(): void {
    
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
