import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { Observable,Subject } from "rxjs";  

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies?: Movie[];
  currentMovie?: Movie;
  currentIndex = -1;
  title = '';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  
  getAllMovies(): void {
    this.movieService.getAllMovies()
      .subscribe(
        data => {
          this.movies = data;  
          console.log(data);
        },
        
        error => {
          console.log(error);
        });
  }


}
