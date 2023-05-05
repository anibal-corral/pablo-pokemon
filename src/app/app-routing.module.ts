import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeMainComponent } from './pages/poke-main/poke-main.component';

const routes: Routes = [
  { path: '', component: PokeMainComponent, data:{title:'Pokemones'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
