import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorContainerComponent } from './components/calculator-container/calculator-container.component';
import { NumberButtonComponent } from './components/number-button/number-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorContainerComponent,
    NumberButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
