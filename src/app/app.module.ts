import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { Timer2Component } from './timer2/timer2.component';
import { Count2Component } from './timer2/count2/count2.component';
import { Displaytimer2Component } from './timer2/displaytimer2/displaytimer2.component';
import { Logs2Component } from './timer2/logs2/logs2.component';
import { Timelimit2Component } from './timer2/timelimit2/timelimit2.component';
import { BoxComponent } from './box/box.component';
import { StudentsComponent } from './students/students.component';
import { SortingDataComponent } from './sorting-data/sorting-data.component';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    Timer2Component,
    Count2Component,
    Displaytimer2Component,
    Logs2Component,
    Timelimit2Component,
    BoxComponent,
    StudentsComponent,
    SortingDataComponent,
    DynamicDivComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
