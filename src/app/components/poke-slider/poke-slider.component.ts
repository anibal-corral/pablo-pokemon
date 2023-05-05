import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-poke-slider',
  templateUrl: './poke-slider.component.html',
  styleUrls: ['./poke-slider.component.css']
})
export class PokeSliderComponent implements OnInit{
  // pokemones:String[]=[
  //   "Charizard","Squirtle", "Picachu","Bulbasor"

  // ];
  pokemones:String[]=[];
  pokemonesFromService:any;
  constructor(private pokeService:PokeService){}
  ngOnInit(): void {
    this.loadPokemones();
    this.loadPokemonesFromService();
  }
  
  loadPokemones(){
    this.pokeService.getPokemones().subscribe(res=>this.pokemones=res);
  }
  loadPokemonesFromService(){
    this.pokeService.getPokemonesFromService().subscribe((resp:any)=>{
     console.log(resp);
     this.pokemonesFromService=resp.results;
    })
  }

}
