import {Component, OnInit} from '@angular/core';
import { AndamentoNazionale} from "../../models/andamentoNazionale";
import { DisplayNumbersService } from 'src/app/services/display-numbers.service';

@Component({
  selector: 'app-national',
  templateUrl: './national-trend-chart.component.html',
  styleUrls: ['./national-trend-chart.component.scss']
})
export class NationalTrend implements OnInit{
  multi: AndamentoNazionale[];

  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private a: DisplayNumbersService) {
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

  ngOnInit(): void {
    this.getAndamento();

  }

  getAndamento(): void{
    this.a.getAndamentoNazionale().subscribe(
      x => {this.multi = x})

  }

}
