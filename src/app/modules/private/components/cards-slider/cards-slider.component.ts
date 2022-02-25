import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/service/movies.service';

@Component({
  selector: 'app-cards-slider',
  templateUrl: './cards-slider.component.html',
  styleUrls: ['./cards-slider.component.css']
})
export class CardsSliderComponent implements OnInit {
  @Input()
  genre: number;

  @Input()
  title: string;

  @Input()
  type: string;

  movies: any;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.type === 'genre' ? this.getMoviesByGenre() : null;
    this.type === 'popular' ? this.getMoviesPopular() : this.getMoviesTopRated();
  }

  getMoviesByGenre(){
    this.moviesService.getByGenre(this.genre).subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  getMoviesTopRated(){
    this.moviesService.getPopular().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  getMoviesPopular(){
    this.moviesService.getTopRated().subscribe((data: any) => {
      this.movies = data.results;
    });
  }
}
