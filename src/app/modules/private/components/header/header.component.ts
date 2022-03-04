import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   
  cardVisto = false;

  generos = [
    {id: 99, title: "Documentários"},
    {id: 12, title: "Filmes de Aventura"},
    {id: 35, title: "Filmes de Comédia"},
    {id: 16, title: "Animações"},
    {id: 80, title: "Filmes de Crime"},
    {id: 28, title: "Filmes de Ação"},
    {id: 18, title: "Filmes de Drama"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onCardAtivado(event:any){
    this.cardVisto = event;
  }

}
