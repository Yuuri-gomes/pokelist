import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonModel } from 'src/app/model/pokemon.model';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  public pokemon : PokemonModel | any;

  constructor(private http: HttpClient, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const pokename = this.router.snapshot.url[1].path;
    this.getPokemonData(pokename);
  }

  getPokemonData(pokename: string): void {
    this.http.get<PokemonModel>(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
    .subscribe(data => {
      this.pokemon = data;
    })
  }

}
