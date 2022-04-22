import { Component,  ElementRef,  OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MoviesService } from 'src/app/shared/service/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private translate: TranslateService,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
  }

  navigateLogin(){
    this.router.navigate(['/public/login']);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('language', language);
    this.moviesService.setLanguage(language);
  }


}
