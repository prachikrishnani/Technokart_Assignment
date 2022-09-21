import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private movie = new Subject<any>();

  dataUrl: any = 'https://api.themoviedb.org/3'
  searchMovie:any;
  constructor(private http: HttpClient) { }

  getData(url:any){    
    return this.http.get(`${this.dataUrl}${url}`)
  }
  sendEvent(){
    this.movie.next(true);
  }
  getEvent():Observable<any>{
    return this.movie.asObservable()

  }
 searchData(){    
  return this.http.get(`${this.dataUrl}/search/movie?api_key=3f1f36e6895ad2e02f54e6b2d5731f8f&query=${this.searchMovie}`,this.searchMovie)
    //  
  }

}
