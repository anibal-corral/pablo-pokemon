import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokeSliderComponent } from './components/poke-slider/poke-slider.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeMainComponent } from './pages/poke-main/poke-main.component';
import { PokeDatailsComponent } from './pages/poke-datails/poke-datails.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokeSliderComponent,
    PokeCardComponent,
    PokeMainComponent,
    PokeDatailsComponent,
    NavbarComponent
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
