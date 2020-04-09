import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegioniProvinceComponent } from './components/regioni-province/regioni-province.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NationalTrend } from './components/national-trend-chart/national-trend-chart.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsModule} from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs'
import { SummaryComponent } from './components/summary/summary.component';
import { GraficiComponent} from "./components/grafici/grafici.component";
import { NotesComponent} from "./components/notes/notes.component";
import { TotaliPositiviComponent} from "./components/grafici/variazioni/totali-positivi.component";


@NgModule({
  declarations: [
    AppComponent,
    NationalTrend,
    AppComponent,
    RegioniProvinceComponent,
    SummaryComponent,
    GraficiComponent,
    NotesComponent,
    TotaliPositiviComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule,
    MatListModule,
    MatExpansionModule,
    FormsModule,
    MatTabsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
