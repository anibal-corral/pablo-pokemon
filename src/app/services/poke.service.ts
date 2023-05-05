import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  

  

  constructor(private http:HttpClient) { }

  getPokemones(){
    return of(["Charizard","Squirtle", "Picachu","Bulbasor"])
      
  
    
  }
  getPokemonesFromService(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=30/')
    
    ; 
  }

  getPokemonByUrl(url:string){
    
    return this.http.get(url);
  }
}
