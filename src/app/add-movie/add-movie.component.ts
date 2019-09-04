import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit, OnDestroy {
  //create a movieForm property for AddMovieComponent class
  //movieForm is a function call, that is why the parentheses are first, before curly brace
  movieForm = this.fb.group({
    //array of empty string, so it can start out with an empty value in input box
    title: [''],
    description: [''],
    imageUrl: ['']
  })

  valueChangesSubscription: any;

  constructor(private listService: ListServiceService, private fb: FormBuilder) { 
    console.log(this.movieForm);
  }

  ngOnInit() {
    //valueChanges is an Event
    //is activated any time there are changes in the field
    //subscribe is an observable
    //there are generally 3 different parameters
    //this.valueChangesSubscription added in order to clear contents and stop listening for events
    this.valueChangesSubscription = this.movieForm.valueChanges.subscribe(
      //parameter 1: success parameter
      (result: any) => {
        console.log(result);
      },
      //parameter 2: error parameter
      error => {
        console.log(error);
      },
      //parameter 3: completion parameter
      () => {
        console.log('Done');
      }
    )
  }

  ngOnDestroy() {
    if(this.valueChangesSubscription){
      this.valueChangesSubscription.unsubscribe();
    }
  }

  onSubmit(){
    console.log(this.movieForm);
    const title = this.movieForm.value.title;
    const description = this.movieForm.value.description;
    const imageUrl = this.movieForm.value.imageUrl;

    this.movieForm.value.description;
    this.listService.addMovie(title, description, imageUrl);

    this.onResetForm();
  }

  onResetForm(){
    this.movieForm.reset();
  }

  // onPatchSampleText(){
  //   this.movieForm.patchValue({
  //     description: "Sample Description"
  //   })
  // }

  // onSetSampleText(){
  //   this.movieForm.setValue({
  //     title: "Enter Movie Title",
  //     description: "Enter Movie Description"
  //   })
  // }

}
