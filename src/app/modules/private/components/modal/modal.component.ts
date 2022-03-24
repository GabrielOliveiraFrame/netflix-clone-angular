import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { MoviesService } from 'src/app/shared/service/movies.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnChanges{

  @Input()
  Id: number;

  movie:any;
  safeUrl: any;

  @Output()
  moreClicked = new EventEmitter();

  hour: any;
  constructor(
    private moviesService: MoviesService,
    private domSani: DomSanitizer
    ) { }

  ngOnChanges(): void {
    this.getMoviesDetails();
    this.getTrailer();
  }

  getMoviesDetails(){
    this.moviesService.getDetais(this.Id).subscribe((data: any) => {
      this.movie = data;
    });
  }

  convertHour(minutos:any){
    const horas = Math.floor(minutos/ 60);
    const min = minutos % 60;
    const textoHoras = (`00${horas}`).slice(-2);
    const textoMinutos = (`00${min}`).slice(-2);
    this.hour = `${textoHoras}h ${textoMinutos}min`;
    return `${textoHoras}h ${textoMinutos}min`;
  }

  getTrailer(){

    this.moviesService.getVideos(this.Id).subscribe((data: any) => {
      this.safeUrl = undefined;
      let continues = true;

      data.results.forEach(video => {
        if(video.type == 'Trailer' || video.type == 'Teaser' && continues == true){
          const url = `https://www.youtube.com/embed/${video.key}?autoplay=1&showinfo=0&controls=0`
          this.safeUrl = this.domSani.bypassSecurityTrustResourceUrl(url);
          continues = false;
        }
      });
    })
  }

  iconClicked(){
    this.moreClicked.emit(true);
  }

}
