import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoviesService } from 'src/app/shared/service/movies.service';


@Component({
  selector: 'app-cards-slider',
  templateUrl: './cards-slider.component.html',
  styleUrls: ['./cards-slider.component.css']
})
export class CardsSliderComponent implements OnInit {
  @Input()
  cardExibido:any;

  @Output()
  cardAtivado = new EventEmitter();

  @Input()
  genre: number;

  @Input()
  title: string;

  @Input()
  type: string;

  movies: any;

  movieHoverId:any;

  qualquer:boolean = false;

  ident:string;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.getMovies();
    this.creatId;
  }

  getMovies(){
<<<<<<< HEAD
    this.type === 'genre' ? this.getMoviesByGenre() : this.type ===
    'popular' ? this.getMoviesPopular() : this.getMoviesTopRated();

=======
    this.type === 'genre' ? this.getMoviesByGenre() : this.type === 'popular' ?
    this.getMoviesPopular() : this.getMoviesTopRated();
>>>>>>> 42a2077b65a4dd707d70d439a93535757e5720a5
  }

  getMoviesByGenre(){
    this.moviesService.getByGenre(this.genre).subscribe((data: any) => {
      this.movies = data.results;
    });
  }

<<<<<<< HEAD
  getMoviesTopRated(){
    this.moviesService.getTopRated().subscribe((data: any) => {
=======
  getMoviesPopular(){
    this.moviesService.getPopular().subscribe((data: any) => {
>>>>>>> 42a2077b65a4dd707d70d439a93535757e5720a5
      this.movies = data.results;
    });
  }

<<<<<<< HEAD
  getMoviesPopular(){
    this.moviesService.getPopular().subscribe((data: any) => {
=======
  getMoviesTopRated(){
    this.moviesService.getTopRated().subscribe((data: any) => {
>>>>>>> 42a2077b65a4dd707d70d439a93535757e5720a5
      this.movies = data.results;
    });
  }
  setHoverId(id:any){
    this.movieHoverId = id;  
  }
  creatId(id:any, i:any){
    this.ident = `${i}${id}`;
    return this.ident;
  }
  toggleModalTrue(){
    this.qualquer = true;
    this.cardAtivado.emit(this.genre);
  }
  toggleModalFalse(){
    this.qualquer = false;
  }

  cardPosition(i:any){
    let position = document.getElementById(i);
    console.log(position);
    let pos = position.getBoundingClientRect();
    let cardPos = document.getElementById('position');    
    let posCard = String(pos.x)+'px';
    cardPos.style.marginLeft = posCard;
  }
}
