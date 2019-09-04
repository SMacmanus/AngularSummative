import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ListServiceService, Movie } from '../list-service.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy, OnChanges {
  
  movieList: Movie[] = [];
  displayList: boolean = true;
  newMovieTitle: string = "";
  newMovieDescription: string = "";
  newMovieImageUrl: string = "";
  movieIsBeingEdited = {};
  movieBeingDisplayed: Movie;

  selectedMovie: Movie;

  constructor(private listService: ListServiceService) {
    this.listService = listService;
   }

  ngOnInit() {
    console.log("log init");
    this.getMovies();
  }
  ngOnChanges(){
    console.log("log changes");
  }
  ngOnDestroy(): void {
    console.log("log Destroy")
  }

  onToggleDisplay(){
    this.displayList = !this.displayList;
  }
  onMouseOver(){
    this.displayList = !this.displayList;
  }

  onDeleteMovie(i: number){
    this.listService.deleteMovie(i);
    this.getMovies();
  }
  onAddMovie(newMovieTitle: string, newMovieDescription: string, newMovieImageUrl: string){
    this.listService.addMovie(newMovieTitle, newMovieDescription, newMovieImageUrl);
    this.newMovieTitle= "";
    this.newMovieDescription="";
    this.newMovieImageUrl="";
    this.getMovies();
  }
  onStartEditMovie(i: number){
    this.movieIsBeingEdited[i] = true;
  }
  onSaveEditMovie(i: number){
    this.movieIsBeingEdited[i] = false;
  }
  getMovies() {
    setTimeout(() => {
      this.movieList = this.listService.getMovies();
    }, 0);
  }

  onViewMovieDetails(movie: Movie){
    this.movieBeingDisplayed = movie;
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
