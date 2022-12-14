import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import { PokemonData } from '../models/pokemonData'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private URLPokemon = environment.URLPokeApi;

  constructor(
    private http: HttpClient

     ) { }

  getPokemon(Pokenome:string | number):Observable<PokemonData>{
    return this.http.get<PokemonData>(`${this.URLPokemon}${Pokenome}`);
  }

}
