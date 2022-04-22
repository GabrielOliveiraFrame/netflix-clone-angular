import { FormValidations } from 'src/app/shared/validators/form-validations';
import { MoviesService } from 'src/app/shared/service/movies.service';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public router: Router,
    private translate: TranslateService,
    private moviesService: MoviesService
  ) {
    FormValidations.setTranslationService(translate);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-7Z7J345KXB', { 'page_path': event.urlAfterRedirects });
      }
    });

    if(localStorage.getItem('language') != null){
      this.translate.setDefaultLang(localStorage.getItem('language'));
      this.translate.use(localStorage.getItem('language'));
      this.moviesService.setLanguage(localStorage.getItem('language'));
    } else {
      this.translate.setDefaultLang('pt-br');
      this.translate.use('pt-br');
    }
  }
}
