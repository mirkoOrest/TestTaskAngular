import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IMovie} from '../../interfaces/movie/movie.interface';
import {MovieService} from '../../services/movie/movie.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviePageComponent implements OnInit {

  movies: IMovie[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(movie => {
      this.movies = movie;
    });
  }

  sortByGenreFirst(): void {
    this.movieService.getByGenreFirst().subscribe(movie => {
      this.movies = movie;
    });
  }

  sortByGenreSecond(): void {
    this.movieService.getByGenreSecond().subscribe(movie => {
      this.movies = movie;
    });
  }

  sortByYear(): void {
    this.movieService.getByYear().subscribe(movie => {
      this.movies = movie;
    });
  }
}



