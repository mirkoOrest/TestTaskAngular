import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MovieService} from '../../services/movie/movie.service';
import {IMovie} from '../../interfaces/movie/movie.interface';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent  {

  name = '';
  genre1 = '';
  genre2 = '';
  year: number;

  constructor(private movieService: MovieService) { }

  addMovie() {
    const newMovie = {
      name: this.name,
      genre1: this.genre1,
      genre2: this.genre2,
      year: this.year
    };

    this.movieService.addMovie(newMovie).subscribe(movie => {
      console.log(movie);
      this.name = '';
      this.genre1 = '';
      this.genre2 = '';
      // @ts-ignore
      this.year = '';
    } );
  }

}
