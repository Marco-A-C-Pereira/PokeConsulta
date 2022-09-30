import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/consulta/card/card.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { ErrorComponent } from './components/consulta/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ConsultaComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
