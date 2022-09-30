import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  pokemons:PokemonData[] = []
  hasPokemon: boolean = false;

  constructor(private PokeService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonsRandom();
  }

  getPokemonsRandom(){
    this.pokemons = []
    for (let i = 0; i < 5; i++) {
      let random = Math.floor((Math.random() * 905) + 1);
      this.getPokeService(random);
    }
    console.log(this.pokemons);
  }

  getPokemonSearch(id:string){
    if (id) {
      this.pokemons = []
      this.PokeService.getPokemon(id).subscribe({
        next: (aws) => {
          this.pokemons.push(aws)

          this.hasPokemon = true;
          console.log(`Has Pokemon:${this.hasPokemon}`)
        },
        error: (err) => {
          this.hasPokemon = false;
          console.log(`Has Pokemon:${this.hasPokemon}`)
        },

      })
    }
    else {
      this.getPokemonsRandom();
    }

  }

  getPokeService(id:number){
    this.PokeService.getPokemon(id).subscribe({
      next: (aws) => {this.pokemons.push(aws)},
      complete: () => {this.hasPokemon = true;}
    })
  }

}
