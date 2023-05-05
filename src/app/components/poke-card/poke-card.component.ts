import { Component, Input, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit{

  @Input("pokemon") pokemon:any;
  pokemonInput:any;

  constructor(private pokeservice:PokeService){

  }
  ngOnInit(): void {
      this.loadPokemon();
  }
  loadPokemon(){
    this.pokeservice.getPokemonByUrl(this.pokemon.url).subscribe((resp:any)=>
    {
      console.log(resp);
      this.pokemonInput=resp;
    })
  }
}
