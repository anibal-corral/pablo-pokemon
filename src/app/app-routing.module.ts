import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeMainComponent } from './pages/poke-main/poke-main.component';
import { PokeDatailsComponent } from './pages/poke-datails/poke-datails.component';

const routes: Routes = [
  { path: '', component: PokeMainComponent, data:{title:'Pokemones'}},
  // { path: '/details', component: PokeDatailsComponent, data:{title:'Detalle de'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
