import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokeSliderComponent } from './components/poke-slider/poke-slider.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeMainComponent } from './pages/poke-main/poke-main.component';
import { PokeDatailsComponent } from './pages/poke-datails/poke-datails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokeSliderComponent,
    PokeCardComponent,
    PokeMainComponent,
    PokeDatailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
