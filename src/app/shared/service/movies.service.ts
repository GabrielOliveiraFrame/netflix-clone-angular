import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  getByGenre(genre: number){
    return this.http.get(`${environment.API_MOVIES_DISCOVER}?api_key=${environment.API_KEY}&language=pt-br&with_genres=${genre}&page=1`);
  }  

  getPopular(){
    return this.http.get(`${environment.API_MOVIES}/popular?api_key=${environment.API_KEY}&language=pt-br&page=1`);
  }

  getTopRated(){
    return this.http.get(`${environment.API_MOVIES}/top_rated?api_key=${environment.API_KEY}&language=pt-br&page=1`);
  }

  getDetais(id: number){
    return this.http.get(`${environment.API_MOVIES}/${id}?api_key=${environment.API_KEY}&language=pt-br`);
  }
<<<<<<< HEAD

  getVideos(id: number){
    return this.http.get(`${environment.API_MOVIES}/${id}/videos?api_key=${environment.API_KEY}&language=pt-br`);
  }

   
=======
>>>>>>> 42a2077b65a4dd707d70d439a93535757e5720a5
}
