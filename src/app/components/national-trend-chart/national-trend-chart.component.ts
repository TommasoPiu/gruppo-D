import {Component, OnInit} from '@angular/core';
import { AndamentoNazionale} from "../../models/andamentoNazionale";
import { DisplayNumbersService } from 'src/app/services/display-numbers.service';
import {of} from "rxjs";
import {filter} from "rxjs/operators";
import deleteProperty = Reflect.deleteProperty;
import {formatDate} from '@angular/common';

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
  res = [
    {
      "name":"Totale positivi",
      "series": []
    },
    {
      "name":"Dimessi guariti",
      "series":[]
    },
    {
      "name":"Deceduti",
      "series":[]
    }
  ];

  show = false;



  view: any[] = [500, 300];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Giorni';
  yAxisLabel: string = 'Persone';
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

  setAndamento(): void {
    this.service.getAndamentoNazionale().subscribe(
      x => {
        x.forEach(val => {
          const newDate = formatDate(val.data, 'dd/MM', 'en-US');
          this.res[0].series.push({name: newDate, value: val.deceduti});
          this.res[1].series.push({name: newDate, value: val.nuovi_positivi});
          this.res[2].series.push({name: newDate, value: val.dimessi_guariti});
        });
        //setTimeout(() => {
          console.log(this.res); console.log(this.result);
        //});
      });
      setTimeout(() => {this.show = true;},2000);

  }

}
