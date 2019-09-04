import { Injectable } from '@angular/core';

//create Movie Class with properties: title, description, imageUrl
export class Movie{
  title: string;
  description: string;
  imageUrl: string;

  //create constructor of Movie Class so can create array of Movie class Objects in ListService
  constructor(title, description, imageUrl){
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  moviesList: Movie[] = [
    new Movie("Jaws", "When a killer shark unleashes chaos on a beach community, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.", "assets/jaws.jpeg"),
    new Movie("Terminator 2", "Skynet, the 21st century computer waging a losing war on humans sends a second terminator back in time to destroy the leader of the human resistance while he is still a boy.", "assets/terminator.jpg"),
    new Movie("Aliens", "57 years after Ellen Ripley had a close encounter with the reptilian alien creature from the first movie, she is called back, this time, to help a group of highly trained colonial marines fight off against the sinister extraterrestrials. ", "assets/aliens.jpg"),
    new Movie("Lord of the Rings: The Two Towers", "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.", "assets/twoTowers.jpg"),
    new Movie("Immortal Beloved", "Ludwig van Beethoven dies and his assistant/friend Schindler proceeds to deal with his affairs (last will and testament).", "assets/immortal.jpg")
  ];

  constructor() { }

  addMovie(title: string, description: string, imageUrl: string): void{
    const newMovie = new Movie(title, description, imageUrl);
    this.moviesList.push(newMovie);
  }

  getMovies(): Movie[] {
    return this.moviesList;
  }

  deleteMovie(i: number): void {
    console.log(i);
    this.moviesList.splice(i, 1);
  }
}
