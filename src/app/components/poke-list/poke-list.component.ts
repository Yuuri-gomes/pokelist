import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonModel, ResultsModel } from 'src/app/model/pokemon.model';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  public pokemons: Array<PokemonModel>;
  constructor(private http: HttpClient) {
    this.pokemons = [];
  }

  ngOnInit(): void { 
    this.getUrlPokemons();
  }

  getUrlPokemons(): void {
    let arr: Array<string> = [];
    this.http.get<ResultsModel>('https://pokeapi.co/api/v2/pokemon').subscribe(data => {
      if(!data) return;
      data.results.forEach(result => {
        arr.push(result.url);
      });

      this.getPokemons(arr);
    });
  }

  getPokemons(arrUrls: Array<string>): void {
    arrUrls.forEach(url => {
      this.http.get<PokemonModel>(url).subscribe(data => {
        if(!data) return;
        this.pokemons.push(data);
      });
    });
  }

}
