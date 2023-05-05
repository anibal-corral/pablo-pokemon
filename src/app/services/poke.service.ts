import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  

  constructor() { }

  getPokemones(){
    return of(["Charizard","Squirtle", "Picachu","Bulbasor"])
      
  
    
  }
}
