import { MoviesService } from 'src/app/shared/service/movies.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('language', language);
    this.moviesService.setLanguage(language);
  }

}
