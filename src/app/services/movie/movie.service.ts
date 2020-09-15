import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IMovie} from '../../interfaces/movie/movie.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>('http://localhost:3000/movie');
  }

  addMovie(movie: IMovie): Observable<IMovie> {
    return this.http.post<IMovie>('http://localhost:3000/movie', movie);

  }

  getByYear(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>('http://localhost:3000/movie/years');
  }

  getByGenreFirst(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>('http://localhost:3000/movie/genresFirst');
  }

  getByGenreSecond(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>('http://localhost:3000/movie/genresSecond');
  }
}
