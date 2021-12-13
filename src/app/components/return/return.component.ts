import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})
export class ReturnComponent implements OnInit {

  public isPokedex: boolean = false;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    const route = this.router.snapshot.url[0].path;
    this.isPokedex = (route === 'pokedex') ? true : false;
  }

}
