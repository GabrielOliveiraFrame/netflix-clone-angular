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

  @Output()
  moreClicked = new EventEmitter();

  movies: any;

  movieHoverId:any;

  showCard:boolean = false;

  ident:string;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.type === 'genre' ? this.getMoviesByGenre() : this.type === 'popular' ?
    this.getMoviesPopular() : this.getMoviesTopRated();
  }

  getMoviesByGenre(){
    this.moviesService.getByGenre(this.genre).subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  getMoviesPopular(){
    this.moviesService.getPopular().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  getMoviesTopRated(){
    this.moviesService.getTopRated().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  setHoverId(id:any){
    this.movieHoverId = id;
  }

  toggleModalTrue(){
    this.showCard = true;
    this.cardAtivado.emit(this.genre);
  }

  toggleModalFalse(){
    this.showCard = false;
  }

  cardPosition(i:any){
    const position = document.getElementById(i);
    const pos = position.getBoundingClientRect();
    const cardPos = document.getElementById('position');

    const arrowNext = document.querySelector('.carousel-arrow-next');
    const arrowNextPos = arrowNext.getBoundingClientRect();

    const arrowPrev = document.querySelector('.carousel-arrow-prev');
    const arrowPrevPos = arrowPrev.getBoundingClientRect();

    if(arrowNextPos.x >= pos.left && arrowNextPos.x <= pos.right ||
      arrowPrevPos.x >= pos.left && arrowPrevPos.x <= pos.right){
      cardPos.style.display = 'none';
    } else {
      const posCard = String(pos.x)+'px';
      cardPos.style.display = 'block';
      cardPos.style.marginLeft = posCard;
    }

  }

  onMoreClicked(id: any){
    this.moreClicked.emit(id);
  }
}
