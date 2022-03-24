import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  movieClickedId: number;
  showDetails: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCardAtivado(event:any){
    this.cardVisto = event;
  }

  onMoreClicked(event:any){
    this.movieClickedId = event;
    this.showDetails = true;
  }

  mainMovieClick(){
    this.movieClickedId = 568124;
    this.showDetails = true;
  }

  resetStorage(){
    
    sessionStorage.removeItem('usuario');
    localStorage.removeItem('usuario');
    
    this.returnLogin();
  }

  returnLogin(){
    this.router.navigate(['public/login']);
  }

}
