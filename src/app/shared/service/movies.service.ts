import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private language = new BehaviorSubject('pt-br');

  constructor(
    private http: HttpClient
  ) { }

  getByGenre(genre: number){
    return this.http.get(`${environment.API_MOVIES_DISCOVER}?api_key=${environment.API_KEY}&language=${this.language.value}&with_genres=${genre}&page=1`);
  }

  getPopular(){
    return this.http.get(`${environment.API_MOVIES}/popular?api_key=${environment.API_KEY}&language=${this.language.value}&page=1`);
  }

  getTopRated(){
    return this.http.get(`${environment.API_MOVIES}/top_rated?api_key=${environment.API_KEY}&language=${this.language.value}&page=1`);
  }

  getDetais(id: number){
    return this.http.get(`${environment.API_MOVIES}/${id}?api_key=${environment.API_KEY}&language=${this.language.value}`);
  }

  getVideos(id: number){
    return this.http.get(`${environment.API_MOVIES}/${id}/videos?api_key=${environment.API_KEY}&language=${this.language.value}`);
  }

  getSimilar(id: number){
    return this.http.get(`${environment.API_MOVIES}/${id}/similar?api_key=${environment.API_KEY}&language=${this.language.value}&page=1`);
  }

  getGenres(){
    return this.http.get(`${environment.API_GENRES}?api_key=${environment.API_KEY}&language=${this.language.value}`);
  }

  setLanguage(language: string){
    this.language.next(language);
  }
}
