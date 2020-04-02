import {Component, OnInit} from '@angular/core';
import { AndamentoNazionale} from "../../models/andamentoNazionale";
import { DisplayNumbersService } from 'src/app/services/display-numbers.service';
import {of} from "rxjs";
import {filter} from "rxjs/operators";
import deleteProperty = Reflect.deleteProperty;

@Component({
  selector: 'app-national',
  templateUrl: './national-trend-chart.component.html',
  styleUrls: ['./national-trend-chart.component.scss']
})
export class NationalTrend implements OnInit{
  result: any [] = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "1990",
          "value": 62000000
        },
        {
          "name": "2010",
          "value": 73000000
        },
        {
          "name": "2011",
          "value": 89400000
        }
      ]
    },

    {
      "name": "USA",
      "series": [
        {
          "name": "1990",
          "value": 250000000
        },
        {
          "name": "2010",
          "value": 309000000
        },
        {
          "name": "2011",
          "value": 311000000
        }
      ]
    },

    {
      "name": "France",
      "series": [
        {
          "name": "1990",
          "value": 58000000
        },
        {
          "name": "2010",
          "value": 50000020
        },
        {
          "name": "2011",
          "value": 58000000
        }
      ]
    },
    {
      "name": "UK",
      "series": [
        {
          "name": "1990",
          "value": 57000000
        },
        {
          "name": "2010",
          "value": 62000000
        }
      ]
    }
  ];
  res = [{"name":"totale_positivi",
          "series": []},
          {"name":"dimessi_guariti",
          "series":[]},
          {"name":"deceduti",
            "series":[]}];



  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Persone';
  yAxisLabel: string = 'Giorni';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private service: DisplayNumbersService) {  }

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
    this.setAndamento();
  }

  setAndamento(): void{
    this.service.getAndamentoNazionale().subscribe(
      x => {
        x.forEach(value => {
          this.res[0].series.push({"name":value.data.toString(),"value":value.deceduti});
          this.res[1].series.push({"name":value.data.toString(),"value":value.nuovi_positivi});
          this.res[2].series.push({"name":value.data.toString(),"value":value.dimessi_guariti});
        }); console.log(this.res); console.log(this.result) });
  }

}
