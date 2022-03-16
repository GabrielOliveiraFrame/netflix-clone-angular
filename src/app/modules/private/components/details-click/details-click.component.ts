import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input, OnChanges } from '@angular/core';
import { MoviesService } from 'src/app/shared/service/movies.service';


@Component({
  selector: 'app-details-click',
  templateUrl: './details-click.component.html',
  styleUrls: ['./details-click.component.css']
})
export class DetailsClickComponent implements OnChanges {
  @Input()
  movieId: number;

  movie: any;
  safeUrl: any;
  showVideo: boolean = true;
  similars: any;
  showAllSimilar: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private domSani: DomSanitizer
  ) { }

  ngOnChanges(): void {
    this.getMovieDetails();
    this.getTrailer();
    this.getSimilarMovies();
  }

  getMovieDetails(){
    this.moviesService.getDetais(this.movieId).subscribe((data: any) => {
      this.movie = data;
    })
  }

  getTrailer(){
    this.moviesService.getVideos(this.movieId).subscribe((data: any) => {
      let continues = true;
      data.results.forEach(video => {
        if((video.type == 'Trailer' || video.type == 'Teaser') && continues == true){
          const url = `https://www.youtube.com/embed/${video.key}?autoplay=1&showinfo=0&controls=0`;
          continues = false;
          this.safeUrl = this.domSani.bypassSecurityTrustResourceUrl(url);
        }
      });
    })
  }

  getSimilarMovies(){
    this.moviesService.getSimilar(this.movieId).subscribe((data: any) => {
      this.similars = data.results;
    })
  }

  get getHours(){
    const minutos = this.movie.runtime;
    const horas = Math.floor(minutos/ 60);
    const min = minutos % 60;
    const textoHoras = (`00${horas}`).slice(-2);
    const textoMinutos = (`00${min}`).slice(-2);
    return `${textoHoras}h ${textoMinutos}min`;
  }

  toggleSimilar(){
    this.showAllSimilar = !this.showAllSimilar;
  }

  close(){
    this.safeUrl = undefined;
    this.showAllSimilar = false;
  }
}
