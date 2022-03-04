import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(email:string){
    return this.http.get<any>(`${environment.API_USER}?email=${email}`);
  }
  
  postUser(data:any){
    return this.http.post<any>(environment.API_USER, data);
  }
}
