import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { TimerComponent } from './timer/timer.component';
import { DisplaytimerComponent } from './timer/displaytimer/displaytimer.component';
import { TimelimitComponent } from './timer/timelimit/timelimit.component';
import { LogsComponent } from './timer/logs/logs.component';
import { CountComponent } from './timer/count/count.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ProductsComponent, TimerComponent, DisplaytimerComponent, TimelimitComponent, LogsComponent, CountComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
