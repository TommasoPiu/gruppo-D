import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegioniProvinceComponent } from './components/regioni-province/regioni-province.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NationalTrend } from './components/national-trend-chart/national-trend-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NationalTrend
    AppComponent,
    RegioniProvinceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
