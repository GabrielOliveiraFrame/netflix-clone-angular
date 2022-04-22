import { MoviesService } from 'src/app/shared/service/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cardVisto = false;

  generos: any;

  movieClickedId: number;
  showDetails: boolean = false;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres(){
    this.moviesService.getGenres().subscribe(
      (data: any) => {
        this.generos = data.genres;
      }
    );
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
}
